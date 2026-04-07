
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              Ecommerce
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for premium quality products. Fast delivery, secure payments, and exceptional customer service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.06c0 2.394 1.766 4.396 4.112 4.856-1.047.287-2.151.446-3.298.446-.646 0-1.274-.065-1.884-.182 1.269 4.001 4.95 6.902 9.287 7.161-3.407 2.674-7.694 4.267-12.348 4.062 3.674 2.967 8.448 4.707 13.397 4.707 16.058 0 24.853-13.31 24.853-24.853 0-.382-.008-.764-.023-1.143.954-.689 1.782-1.548 2.44-2.526z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04 .67.11 .98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
             
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/products" className="text-gray-400 hover:text-white transition">Products</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="/cart" className="text-gray-400 hover:text-white transition">Cart</a></li>
              <li><a href="/login" className="text-gray-400 hover:text-white transition">Account</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Categories</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Smartphones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Laptops</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Headphones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Accessories</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 text-gray-400">
              <p>📧 contact@ecommerce.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <div className="flex gap-2">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Free shipping on orders over $50</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ecommerce. All rights reserved. | Built with ❤️ for your shopping needs.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
