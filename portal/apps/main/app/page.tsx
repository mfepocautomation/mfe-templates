import { Navbar } from '@acme/components/navbar'

export default function Home() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 ml-64">
        <div className="max-w-2xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-6">Cadastrar Benefício</h1>
          <p className="text-lg text-gray-700">
            Preencha os dados para cadastrar um novo benefício no sistema.
          </p>
        </div>
      </div>
    </div>
  )
}
