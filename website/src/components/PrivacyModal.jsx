import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Shield, Lock, Eye, FileText } from 'lucide-react'

const PrivacyModal = ({ isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 modal-backdrop"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-white shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-maroon-900 to-maroon-800 px-6 py-5 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-gold-400" />
                </div>
                <h2 className="font-heading font-bold text-white text-xl">Privacy Policy</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-maroon-200 hover:text-white hover:bg-maroon-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="prose prose-maroon max-w-none">
                <p className="text-maroon-600 text-sm mb-6">
                  Last updated: January 2025
                </p>

                <section className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-maroon-100 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-maroon-700" />
                    </div>
                    <h3 className="font-heading font-semibold text-maroon-900 text-lg m-0">Introduction</h3>
                  </div>
                  <p className="text-maroon-700 leading-relaxed">
                    JSM Consulting ("we", "our", or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                    information when you visit our website or use our services.
                  </p>
                </section>

                <section className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-maroon-100 flex items-center justify-center">
                      <Eye className="w-4 h-4 text-maroon-700" />
                    </div>
                    <h3 className="font-heading font-semibold text-maroon-900 text-lg m-0">Information We Collect</h3>
                  </div>
                  <p className="text-maroon-700 leading-relaxed mb-4">
                    We may collect information about you in a variety of ways:
                  </p>
                  <div className="bg-maroon-50 p-5 space-y-3">
                    <div>
                      <h4 className="font-semibold text-maroon-900 text-sm">Personal Data</h4>
                      <p className="text-maroon-600 text-sm">
                        Name, email address, telephone number, and other contact details you provide when 
                        requesting our services or contacting us.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-maroon-900 text-sm">Financial Information</h4>
                      <p className="text-maroon-600 text-sm">
                        When you engage our professional services, we may need access to financial records 
                        and documents relevant to the services requested.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-maroon-900 text-sm">Usage Data</h4>
                      <p className="text-maroon-600 text-sm">
                        Information about how you use our website, including IP address, browser type, 
                        pages visited, and time spent on pages.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-maroon-100 flex items-center justify-center">
                      <Lock className="w-4 h-4 text-maroon-700" />
                    </div>
                    <h3 className="font-heading font-semibold text-maroon-900 text-lg m-0">How We Use Your Information</h3>
                  </div>
                  <p className="text-maroon-700 leading-relaxed mb-4">
                    We use the information we collect for:
                  </p>
                  <ul className="space-y-2 text-maroon-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                      Providing, operating, and maintaining our professional services
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                      Improving, personalising, and expanding our services
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                      Communicating with you about services, updates, and support
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                      Complying with legal obligations and professional standards
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                      Protecting against fraud and maintaining security
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h3 className="font-heading font-semibold text-maroon-900 text-lg mb-4">Data Security</h3>
                  <p className="text-maroon-700 leading-relaxed">
                    We implement appropriate technical and organisational measures to protect your personal 
                    information against unauthorised access, alteration, disclosure, or destruction. As 
                    Chartered Accountants, we adhere to strict professional confidentiality standards.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="font-heading font-semibold text-maroon-900 text-lg mb-4">Your Rights</h3>
                  <p className="text-maroon-700 leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {['Access your data', 'Correct inaccurate data', 'Request deletion', 'Restrict processing', 'Data portability', 'Withdraw consent'].map((right) => (
                      <div key={right} className="flex items-center gap-2 bg-maroon-50 px-4 py-3">
                        <span className="w-2 h-2 bg-gold-500 rounded-full" />
                        <span className="text-maroon-700 text-sm">{right}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mb-8">
                  <h3 className="font-heading font-semibold text-maroon-900 text-lg mb-4">Contact Us</h3>
                  <p className="text-maroon-700 leading-relaxed">
                    If you have questions about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="bg-gold-50 border border-gold-200 p-5 mt-4">
                    <p className="text-maroon-900 font-medium">JSM Consulting</p>
                    <p className="text-maroon-600 text-sm">Mudiwa House, 48 Midlothian Avenue, Eastlea, Harare</p>
                    <p className="text-maroon-600 text-sm">Email: office@jsmconsulting.co.zw</p>
                    <p className="text-maroon-600 text-sm">Tel: +263 712 407 700</p>
                  </div>
                </section>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-maroon-50 px-6 py-4 border-t border-maroon-100">
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-maroon-900 text-white font-medium hover:bg-maroon-800 transition-colors"
                >
                  I Understand
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default PrivacyModal
