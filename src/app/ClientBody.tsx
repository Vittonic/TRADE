'use client';

export default function ClientBody() {
  return (
    <main className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 flex justify-between text-sm">
        <a href="mailto:vittonic@proton.me">vittonic@proton.me</a>
        <span>🇬🇧 English</span>
      </div>

      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">VITTONIC</h1>
          <button className="text-blue-900">☰</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-white py-24" style={{backgroundImage: 'url(https://i.imgur.com/UpCzhnF.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>          <h2 className="text-6xl font-bold mb-8">VITTONIC</h2 relative z-10>
                <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
          <p className="text-2xl mb-2">Stock trading with a</p>
          <p className="text-4xl font-bold mb-12">TRULY comprehensive service</p>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <button className="bg-white text-blue-900 font-bold px-8 py-4 rounded w-full text-lg">
              OWN GLOBAL NETWORK
            </button>
            <button className="bg-white text-blue-900 font-bold px-8 py-4 rounded w-full text-lg">
              MAXIMUM DISCRETION
            </button>
            <button className="bg-white text-blue-900 font-bold px-8 py-4 rounded w-full text-lg">
              WE PAY & LOAD
            </button>
          </div>
        </div>
      </section>

      {/* Who are we Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Who are we?</h2>
          <div className="h-1 w-16 bg-blue-900 mb-8"></div>
          
          <p className="text-gray-700 mb-4">
            VITTONIC is a company dedicated to <strong>stock trading</strong>. Since 2005, we have been offering both stock sellers and buyers a <strong>comprehensive service</strong>.
          </p>
          
          <p className="text-gray-700 mb-4">
            We currently have a <strong>global network of suppliers and clients</strong> that allows us to provide responses and solutions to both parties based on their needs at any given time.
          </p>
          
          <p className="text-gray-700 mb-4">
            We manage purchases quickly, efficiently and with fast payment to sellers. We also manage sales globally with an exclusive client network that responds to all types of offers.
          </p>
          
          <p className="text-gray-700 mb-4">
            We stand out for offering all necessary solutions regarding <strong>customs documentation management</strong>, <strong>creditor insolvency proceedings</strong> and <strong>international transport</strong>.
          </p>
          
          <p className="text-gray-700">
            Currently, we have our <strong>headquarters in Olesa de Montserrat</strong>, Barcelona (Spain) and a <strong>warehouse located in Mönchengladbach</strong>, Germany.
          </p>
        </div>
      </section>

      {/* Stock Purchase Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">STOCK PURCHASE</h2>
          
          <p className="text-gray-700 mb-6">
            Our work system is simple and agile: we visit the location, perform the <strong>product valuation</strong>, manage offers, <strong>pay</strong>, load and <strong>close operations quickly and efficiently</strong>.
          </p>
          
          <h3 className="text-2xl font-bold text-blue-900 mb-4">What do we buy?</h3>
          <p className="text-gray-700 mb-4">
            <strong>We buy all types of stocks</strong>, from business surpluses or logistics abandonments to products from creditor insolvency or insurance claims.
          </p>
          
          <a href="#stocks" className="inline-block bg-blue-900 text-white px-6 py-3 rounded font-bold hover:bg-blue-800 transition">see full list</a>
        </div>
      </section>

      {/* Stock Sales Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">STOCK SALES</h2>
          
          <p className="text-gray-700 mb-4">
            If you are interested in becoming part of our <strong>buyer network</strong>, contact us and we will explain how we work.
          </p>
          
          <p className="text-gray-700 mb-6">
            We will always notify you when we receive an interesting stock for you.
          </p>
          
          <a href="#contact" className="text-blue-600 underline">contact us now</a>
        </div>
      </section>

      {/* Stock Purchases Types Section */}
      <section id="stocks" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">STOCK PURCHASES</h2>
          <p className="text-gray-700 mb-8">Discover all the types of stocks we buy.</p>
          <p className="text-gray-700 mb-12">We are experts in buying and selling stocks, business surpluses, store closures, logistics abandonments, discontinued and end-of-season products, creditor insolvency, auctions, insurance claims and salvage, etc.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Stocks</h3>
              <p className="text-gray-700">We visit the location, evaluate the products, manage offers, pay and load. Always fast and efficient.</p>
            </div>
            
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Business Surplus</h3>
              <p className="text-gray-700">We free up space in your premises or warehouse by buying those products you no longer need or that clutter your business. We evaluate, pay and load.</p>
            </div>
            
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Store Closures</h3>
              <p className="text-gray-700">We take care of evaluating and making offers for the remaining items in closing stores. We pay a fair price, load and clear the premises.</p>
            </div>
            
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Logistics Abandonments</h3>
              <p className="text-gray-700">We eliminate the headaches of logistics centers by buying products abandoned by delinquent customers or the Tax Agency. We offer fair prices and fast stock collection to free up space.</p>
            </div>
            
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Discontinued & End of Season Products</h3>
              <p className="text-gray-700">We are official liquidators for large national and international companies, handling discontinued or end-of-season products.</p>
            </div>
            
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Creditor Insolvency</h3>
              <p className="text-gray-700">We become a solution for insolvency administrators, who often designate us in the liquidation plan as exclusive liquidators.</p>
            </div>
            
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Auctions</h3>
              <p className="text-gray-700">When we are not the primary buyers, we organize auctions for the offered goods, achieving the best valuation and price.</p>
            </div>
            
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Insurance Claims & Salvage</h3>
              <p className="text-gray-700">We assist insurance appraisers in valuing and salvaging products affected by claims, attempting to give them a second life or market outlet.</p>
            </div>
            
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Import & Export</h3>
              <p className="text-gray-700">No one is better than us at managing supplier search, production, quality controls, import and door-to-door service from Asia or other parts of the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">CONTACT US</h2>
          
          <p className="text-gray-700 mb-8">
            Contact us and start being part of our wide and select group of collaborators and suppliers. Are you selling or buying stocks? Whatever your answer, at VITTONIC we have the experience you need.
          </p>
          
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="*Full Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded"
            />
            
            <input 
              type="text" 
              placeholder="Company"
              className="w-full px-4 py-3 border border-gray-300 rounded"
            />
            
            <input 
              type="email" 
              placeholder="*Email Address"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded"
            />
            
            <select 
              className="w-full px-4 py-3 border border-gray-300 rounded text-gray-500"
              required
            >
              <option>*Reason for Contact</option>
              <option>I want to sell stocks</option>
              <option>I want to buy stocks</option>
              <option>Other</option>
            </select>
            
            <textarea 
              placeholder="*Message"
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded"
            ></textarea>
            
            <div className="flex items-start space-x-2">
              <input 
                type="checkbox" 
                id="consent"
                required
                className="mt-1"
              />
              <label htmlFor="consent" className="text-sm text-gray-700">
                I consent to the processing of my data. VITTONIC will process your data to respond to your queries, questions or complaints.
              </label>
            </div>
            
            <button 
              type="submit"
              className="bg-blue-900 text-white font-bold px-8 py-3 rounded hover:bg-blue-800"
            >
              send
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">ABOUT VITTONIC</h3>
            <p className="text-sm text-gray-400">
              Vittonic is a company dedicated to stock trading and offering the necessary services to both buyers and sellers to carry out successful transactions.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">FEATURED SERVICES</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="#stocks">Stock Purchase.</a></li>
              <li><a href="#services">Stock Sales.</a></li>
              <li>Creditor Insolvency.</li>
              <li>Imports and Exports.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">LEGAL LINKS</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="#">Legal Notice.</a></li>
              <li><a href="#">Privacy Policy.</a></li>
              <li><a href="#">Cookie Policy.</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">CONTACT</h3>
            <p className="text-sm text-gray-400 mb-2">
              <strong>Address:</strong> Paseo del Progreso s/n, Nave 10 Rosa, Recinto Industrial Catex-Molí, 08640 Olesa de Montserrat, Barcelona, Spain.
            </p>
            <p className="text-sm text-gray-400">
              <strong>Email:</strong> <a href="mailto:vittonic@proton.me">vittonic@proton.me</a>
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p><strong>VITTONIC</strong> is a registered trademark of <strong>CHITA INVESTMENT GROUP</strong>, along with <strong>CHITA TRADING S.L.</strong> and <strong>ECO-CHITA</strong>.</p>
        </div>
      </footer>
    </main>
  );
}
