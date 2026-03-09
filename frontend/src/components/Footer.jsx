const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">ShopHub</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your one-stop destination for all your shopping needs. Quality
              products at competitive prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                  <span className="ml-2">Home</span>
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                  <span className="ml-2">Products</span>
                </a>
              </li>
              <li>
                <a
                  href="/cart"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                  <span className="ml-2">Cart</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                support@shophub.com
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (555) 123-4567
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                123 Commerce St, City, State
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} ShopHub. All rights reserved. Made with
            <span className="text-red-500 mx-1">♥</span> for testing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
