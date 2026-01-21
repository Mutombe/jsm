import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, Settings } from 'lucide-react'

const CookieConsent = ({ onManageCookies }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('jsmCookieConsent')
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('jsmCookieConsent', JSON.stringify({
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }))
    setIsVisible(false)
  }

  const acceptEssential = () => {
    localStorage.setItem('jsmCookieConsent', JSON.stringify({
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }))
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl shadow-maroon-900/20 border border-maroon-100 p-6 md:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Icon and Text */}
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                      <Cookie className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-maroon-900 text-lg mb-2">
                        We value your privacy
                      </h3>
                      <p className="text-maroon-600 text-sm leading-relaxed">
                        We use cookies to enhance your browsing experience, serve personalised content, 
                        and analyse our traffic. By clicking "Accept All", you consent to our use of cookies.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                  <button
                    onClick={onManageCookies}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-maroon-700 hover:text-maroon-900 hover:bg-maroon-50 rounded-lg transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    Manage Preferences
                  </button>
                  <button
                    onClick={acceptEssential}
                    className="px-5 py-3 text-sm font-medium text-maroon-700 border border-maroon-200 rounded-lg hover:bg-maroon-50 transition-colors"
                  >
                    Essential Only
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-6 py-3 text-sm font-medium text-white bg-maroon-900 rounded-lg hover:bg-maroon-800 transition-colors shadow-lg shadow-maroon-900/20"
                  >
                    Accept All
                  </button>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setIsVisible(false)}
                  className="absolute top-4 right-4 lg:relative lg:top-auto lg:right-auto p-2 text-maroon-400 hover:text-maroon-600 hover:bg-maroon-50 rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent
