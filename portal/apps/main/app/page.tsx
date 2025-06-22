import { Navbar } from '@acme/components/navbar'

export default function Home() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 ml-72">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              MFE Main
            </h1>
            <p className="text-xl text-gray-600">
              Boilerplate completo para desenvolvimento de microfrontends
            </p>
          </div>

          {/* Estrutura do Projeto */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Foundation */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Foundation</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Fundação compartilhada com bibliotecas e ferramentas base.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">@acme/design-system</span>
                </div>
                <div className="ml-4 text-sm text-gray-600">
                  • Componentes base (Button, Quote)<br/>
                  • Configuração Tailwind CSS<br/>
                  • Storybook para documentação
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium">@acme/utils</span>
                </div>
                <div className="ml-4 text-sm text-gray-600">
                  • Utilitários de cor (randomColor)<br/>
                  • Funções auxiliares reutilizáveis
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium">eslint-config-acme</span>
                </div>
                <div className="ml-4 text-sm text-gray-600">
                  • Configuração ESLint padronizada
                </div>
              </div>
            </div>

            {/* Packages */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Packages</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Pacotes compartilhados entre microfrontends.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">@acme/components</span>
                </div>
                <div className="ml-4 text-sm text-gray-600">
                  • Navegação (Navbar, PrefetchCrossZoneLinks)<br/>
                  • Componentes UI (shadcn/ui)<br/>
                  • Utilitários CSS (cn function)
                </div>
              </div>
            </div>
          </div>

          {/* Apps */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Microfrontends</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <h3 className="font-semibold text-gray-900">Main App</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">MFE Principal</p>
                <div className="text-xs text-gray-500">
                  • Rota: <code className="bg-gray-100 px-1 rounded">/</code><br/>
                  • Funcionalidade: Cadastro de Benefícios<br/>
                  • Status: Ativo
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h3 className="font-semibold text-gray-900">MFE1</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">MFE Fornecedor</p>
                <div className="text-xs text-gray-500">
                  • Rota: <code className="bg-gray-100 px-1 rounded">/fornecedor</code><br/>
                  • Funcionalidade: Cadastro de Fornecedores<br/>
                  • Status: Ativo
                </div>
              </div>
            </div>
          </div>

          {/* Como Usar */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-blue-800 mb-4">🚀 Como Usar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-blue-800 mb-2">Desenvolvimento</h3>
                <div className="text-sm text-blue-700 space-y-1">
                  <div>• <code className="bg-blue-100 px-1 rounded">pnpm dev</code> - Executar todos os MFEs</div>
                  <div>• <code className="bg-blue-100 px-1 rounded">pnpm --filter main dev</code> - Apenas MFE principal</div>
                  <div>• <code className="bg-blue-100 px-1 rounded">pnpm --filter mfe1 dev</code> - Apenas MFE fornecedor</div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-blue-800 mb-2">Manutenção</h3>
                <div className="text-sm text-blue-700 space-y-1">
                  <div>• <code className="bg-blue-100 px-1 rounded">pnpm build</code> - Build de todos os projetos</div>
                  <div>• <code className="bg-blue-100 px-1 rounded">pnpm lint</code> - Lint de todos os projetos</div>
                  <div>• <code className="bg-blue-100 px-1 rounded">pnpm clean</code> - Limpar builds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
