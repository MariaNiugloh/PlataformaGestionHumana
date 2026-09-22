function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-600">
            Bolsa de Empleo
          </h1>
        </div>
      </header>

      <main>{children}</main>
    </div>
  )
}

export default MainLayout