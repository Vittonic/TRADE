'use client';

export default function ClientBody() {
  return (
    <main className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 flex justify-center items-center text-sm">
        <a href="mailto:vittonic@proton.me" className="hover:underline">✉ vittonic@proton.me</a>
      </div>

      {/* Header */}
      <header className="bg-white py-6 px-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-4xl font-bold text-blue-900">VITTONIC</div>
          <button className="md:hidden">☰</button>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section 
        className="relative min-h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://i.imgur.com/UpCzhnF.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            VITTONIC
          </h1>
          <p className="text-2xl md:text-3xl mb-8">
            Stock trading with a <span className="font-bold">TRULY</span> comprehensive service
          </p>
        </div>
      </section>

      {/* Three Feature Boxes */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div className="border-2 border-blue-900 p-8 text-center hover:shadow-lg transition">
            <div className="text-6xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-blue-900 uppercase">Own Global Network</h3>
          </div>
          <div className="border-2 border-blue-900 p-8 text-center hover:shadow-lg transition">
            <div className="text-6xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-blue-900 uppercase">Maximum Discretion</h3>
          </div>
          <div className="border-2 border-blue-900 p-8 text-center hover:shadow-lg transition">
            <div className="text-6xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-blue-900 uppercase">We Pay & Load</h3>
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center border-b-4 border-blue-900 inline-block pb-2">WHO ARE WE?</h2>
          <div className="text-lg space-y-4 mt-8">
            <p>
              VITTONIC is a company dedicated to <strong>stock trading</strong>. Since 2005, we have been offering both stock sellers and buyers a <strong>comprehensive service</strong>.
            </p>
            <p>
              We currently have a <strong>global network of suppliers and clients</strong> that allows us to provide responses and solutions to both parties based on their needs at any given time.
            </p>
            <p>
              We manage purchases quickly, efficiently and with fast payment to sellers. We also manage sales globally with an exclusive network of clients that responds to all types of offers.
            </p>
            <p>
              We stand out for offering all necessary solutions regarding <strong>customs documentation management</strong>, <strong>creditor insolvency proceedings</strong> and <strong>international transport</strong>.
            </p>
            <p>
              Currently, we have our <strong>headquarters in Olesa de Montserrat</strong>, Barcelona (Spain) and a <strong>warehouse located in Mönchengladbach</strong>, Germany.
            </p>
          </div>
        </div>
      </section>

      {/* Stock Purchase Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">STOCK PURCHASE</h2>
          <div className="text-lg space-y-4">
            <p>
              Our work system is simple and agile: we visit the location, perform the <strong>product valuation</strong>, manage offers, <strong>pay</strong>, load and <strong>close operations quickly and efficiently</strong>.
            </p>
            <h3 className="text-2xl font-bold mt-6">What do we buy?</h3>
            <p>
              <strong>We buy all types of stocks</strong>, from business surpluses or logistics abandonments to products from creditor insolvency or insurance claims.
            </p>
            <a href="#stocks" className="inline-block bg-blue-900 text-white px-8 py-3 rounded mt-4 hover:bg-blue-800 transition">
              see full list
            </a>
          </div>
        </div>
      </section>

      {/* Stock Sales Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">STOCK SALES</h2>
          <div className="text-lg space-y-4">
            <p>
              If you are interested in becoming part of our <strong>buyer network</strong>, contact us and we will explain how we work.
            </p>
            <p>
              We will always notify you when we receive an interesting stock for you.
            </p>
            <a href="#contact" className="inline-block bg-blue-900 text-white px-8 py-3 rounded mt-4 hover:bg-blue-800 transition">
              contact us now
            </a>
          </div>
        </div>
      </section>

      {/* Stock Types Grid */}
      <section id="stocks" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">STOCK PURCHASES</h2>
          <p className="text-center text-xl mb-12 max-w-4xl mx-auto">
            Discover all the types of stocks we buy. We are experts in buying and selling stocks, business surpluses, store closures, logistics abandonments, discontinued and end-of-season products, creditor insolvency, auctions, insurance claims and salvage, etc.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-300 p-6 hover:shadow-xl transition">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Stocks</h3>
              <p>We visit the location, evaluate the products, manage offers, pay and load. Always fast and efficient.</p>
            </div>
            
            <div className="border border-gray-300 p-6 hover:shadow-xl transition">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Business Surplus</h3>
              <p>We free up space in your premises or warehouse by buying those products you no longer need or that clutter your business.</p>
            </div>
            
            <div className="border border-gray-300 p-6 hover:shadow-xl transition">
              <div className="text-5xl mb-4">🚪</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Store Closures</h3>
              <p>We take care of evaluating and making offers for the remaining items in closing stores.</p>
            </div>
            
            <div className="border border-gray-300 p-6 hover:shadow-xl transition">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Logistics Abandonments</h3>
              <p>We eliminate the headaches of logistics centers by buying products abandoned by delinquent customers.</p>
            </div>
            
            <div className="border border-gray-300 p-6 hover:shadow-xl transition">
              <div className="text-5xl mb-4">🏷️</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Discontinued & End of Season</h3>
              <p>We are official liquidators for large national and international companies.</p>
            </div>
            
            <div className="border border-gray-300 p-6 hover:shadow-xl transition">
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Creditor Insolvency</h3>
              <p>We become a solution for insolvency administrators.</p>
            </div>
            
            <div className="border border-gray-300 p-6 hover:shadow-xl transition">
              <div className="text-5xl mb-4">🔨</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Auctions</h3>
              <p>When we are not the primary buyers, we organize auctions for the offered goods.</p>
            </div>
            
            <div className="border border-gray-300 p-6 hover:shadow-xl transition">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Insurance Claims & Salvage</h3>
              <p>We assist insurance appraisers in valuing and salvaging products affected by claims.</p>
            </div>
            
            <div className="border border-gray-300 p-6 hover:shadow-xl transition">
              <div className="text-5xl mb-4">✈️</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Import & Export</h3>
              <p>Expert in managing supplier search, production, quality controls, import and door-to-door service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Email Only */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">CONTACT US</h2>
          <p className="text-xl mb-12">
            Contact us and start being part of our wide and select group of collaborators and suppliers. Are you selling or buying stocks? Whatever your answer, at VITTONIC we have the experience you need.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-6xl mb-4">✉️</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Email Us</h3>
            <a 
              href="mailto:vittonic@proton.me" 
              className="text-2xl text-blue-900 hover:underline font-semibold"
            >
              vittonic@proton.me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16 px-4">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-xl mb-4 uppercase">About VITTONIC</h4>
            <p className="text-sm">
              Vittonic is a company dedicated to stock trading and offering the necessary services to both buyers and sellers to carry out successful transactions.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-4 uppercase">Featured Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#stocks" className="hover:underline">Stock Purchase</a></li>
              <li><a href="#" className="hover:underline">Stock Sales</a></li>
              <li><a href="#" className="hover:underline">Creditor Insolvency</a></li>
              <li><a href="#" className="hover:underline">Imports and Exports</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-4 uppercase">Contact</h4>
            <div className="text-sm space-y-2">
              <p><strong>Address:</strong> England and Wales</p>
              <p><strong>Email:</strong> <a href="mailto:vittonic@proton.me" className="hover:underline">vittonic@proton.me</a></p>
            </div>
          </div>
        </div>
        
      </footer>
    </main>
  );
}
