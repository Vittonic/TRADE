'use client';

export default function ClientBody() {
  return (
    <main className="min-h-screen">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">VITTONIC</h1>
          <a href="mailto:vittonic@proton.me" className="text-sm">vittonic@proton.me</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold mb-4">VITTONIC</h2>
          <p className="text-2xl mb-2">Stock trading with a</p>
          <p className="text-4xl font-bold mb-8">TRULY comprehensive service</p>
          
          <div className="mt-8 space-y-4 max-w-md">
            <button className="bg-white text-blue-900 font-bold px-8 py-4 rounded w-full">
              OWN GLOBAL NETWORK
            </button>
            <button className="bg-white text-blue-900 font-bold px-8 py-4 rounded w-full">
              MAXIMUM DISCRETION
            </button>
            <button className="bg-white text-blue-900 font-bold px-8 py-4 rounded w-full">
              WE PAY & LOAD
            </button>
          </div>
        </div>
      </section>

      {/* Who are we Section */}
      <section className="bg-white py-24">
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
      <section className="bg-gray-100 py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">STOCK PURCHASE</h2>
          
          <p className="text-gray-700 mb-8">
            Our work system is simple and agile: we visit the location, perform the <strong>product valuation</strong>, manage offers, <strong>pay</strong>, load and <strong>close operations quickly and efficiently</strong>.
          </p>
          
          <h3 className="text-2xl font-bold text-blue-900 mb-4">What do we buy?</h3>
          <p className="text-gray-700 mb-4">
            <strong>We buy all types of stocks</strong>, from business surpluses or logistics abandonments to products from creditor insolvency or insurance claims.
          </p>
          
          <a href="/#stocks" className="text-blue-600 underline">see full list</a>
        </div>
      </section>

      {/* Stock Sales Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">STOCK SALES</h2>
          
          <p className="text-gray-700 mb-4">
            If you are interested in becoming part of our <strong>buyer network</strong>, contact us and we will explain how we work.
          </p>
          
          <p className="text-gray-700 mb-8">
            We will always notify you when we receive an interesting stock for you.
          </p>
          
          <a href="/#contact" className="text-blue-600 underline">contact us now</a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-24">
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
              Vittonic is a company dedicated to stock trading.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">FEATURED SERVICES</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="/#stocks">Stock Purchase.</a></li>
              <li><a href="/#services">Stock Sales.</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">LEGAL LINKS</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="/#">Privacy Policy.</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">CONTACT</h3>
            <p className="text-sm text-gray-400">
              <strong>Email:</strong> <a href="mailto:vittonic@proton.me">vittonic@proton.me</a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
