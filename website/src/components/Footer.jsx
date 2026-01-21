import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Linkedin, 
  Facebook, 
  Twitter,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react'

const Footer = ({ onPrivacyClick, onCookiesClick }) => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Meet the Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ]

  const services = [
    { name: 'Audit & Assurance', path: '/services/audit-assurance' },
    { name: 'Tax Advisory', path: '/services/tax-advisory' },
    { name: 'Business Advisory', path: '/services/business-advisory' },
    { name: 'Corporate Finance', path: '/services/corporate-finance' },
    { name: 'Bookkeeping', path: '/services/bookkeeping' },
    { name: 'Agri-Accounting', path: '/services/agri-accounting' },
  ]

  return (
    <footer className="bg-maroon-950 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-maroon-800/50 to-transparent rounded-full blur-3xl" />

      {/* CTA Section */}
      <div className="relative border-b border-maroon-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl md:text-5xl text-white leading-tight mb-4"
              >
                Ready to transform your{' '}
                <span className="text-gold-400">business</span>?
              </motion.h2>
              <p className="text-maroon-200 text-lg">
                Partner with Zimbabwe's trusted chartered accountants for strategic guidance and growth.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-maroon-950 font-semibold rounded hover:bg-gold-400 transition-all group"
              >
                Schedule a Consultation
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <a
                href="tel:+263712407700"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-maroon-700 text-white font-semibold rounded hover:bg-maroon-900 hover:border-maroon-600 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-maroon-700 to-maroon-900 flex items-center justify-center border border-gold-500/30">
                <img 
                  src="/logo.png" 
                  alt="JSM Consulting Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-lg">JSM Consulting</p>
                <p className="text-xs text-maroon-300 tracking-widest uppercase">Chartered Accountants</p>
              </div>
            </Link>
            <p className="text-maroon-300 mb-6 leading-relaxed">
              Established in 2001, JSM Consulting has been Zimbabwe's trusted partner in accounting, 
              audit, and business advisory services.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-maroon-900 flex items-center justify-center hover:bg-gold-500 hover:text-maroon-950 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-maroon-900 flex items-center justify-center hover:bg-gold-500 hover:text-maroon-950 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-maroon-900 flex items-center justify-center hover:bg-gold-500 hover:text-maroon-950 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-maroon-300 hover:text-gold-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-6 text-lg">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-maroon-300 hover:text-gold-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                <span className="text-maroon-300">
                  Mudiwa House<br />
                  48 Midlothian Avenue<br />
                  Eastlea, Harare, Zimbabwe
                </span>
              </li>
              <li>
                <a
                  href="tel:+263712407700"
                  className="flex gap-3 text-maroon-300 hover:text-gold-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  +263 712 407 700
                </a>
              </li>
              <li>
                <a
                  href="tel:+263772314380"
                  className="flex gap-3 text-maroon-300 hover:text-gold-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  +263 772 314 380
                </a>
              </li>
              <li>
                <a
                  href="mailto:office@jsmconsulting.co.zw"
                  className="flex gap-3 text-maroon-300 hover:text-gold-400 transition-colors"
                >
                  <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  office@jsmconsulting.co.zw
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span className="text-maroon-300">
                  Mon - Fri: 8:00 AM - 5:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-maroon-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-maroon-400 text-sm">
              © {currentYear} JSM Consulting. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <button
                onClick={onPrivacyClick}
                className="text-maroon-400 hover:text-gold-400 transition-colors"
              >
                Privacy Policy
              </button>
              <span className="text-maroon-700">|</span>
              <button
                onClick={onCookiesClick}
                className="text-maroon-400 hover:text-gold-400 transition-colors"
              >
                Cookie Policy
              </button>
              <span className="text-maroon-700">|</span>
              <Link
                to="/contact"
                className="text-maroon-400 hover:text-gold-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
