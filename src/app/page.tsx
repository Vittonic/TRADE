export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">VITTONIC</h1>
          <div className="flex gap-4 items-center">
            <a href="mailto:vittonic@proton.me" className="text-sm">vittonic@proton.me</a>
            <span className="text-sm">GB English</span>
          </div>
        </div>
      </header>
      
      <section className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl font-bold mb-6">VITTONIC</h2>
          <p className="text-2xl mb-8">Stock trading with a TRULY comprehensive service</p>
          <button className="bg-white text-blue-800 px-8 py-3 rounded font-bold hover:bg-gray-100">
            OWN GLOBAL NETWORK
          </button>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border rounded">
              <h4 className="text-xl font-bold mb-4">Stock Purchase</h4>
              <p>Professional stock trading services with global reach.</p>
            </div>
            <div className="p-6 border rounded">
              <h4 className="text-xl font-bold mb-4">Stock Sales</h4>
              <p>Comprehensive sales support for your investments.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
