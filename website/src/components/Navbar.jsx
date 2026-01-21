import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Services', 
    path: '/services',
    submenu: [
      { name: 'Audit & Assurance', path: '/services/audit-assurance' },
      { name: 'Tax Advisory', path: '/services/tax-advisory' },
      { name: 'Business Advisory', path: '/services/business-advisory' },
      { name: 'Corporate Finance', path: '/services/corporate-finance' },
      { name: 'Bookkeeping', path: '/services/bookkeeping' },
      { name: 'Agri-Accounting', path: '/services/agri-accounting' },
    ]
  },
  { name: 'Our Team', path: '/team' },
  { name: 'Careers', path: '/careers' },
  { name: 'Insights', path: '/insights' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveSubmenu(null)
  }, [location.pathname])

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-maroon-900 text-white py-2 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <p className="font-light tracking-wide">Chartered Accountants Zimbabwe • Established 2001</p>
          <div className="flex items-center gap-6">
            <a href="tel:+263712407700" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
              <Phone className="w-4 h-4" />
              +263 712 407 700
            </a>
            <a href="mailto:office@jsmconsulting.co.zw" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
              <Mail className="w-4 h-4" />
              office@jsmconsulting.co.zw
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-maroon-900/5' 
            : 'bg-white'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-maroon-800 to-maroon-950 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <img 
                    src="/logo.png" 
                    alt="JSM Consulting Logo" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="absolute -inset-1 rounded-full border border-gold-400/30 group-hover:border-gold-400/50 transition-colors" />
              </div>
              <div className="">
                <p className="font-heading font-bold text-maroon-900 text-lg leading-tight">JSM Consulting</p>
                <p className="text-xs text-maroon-600 tracking-widest uppercase">Chartered Accountants</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div 
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    to={link.path}
                    className={`px-4 py-2 text-sm font-medium tracking-wide transition-all flex items-center gap-1 ${
                      isActive(link.path)
                        ? 'text-maroon-900'
                        : 'text-maroon-700 hover:text-maroon-900'
                    }`}
                  >
                    {link.name}
                    {link.submenu && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeSubmenu === link.name ? 'rotate-180' : ''}`} />
                    )}
                  </Link>
                  
                  {/* Active Indicator */}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold-500"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Submenu */}
                  <AnimatePresence>
                    {link.submenu && activeSubmenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl shadow-maroon-900/10 border border-maroon-100 overflow-hidden"
                      >
                        <div className="py-2">
                          {link.submenu.map((sublink, idx) => (
                            <Link
                              key={sublink.name}
                              to={sublink.path}
                              className="block px-4 py-3 text-sm text-maroon-700 hover:bg-maroon-50 hover:text-maroon-900 transition-colors border-l-2 border-transparent hover:border-gold-500"
                            >
                              {sublink.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-maroon-800 to-maroon-900 text-white text-sm font-medium tracking-wide rounded hover:from-maroon-700 hover:to-maroon-800 transition-all shadow-lg shadow-maroon-900/20 hover:shadow-xl hover:shadow-maroon-900/30 hover:-translate-y-0.5"
              >
                Get a Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-maroon-900 hover:bg-maroon-50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-maroon-100 bg-white overflow-hidden"
            >
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive(link.path)
                          ? 'bg-maroon-50 text-maroon-900 border-l-4 border-gold-500'
                          : 'text-maroon-700 hover:bg-maroon-50 hover:text-maroon-900'
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.submenu && isActive(link.path) && (
                      <div className="ml-4 mt-2 space-y-1">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            to={sublink.path}
                            className="block px-4 py-2 text-sm text-maroon-600 hover:text-maroon-900 transition-colors"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 mt-4 border-t border-maroon-100">
                  <Link
                    to="/contact"
                    className="block w-full px-6 py-4 bg-gradient-to-r from-maroon-800 to-maroon-900 text-white text-center font-medium rounded-lg shadow-lg"
                  >
                    Get a Consultation
                  </Link>
                </div>

                {/* Mobile Contact Info */}
                <div className="pt-4 space-y-3 text-sm text-maroon-600">
                  <a href="tel:+263712407700" className="flex items-center gap-2 hover:text-maroon-900">
                    <Phone className="w-4 h-4" />
                    +263 712 407 700
                  </a>
                  <a href="mailto:office@jsmconsulting.co.zw" className="flex items-center gap-2 hover:text-maroon-900">
                    <Mail className="w-4 h-4" />
                    office@jsmconsulting.co.zw
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}

export default Navbar
