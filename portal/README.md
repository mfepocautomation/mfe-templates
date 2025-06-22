---
name: Portal Microfrontends Template
slug: portal-microfrontends
description: A complete microfrontends template for Portal applications, allowing teams to work independently by splitting the application into smaller, shareable, and modular components.
framework: Next.js
useCase: Monorepos
css: Tailwind
relatedTemplates:
  - monorepo-turborepo
  - turborepo-next-basic
  - turborepo-sveltekit-starter
---

# Portal Microfrontends Template

A complete microfrontends template for Portal applications that allows teams to work independently of each other by splitting the application into smaller, shareable, and modular components. The primary goal for a microfrontend strategy is to reduce the size of a single application to improve developer velocity while still allowing teams to collaborate with each other.

We recommend reading the ["How it works"](#how-it-works) section to understand the reasoning behind our implementation and the ["What's included"](#whats-included) section to know more about the tools we used.

## Demo

This template includes a working Portal application with multiple microfrontends.

## How to use

You can use this template by cloning the repository and following these steps:

### Clone and setup

Clone this repository and install dependencies:

```bash
git clone <repository-url>
cd portal
pnpm install
```

Next, run the included Next.js apps in development mode:

```bash
pnpm dev
```

This will start:
- Main app on `http://localhost:3000`
- MFE1 (Provider) on `http://localhost:3001`

## What's Included?

The template is a monorepo built with [Turborepo](https://turborepo.org/) with the following setup:

- Everything is in [TypeScript](https://www.typescriptlang.org/)
- Next.js is used for the applications in [./apps](./apps)
- Shared packages used by the apps in [./packages](./packages)
- Foundation packages in [./foundation](./foundation) for design system and utilities
- [Tailwind CSS](https://tailwindcss.com) for utility CSS in React components and to build the design system
- Storybook is used for the components that are part of the [`acme-design-system`](./foundation/acme-design-system) package
- The ESLint config lives in [eslint-config-acme](./foundation/eslint-config-acme)
- [Changesets](https://github.com/changesets/changesets) to manage versioning and publishing of packages. Learn more in the [Versioning & Publishing Packages](#versioning--publishing-packages) section.

## Project Structure

### Foundation
Shared foundation with base libraries and tools:
- **@acme/design-system**: Base components (Button, Quote), Tailwind CSS configuration, Storybook documentation
- **@acme/utils**: Utility functions (randomColor), reusable helper functions
- **eslint-config-acme**: Standardized ESLint configuration

### Packages
Shared packages between microfrontends:
- **@acme/components**: Navigation (Navbar, PrefetchCrossZoneLinks), UI components (shadcn/ui), CSS utilities (cn function)

### Microfrontends
- **Main App**: Principal MFE handling benefit registration at route `/`
- **MFE1**: Provider MFE handling provider registration at route `/fornecedor`

## How it Works

There are many strategies for designing microfrontends and your approach will be dictated by how you want to structure your applications and teams. We'll share a few different approaches and how they work.

### Multi-Zones

[Multi-Zones](https://nextjs.org/docs/app/building-your-application/deploying/multi-zones) is a way of having independent Next.js applications that all render on a common domain. This is a method for building separation of concerns in large teams. It works well if a single domain has separate groupings of pages where a user doesn't navigate between the groups very often.

In this template, [./apps/main](./apps/main) is our main app, and [./apps/mfe1](./apps/mfe1) is a separate app that handles provider-related routes. We have multiple apps in the same domain that are built independent of each other.

You'll notice that transitions between different microfrontends have to perform a full page refresh because the separate Next.js apps can't share their JS and don't have common chunks. Next.js prefetching is not possible here, and you have to rely on your own browser prefetching to streamline the transitions (see `packages/acme-components/src/prefetch-cross-zone-links.tsx` for an example). The slower transitions between apps may or may not be a problem depending on your specific use case. For that reason, we only recommend using Multi-Zones for cases where you have pages that are logically in separate applications but need to be served on the same domain.

### Design System with Tailwind and CSS Modules

[./foundation/acme-design-system](./foundation/acme-design-system) features multiple components with CSS Modules and [Tailwind](https://tailwindcss.com/). The components are installed in the app as a dependency and the compilation step is handled by [SWC](https://swc.rs/).

All the CSS used by the app and components is unified by Tailwind, so having components outside the app doesn't increase the CSS bundle size.

HMR and React Fast Refresh work as expected even though the components live outside the app and have a different build process.

### Monorepo Support

This template uses a monorepo to make it easier to share code across separate microfrontends. When a change is made to a component used by multiple applications, the developer only has to change one repository and all affected applications will be updated. This template uses [Turborepo](https://turborepo.org/) to improve the monorepo experience.

### Polyrepos

While a monorepo is very useful, the tooling and approaches described above should also work with polyrepos. The most important difference is that, when packages are outside of your application's repository, you won't be able to have hot module reloading for your packages out-of-the-box. In this case, you will install the package in your applications and control updates with versioning. To earn HMR, you would need to [link node modules with a package manager](https://pnpm.io/cli/link). Any time the common code is changed, the package version would need to be bumped and consumers would have to update their dependency and release the application.

### Module Federation

Module federation is a strategy for building applications in a large organization with many teams that want to prioritize shipping velocity. We encourage you to research module federation as an option for helping teams build as a part of a large organization where teams may not have the opportunity to communicate and work together.

## Development Commands

### Development
- `pnpm dev` - Run all microfrontends
- `pnpm --filter main dev` - Run only main MFE
- `pnpm --filter mfe1 dev` - Run only provider MFE

### Maintenance
- `pnpm build` - Build all projects
- `pnpm lint` - Lint all projects
- `pnpm clean` - Clean builds

## Versioning & Publishing Packages

If sharing code across repositories, [Changesets](https://github.com/changesets/changesets) is a great tool to manage versions, create changelogs, and publish to npm. It's preconfigured in this template so you can start publishing packages immediately.

### Generating Changesets

To generate a changeset, run the following command in the root of the project:

```bash
pnpm changeset
```

The Changeset CLI will ask you a couple of questions:

1. **Which packages would you like to include?** – This shows which packages have changed and which have remained the same. By default, no packages are included. Press `space` to select the packages you want to include in the `changeset`.
1. **Which packages should have a major bump?** – Press `space` to select the packages you want to bump versions for.
1. If doing the first major version, confirm you want to release.
1. Write a summary for the changes.
1. Confirm the changeset looks as expected.
1. A new Markdown file will be created in the `changeset` folder with the summary and a list of the packages included.

### Publishing Changesets

Publishing can be done manually with:

```bash
pnpm release
```

The release script defined in `package.json` looks like this:

```bash
turbo run build --filter=main... && changeset publish
```

Turborepo will run the `build` script for all publishable dependencies of the `main` app, excluding the `main` app itself, and then publishes the new versions to npm.

By default, this template uses `acme` as the npm organization. To change this, do the following:

- Rename folders in `foundation/*` and `packages/*` to replace `acme` with your desired scope
- Search and replace `acme` with your desired scope
- Re-run `pnpm install`
