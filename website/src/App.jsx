import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'sonner'

// Layout Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CookieConsent from './components/CookieConsent'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Team from './pages/Team'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Insights from './pages/Insights'
import NotFound from './pages/NotFound'

// Modals
import PrivacyModal from './components/PrivacyModal'
import CookiesModal from './components/CookiesModal'

function App() {
  const location = useLocation()
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)
  const [isCookiesOpen, setIsCookiesOpen] = useState(false)

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>

      <Footer 
        onPrivacyClick={() => setIsPrivacyOpen(true)}
        onCookiesClick={() => setIsCookiesOpen(true)}
      />

      {/* Cookie Consent Banner */}
      <CookieConsent onManageCookies={() => setIsCookiesOpen(true)} />

      {/* Policy Modals */}
      <PrivacyModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />
      <CookiesModal 
        isOpen={isCookiesOpen} 
        onClose={() => setIsCookiesOpen(false)} 
      />

      {/* Toast Notifications */}
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#6b1d35',
            color: '#fff',
            border: '1px solid #d4a537',
          },
        }}
      />
    </div>
  )
}

export default App
