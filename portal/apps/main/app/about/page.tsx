import { Text, Code, Link } from '@vercel/examples-ui'
import { Navbar } from '@acme/components/navbar'

export default function AboutPage(): React.ReactNode {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 ml-64">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Text variant="h1" className="mb-6">
            About
          </Text>
          <Text>
            This is the about page, defined in{' '}
            <Code>apps/main/app/about/page.tsx</Code>
          </Text>
          <Text className="mt-4">
            Navigations between <Link href="/">Home</Link> and{' '}
            <Link href="/about">About</Link> are client-side transitions because
            they&apos;re part of the same Next.js app, even if their source lives
            externally. Navigating to{' '}
            <a
              className="text-link hover:text-link-light transition-colors"
              href="/docs"
            >
              Docs (Multi-Zones)
            </a>{' '}
            requires a page refresh because it lives in a different Next.js app.
          </Text>
        </div>
      </div>
    </div>
  )
}
