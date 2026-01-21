import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie, ToggleLeft, ToggleRight, Info } from 'lucide-react'
import { toast } from 'sonner'

const CookiesModal = ({ isOpen, onClose }) => {
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false
  })

  // Load saved preferences
  useEffect(() => {
    const saved = localStorage.getItem('jsmCookieConsent')
    if (saved) {
      const parsed = JSON.parse(saved)
      setPreferences({
        essential: true,
        analytics: parsed.analytics ?? true,
        marketing: parsed.marketing ?? false
      })
    }
  }, [isOpen])

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

  const togglePreference = (key) => {
    if (key === 'essential') return // Can't toggle essential
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const savePreferences = () => {
    localStorage.setItem('jsmCookieConsent', JSON.stringify({
      ...preferences,
      timestamp: new Date().toISOString()
    }))
    toast.success('Cookie preferences saved successfully')
    onClose()
  }

  const acceptAll = () => {
    const allAccepted = { essential: true, analytics: true, marketing: true }
    setPreferences(allAccepted)
    localStorage.setItem('jsmCookieConsent', JSON.stringify({
      ...allAccepted,
      timestamp: new Date().toISOString()
    }))
    toast.success('All cookies accepted')
    onClose()
  }

  const cookieTypes = [
    {
      key: 'essential',
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you, such as setting your privacy preferences or filling in forms.',
      required: true
    },
    {
      key: 'analytics',
      name: 'Analytics Cookies',
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.',
      required: false
    },
    {
      key: 'marketing',
      name: 'Marketing Cookies',
      description: 'These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.',
      required: false
    }
  ]

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
            className="relative w-full max-w-2xl max-h-[90vh] bg-white shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-maroon-900 to-maroon-800 px-6 py-5 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-gold-400" />
                </div>
                <h2 className="font-heading font-bold text-white text-xl">Cookie Preferences</h2>
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
            <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-160px)]">
              <div className="mb-6">
                <p className="text-maroon-700 leading-relaxed">
                  We use cookies to enhance your experience on our website. You can choose which types 
                  of cookies you'd like to allow. Essential cookies are required for basic functionality 
                  and cannot be disabled.
                </p>
              </div>

              {/* Cookie Info Banner */}
              <div className="bg-gold-50 border border-gold-200 p-4 mb-6 flex items-start gap-3">
                <Info className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gold-800">
                  Your preferences will be saved and applied across all pages on our website. You can 
                  change these settings at any time.
                </p>
              </div>

              {/* Cookie Options */}
              <div className="space-y-4">
                {cookieTypes.map((cookie) => (
                  <div
                    key={cookie.key}
                    className={`p-5 border transition-colors ${
                      preferences[cookie.key]
                        ? 'bg-maroon-50 border-maroon-200'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h3 className="font-heading font-semibold text-maroon-900">
                          {cookie.name}
                        </h3>
                        {cookie.required && (
                          <span className="px-2 py-0.5 bg-maroon-900 text-white text-xs font-medium">
                            Required
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => togglePreference(cookie.key)}
                        disabled={cookie.required}
                        className={`transition-colors ${
                          cookie.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                        }`}
                        aria-label={`Toggle ${cookie.name}`}
                      >
                        {preferences[cookie.key] ? (
                          <ToggleRight className="w-10 h-10 text-gold-500" />
                        ) : (
                          <ToggleLeft className="w-10 h-10 text-gray-400" />
                        )}
                      </button>
                    </div>
                    <p className="text-sm text-maroon-600 leading-relaxed">
                      {cookie.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-maroon-50 px-6 py-4 border-t border-maroon-100">
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-between">
                <button
                  onClick={onClose}
                  className="px-6 py-3 text-maroon-700 font-medium hover:bg-maroon-100 transition-colors order-2 sm:order-1"
                >
                  Cancel
                </button>
                <div className="flex gap-3 order-1 sm:order-2">
                  <button
                    onClick={savePreferences}
                    className="flex-1 sm:flex-none px-6 py-3 border border-maroon-300 text-maroon-900 font-medium hover:bg-white transition-colors"
                  >
                    Save Preferences
                  </button>
                  <button
                    onClick={acceptAll}
                    className="flex-1 sm:flex-none px-6 py-3 bg-maroon-900 text-white font-medium hover:bg-maroon-800 transition-colors"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default CookiesModal
