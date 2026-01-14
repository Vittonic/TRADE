'use client';

export default function ClientBody() {
  return (
    <main className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 flex justify-between items-center">
        <a href="mailto:vittonic@proton.me">vittonic@proton.me</a>
        <span>☰ English</span>
      </div>

      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Who are we?</h2>
          <div className="h-1 w-16 bg-blue-900 mb-8"></div>
        </div>

        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-gray-700 mb-4">
            VITTONIC is a company dedicated to <strong>stock trading</strong>. Since 2005, we have been offering both stock sellers and buyers a <strong>comprehensive service</strong>.
          </p>

          <p className="text-gray-700 mb-4">
            We currently have a <strong>global network of suppliers and clients</strong> that allows us to provide responses and solutions to both parties based on their needs at any given time.
          </p>

          <p className="text-gray-700 mb-4">
            We manage purchases quickly, efficiently and with fast payment to sellers. We also manage sales globally with an exclusive network of clients that responds to all types of offers.
          </p>

          <p className="text-gray-700 mb-4">
            We stand out for offering all necessary solutions regarding <strong>customs documentation management</strong>, <strong>creditor insolvency proceedings</strong> and <strong>international transport</strong>.
          </p>

          <p className="text-gray-700">
            Currently, we have our <strong>headquarters in Olesa de Montserrat</strong>, Barcelona (Spain) and a <strong>warehouse located in Mönchengladbach</strong>, Germany.
          </p>
        </div>
      </header>

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

          <a href="#stocks" className="inline-block bg-blue-900 text-white px-6 py-3 rounded font-bold hover:bg-blue-800 transition">
            see full list
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Contact us</h2>
          <div className="h-1 w-16 bg-blue-900 mb-8"></div>
          
          <p className="text-gray-700 mb-8">
            Contact us and start being part of our large and select group of collaborators and suppliers. Do you sell or buy stocks? Whatever the answer, at VITTONIC we have the experience you need.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block mb-2 text-gray-700">*Name and Surname</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded" placeholder="*Name and Surname" />
            </div>
            
            <div>
              <label className="block mb-2 text-gray-700">Company</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded" placeholder="Company" />
            </div>
            
            <div>
              <label className="block mb-2 text-gray-700">*Email</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded" placeholder="*Email" />
            </div>
            
            <div>
              <label className="block mb-2 text-gray-700">*Phone (Example: +34931318343)</label>
              <input type="tel" className="w-full p-3 border border-gray-300 rounded" placeholder="*Phone" />
            </div>

            <div>
              <label className="block mb-2 text-gray-700">*Reason for contact</label>
              <select className="w-full p-3 border border-gray-300 rounded">
                <option>*Reason for contact</option>
                <option>I want to sell stocks</option>
                <option>I want to buy stocks</option>
                <option>Other inquiries</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-gray-700">*Message</label>
              <textarea className="w-full p-3 border border-gray-300 rounded h-32" placeholder="*Message"></textarea>
            </div>

            <button type="submit" className="bg-blue-900 text-white px-8 py-3 rounded font-bold hover:bg-blue-800 transition">
              send
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4">ABOUT VITTONIC</h4>
            <p className="text-sm">
              VITTONIC is a company dedicated to stock trading and offering the necessary services to both buyers and sellers to successfully complete transactions.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">FEATURED SERVICES</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#stock-purchase" className="hover:underline">Stock purchase</a></li>
              <li><a href="#stock-sale" className="hover:underline">Stock sale</a></li>
              <li>Creditor insolvency proceedings</li>
              <li>Imports and exports</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">LEGAL LINKS</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#legal-notice" className="hover:underline">Legal Notice</a></li>
              <li><a href="#privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#cookie-policy" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">CONTACT</h4>
            <p className="text-sm">
              <strong>Email:</strong> vittonic@proton.me<br />
              <strong>Phone:</strong> +34 931 31 83 43
            </p>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-white/20">
          <p className="text-sm">
            <strong>VITTONIC</strong> is a registered trademark of <strong>CHITA INVESTMENT GROUP</strong>, along with <strong>CHITA TRADING S.L.</strong> and <strong>ECO-CHITA</strong>.
          </p>
        </div>
      </footer>
    </main>
  );
}
