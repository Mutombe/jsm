import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Home, 
  ArrowLeft, 
  Search, 
  Phone, 
  Mail,
  FileText,
  Users,
  Briefcase,
  MessageSquare
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

// Quick Links
const quickLinks = [
  { name: 'Home', href: '/', icon: Home, description: 'Return to homepage' },
  { name: 'Services', href: '/services', icon: Briefcase, description: 'Explore our services' },
  { name: 'About Us', href: '/about', icon: Users, description: 'Learn about JSM' },
  { name: 'Contact', href: '/contact', icon: MessageSquare, description: 'Get in touch' }
]

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Page Not Found | JSM Consulting"
        description="The page you're looking for doesn't exist. Navigate back to JSM Consulting's homepage or explore our services."
      />

      <section className="min-h-screen bg-gradient-to-br from-maroon-50 via-white to-gold-50 relative overflow-hidden flex items-center">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large decorative 404 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] font-display font-bold text-maroon-100/30 select-none">
            404
          </div>
          
          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-[10%] w-20 h-20 rounded-full bg-gold-200/50"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.div
            className="absolute bottom-40 right-[15%] w-32 h-32 rounded-full bg-maroon-200/30"
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.div
            className="absolute top-40 right-[20%] w-16 h-16 rounded-full bg-gold-300/40"
            animate={{ 
              y: [0, 15, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.div
            className="absolute bottom-20 left-[20%] w-24 h-24 rounded-full bg-maroon-100/50"
            animate={{ 
              y: [0, -15, 0],
              x: [0, -10, 0]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />

          {/* Decorative Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice">
            <motion.path
              d="M0 450 Q 360 350 720 450 T 1440 450"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.path
              d="M0 500 Q 360 600 720 500 T 1440 500"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 2, delay: 0.8 }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d4a537" stopOpacity="0" />
                <stop offset="50%" stopColor="#d4a537" />
                <stop offset="100%" stopColor="#d4a537" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6b1d35" stopOpacity="0" />
                <stop offset="50%" stopColor="#6b1d35" />
                <stop offset="100%" stopColor="#6b1d35" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* 404 Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-maroon-100 text-maroon-700 px-4 py-2 mb-8"
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm font-semibold">Error 404</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-5xl md:text-7xl text-maroon-900 mb-6"
            >
              Page Not Found
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-maroon-600 mb-12 max-w-2xl mx-auto"
            >
              We couldn't locate the page you're looking for. It may have been moved, 
              deleted, or perhaps the URL was mistyped.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-maroon-700 text-white  font-semibold hover:bg-maroon-800 transition-all hover:-translate-y-1 shadow-lg shadow-maroon-700/20"
              >
                <Home className="w-5 h-5" />
                Back to Homepage
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-maroon-700  font-semibold hover:bg-maroon-50 transition-all border-2 border-maroon-200 hover:border-maroon-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </motion.div>

            {/* Quick Links Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-lg font-semibold text-maroon-700 mb-6">
                Or explore these pages:
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className="group block p-6 bg-white  border border-maroon-100 hover:border-gold-300 hover:shadow-lg transition-all text-center"
                    >
                      <div className="w-12 h-12  bg-maroon-50 group-hover:bg-gold-100 flex items-center justify-center mx-auto mb-4 transition-colors">
                        <link.icon className="w-6 h-6 text-maroon-600 group-hover:text-gold-600 transition-colors" />
                      </div>
                      <h3 className="font-semibold text-maroon-900 mb-1 group-hover:text-gold-600 transition-colors">
                        {link.name}
                      </h3>
                      <p className="text-sm text-maroon-500">
                        {link.description}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Help */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-16 pt-12 border-t border-maroon-100"
            >
              <p className="text-maroon-600 mb-6">
                Still can't find what you're looking for? We're here to help.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="tel:+263712407700"
                  className="inline-flex items-center gap-2 text-maroon-700 hover:text-gold-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+263 712 407 700</span>
                </a>
                <span className="hidden sm:block text-maroon-300">|</span>
                <a
                  href="mailto:office@jsmconsulting.co.zw"
                  className="inline-flex items-center gap-2 text-maroon-700 hover:text-gold-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>office@jsmconsulting.co.zw</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L48 65C96 70 192 80 288 85C384 90 480 90 576 82.5C672 75 768 60 864 55C960 50 1056 55 1152 62.5C1248 70 1344 80 1392 85L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z" fill="#6b1d35" fillOpacity="0.05"/>
          </svg>
        </div>
      </section>
    </>
  )
}
