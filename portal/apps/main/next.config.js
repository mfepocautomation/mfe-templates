const DOCS_URL = process.env.DOCS_URL || 'http://localhost:3001'

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      /**
       * Rewrites for Multi-Zones
       */
      {
        source: '/fornecedor',
        destination: `${DOCS_URL}/fornecedor`,
      },
      {
        source: '/fornecedor/:path*',
        destination: `${DOCS_URL}/fornecedor/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
