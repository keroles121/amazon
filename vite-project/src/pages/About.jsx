import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-4 md:px-8 lg:px-16">
      {/* Hero Section */}
      <section className="text-center mb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About Ecommerce
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover the story behind our passion for connecting customers with amazing products. Innovation, quality, and customer satisfaction drive everything we do.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Founded in 2020, Ecommerce started with a simple vision: make online shopping effortless and enjoyable. From humble beginnings in a garage to serving thousands of happy customers worldwide, we've grown while staying true to our roots.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Today, we partner with top brands and use cutting-edge technology to deliver curated products right to your door. Our commitment to sustainability and community makes us more than just a store – we're your shopping partner.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">50K+</div>
                <div className="text-gray-600 dark:text-gray-300">Happy Customers</div>
              </div>
              <div className="text-center p-6 bg-green-50 dark:bg-green-900/30 rounded-xl">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">99%</div>
                <div className="text-gray-600 dark:text-gray-300">Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-indigo-400 to-purple-500 rounded-3xl p-12 transform rotate-6 shadow-2xl">
              <div className="absolute inset-0 bg-white/20 rounded-3xl"></div>
              <div className="relative z-10 text-center">
                <div className="w-48 h-48 bg-white/30 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
                <p className="text-2xl font-bold text-white drop-shadow-lg">Growth Timeline</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-16">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="w-24 h-24 bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-4V7m8 10l-8 4m0 0l-8-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Fast Delivery</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-sm mx-auto leading-relaxed">Lightning-fast shipping across the country. Get your orders in 1-3 days.</p>
            </div>
            <div className="group">
              <div className="w-24 h-24 bg-green-100 dark:bg-green-900/50 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Quality Guaranteed</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-sm mx-auto leading-relaxed">Premium products from trusted brands. Satisfaction or your money back.</p>
            </div>
            <div className="group">
              <div className="w-24 h-24 bg-purple-100 dark:bg-purple-900/50 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364 0L12 17.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-sm mx-auto leading-relaxed">Dedicated customer service team ready to help you anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 rounded-3xl text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Join thousands of satisfied customers. Your perfect product is just one click away.
          </p>
          <Link to="/" className="inline-block bg-white text-indigo-600 px-12 py-4 rounded-full font-bold text-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
