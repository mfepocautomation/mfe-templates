import { Text, Code, Link } from '@vercel/examples-ui'
import { Navbar } from '@acme/components/navbar'

export default function IndexPage() {
  return (
    <div className="flex">
      <Navbar isDocsApp />
      <div className="flex-1 ml-64">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Text variant="h1" className="mb-6">
            Docs
          </Text>
          <Text className="mb-4">
            This is the index page in the docs app (
            <Code>apps/mfe1/app/docs/page.tsx</Code>).
          </Text>
          <Text>
            Navigations between <Link href="/docs">Docs</Link> and{' '}
            <Link href="/docs/about">About Docs</Link> are client-side transitions
            because they&apos;re part of the same Next.js app. Navigating to{' '}
            <a
              className="text-link hover:text-link-light transition-colors"
              href="/"
            >
              Home (Multi-Zones)
            </a>{' '}
            requires a page refresh because it lives in a different Next.js app.
          </Text>
        </div>
      </div>
    </div>
  )
}
