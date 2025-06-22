import { Navbar } from '@acme/components/navbar'

export default function FornecedorPage() {
  return (
    <div className="flex">
      <Navbar isDocsApp />
      <div className="flex-1 ml-72">
        <div className="max-w-2xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-6">Cadastrar Fornecedor</h1>
          <p className="text-lg text-gray-700">
            Preencha os dados para cadastrar um novo fornecedor no sistema.
          </p>
        </div>
      </div>
    </div>
  )
} 