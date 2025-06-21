'use client'

export function Navbar({ isDocsApp }: { isDocsApp?: boolean }) {
  const navigationItems = isDocsApp ? [
    { href: '/', label: 'Home', isExternal: true },
    { href: '/docs', label: 'Docs', isExternal: false }
  ] : [
    { href: '/', label: 'Home', isExternal: false },
    { href: '/docs', label: 'Docs', isExternal: true }
  ]

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 border-r border-gray-200">
      <div className="p-6">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-xl font-bold text-gray-800">Portal</h1>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="space-y-4">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
