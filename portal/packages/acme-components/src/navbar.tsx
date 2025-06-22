'use client'

import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { cn } from './lib/utils'
import { 
  Building2, 
  Gift, 
  Home, 
  Settings, 
  User, 
  Users,
  ChevronRight,
  Menu
} from 'lucide-react'
import { useState } from 'react'

export function Navbar({ isDocsApp }: { isDocsApp?: boolean }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const navigationItems = isDocsApp ? [
    { 
      href: '/', 
      label: 'Cadastrar Benefício', 
      icon: Gift,
      isExternal: true,
      description: 'Gerenciar benefícios do sistema'
    },
    { 
      href: '/fornecedor', 
      label: 'Cadastrar Fornecedor', 
      icon: Building2,
      isExternal: false,
      description: 'Gerenciar fornecedores'
    }
  ] : [
    { 
      href: '/', 
      label: 'Cadastrar Benefício', 
      icon: Gift,
      isExternal: false,
      description: 'Gerenciar benefícios do sistema'
    },
    { 
      href: '/fornecedor', 
      label: 'Cadastrar Fornecedor', 
      icon: Building2,
      isExternal: true,
      description: 'Gerenciar fornecedores'
    }
  ]

  const secondaryItems = [
    { 
      href: '#', 
      label: 'Usuários', 
      icon: Users,
      description: 'Gerenciar usuários'
    },
    { 
      href: '#', 
      label: 'Configurações', 
      icon: Settings,
      description: 'Configurações do sistema'
    }
  ]

  return (
    <div className={cn(
      "fixed top-0 left-0 h-full bg-gradient-to-b from-slate-900 to-slate-800 text-white transition-all duration-300 ease-in-out z-40",
      isCollapsed ? "w-16" : "w-72"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5" />
              </div>
              <h1 className="text-xl font-bold">Portal</h1>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-slate-300 hover:text-white hover:bg-slate-700"
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-4 space-y-6">
        {/* Main Navigation */}
        <div>
          {!isCollapsed && (
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Aplicações
            </h2>
          )}
          <nav className="space-y-1">
            {navigationItems.map((item, index) => {
              const Icon = item.icon
              return (
                <a
                  key={index}
                  href={item.href}
                  className={cn(
                    "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
                    "hover:bg-slate-700 hover:text-white",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                  )}
                >
                  <Icon className={cn(
                    "mr-3 h-5 w-5 flex-shrink-0",
                    "text-slate-400 group-hover:text-white transition-colors"
                  )} />
                  {!isCollapsed && (
                    <div className="flex-1">
                      <div className="text-slate-200 group-hover:text-white transition-colors">
                        {item.label}
                      </div>
                      <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                        {item.description}
                      </div>
                    </div>
                  )}
                  {!isCollapsed && item.isExternal && (
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  )}
                </a>
              )
            })}
          </nav>
        </div>

        <Separator className="bg-slate-700" />

        {/* Secondary Navigation */}
        <div>
          {!isCollapsed && (
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Sistema
            </h2>
          )}
          <nav className="space-y-1">
            {secondaryItems.map((item, index) => {
              const Icon = item.icon
              return (
                <a
                  key={index}
                  href={item.href}
                  className={cn(
                    "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
                    "hover:bg-slate-700 hover:text-white",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                  )}
                >
                  <Icon className={cn(
                    "mr-3 h-5 w-5 flex-shrink-0",
                    "text-slate-400 group-hover:text-white transition-colors"
                  )} />
                  {!isCollapsed && (
                    <div className="flex-1">
                      <div className="text-slate-200 group-hover:text-white transition-colors">
                        {item.label}
                      </div>
                      <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                        {item.description}
                      </div>
                    </div>
                  )}
                </a>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700">
        {!isCollapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-slate-300" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-slate-200">Usuário</div>
              <div className="text-xs text-slate-400">admin@portal.com</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
