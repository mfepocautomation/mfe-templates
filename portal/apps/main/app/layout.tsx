import type { Metadata } from 'next'
import { PrefetchCrossZoneLinks } from '@acme/components/prefetch'
import '@vercel/examples-ui/globals.css'

export const metadata: Metadata = {
  title: 'MFE Main',
  description: 'Boilerplate completo para desenvolvimento de microfrontends',
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
        <PrefetchCrossZoneLinks hrefs={['/docs', '/docs/about']} />
      </body>
    </html>
  )
}
