import type { Metadata } from 'next'
import { PrefetchCrossZoneLinks } from '@acme/components/prefetch'
import '@vercel/examples-ui/globals.css'

export const metadata: Metadata = {
  title: 'Microfrontends - Docs',
  description: 'Example demonstrating vertical microfrontends on Vercel',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <PrefetchCrossZoneLinks hrefs={['/', '/about']} />
      </body>
    </html>
  )
}
