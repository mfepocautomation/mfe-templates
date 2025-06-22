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

A ready-to-use template for building Portal applications with microfrontends. This template helps teams work independently by splitting the application into smaller, manageable parts.

## What's Included

This template provides:

- **Main App**: Handles benefit registration (`/`)
- **Provider MFE**: Handles provider registration (`/fornecedor`)
- **Shared Components**: Reusable UI components and navigation
- **Design System**: Consistent styling with Tailwind CSS
- **Development Tools**: Hot reload, linting, and build optimization

## Quick Start

1. **Clone and install**:
```bash
git clone <repository-url>
cd portal
pnpm install
```

2. **Start development**:
```bash
pnpm dev
```

This starts:
- Main app: `http://localhost:3000`
- Provider MFE: `http://localhost:3001`

## Project Structure

```
portal/
├── apps/
│   ├── main/          # Main application
│   └── mfe1/          # Provider microfrontend
├── packages/
│   └── acme-components/ # Shared components
└── foundation/
    ├── acme-design-system/ # Design system
    ├── acme-utils/         # Utility functions
    └── eslint-config-acme/ # Code standards
```

## Development Commands

- `pnpm dev` - Start all microfrontends
- `pnpm --filter main dev` - Start only main app
- `pnpm --filter mfe1 dev` - Start only provider MFE
- `pnpm build` - Build all projects
- `pnpm lint` - Check code quality
- `pnpm clean` - Clean build files

## How It Works

This template uses Next.js Multi-Zones to create separate applications that share the same domain. Each microfrontend is independent but can share common components and styling.

When you navigate between different microfrontends, the page will refresh because they are separate applications. This is normal behavior for this architecture.

## Customization

To customize this template:

1. **Change organization name**: Replace `acme` with your organization name in all files
2. **Add new microfrontends**: Create new apps in the `apps/` directory
3. **Modify shared components**: Edit files in `packages/` and `foundation/`
4. **Update styling**: Modify Tailwind configuration in the design system

## Publishing Packages

This template includes Changesets for managing package versions:

```bash
pnpm changeset  # Create a new version
pnpm release    # Publish packages
```

## Support

For questions or issues, please refer to the project documentation or create an issue in the repository.
