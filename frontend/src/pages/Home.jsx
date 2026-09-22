import MainLayout from '../layouts/MainLayout'

function Home() {
  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Encuentra nuevas oportunidades laborales
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Explora nuestras ofertas de empleo y encuentra una oportunidad
          que se adapte a tu perfil.
        </p>

        <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
          Ver vacantes
        </button>
      </section>
    </MainLayout>
  )
}

export default Home