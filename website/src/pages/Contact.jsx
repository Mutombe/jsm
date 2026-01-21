import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  ArrowRight,
  Building2,
  Globe,
  MessageSquare,
  CheckCircle2,
  ChevronRight,
  ExternalLink
} from 'lucide-react'
import { toast } from 'sonner'
import SEOHead from '../components/SEOHead'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

// Hero Section - Minimal with floating elements
const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gold-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-maroon-100 rounded-full blur-3xl opacity-40" />
      
      {/* Grid lines decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(to right, #6b1d35 1px, transparent 1px), linear-gradient(to bottom, #6b1d35 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 text-gold-600 font-semibold text-sm tracking-wider uppercase mb-6"
          >
            <MessageSquare className="w-4 h-4" />
            Get in Touch
          </motion.span>

          <motion.h1 
            variants={fadeInUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-maroon-950 leading-[1.05] mb-6"
          >
            Let's Start a{' '}
            <span className="relative inline-block">
              Conversation
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C80 4 220 4 298 10" stroke="#d4a537" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-xl text-maroon-700 leading-relaxed max-w-2xl mx-auto"
          >
            Whether you need expert financial advice, audit services, or business consulting, 
            our team is ready to help you achieve your goals.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

// Main Contact Section - Asymmetric Layout
const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    title: 'Mr',
    surname: '',
    email: '',
    phone: '',
    country: 'Zimbabwe',
    service: '',
    enquiry: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      toast.success('Thank you for your enquiry! We will respond within 24 hours.')
      setFormData({
        title: 'Mr',
        surname: '',
        email: '',
        phone: '',
        country: 'Zimbabwe',
        service: '',
        enquiry: ''
      })
      setIsSubmitting(false)
    }, 1500)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const services = [
    'Capital Raising',
    'Business Advisory',
    'Business Valuations',
    'Agri-accounting',
    'Audit & Assurance',
    'Tax Advisory',
    'Bookkeeping',
    'Recruitment',
    'Other'
  ]

  return (
    <section ref={ref} className="py-24 bg-maroon-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Contact Info (2 columns) */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="lg:col-span-2 space-y-8"
          >
            <motion.div variants={fadeInLeft}>
              <span className="inline-flex items-center gap-2 text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4">
                <span className="w-8 h-px bg-gold-500" />
                Contact Details
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-maroon-950 mb-4">
                We'd Love to Hear From You
              </h2>
              <p className="text-maroon-700 leading-relaxed">
                Reach out to us through any of the following channels, 
                or fill out the enquiry form and we'll get back to you promptly.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <motion.div variants={staggerContainer} className="space-y-4">
              {/* Office Address */}
              <motion.div
                variants={scaleIn}
                className="bg-white  p-6 shadow-sm hover:shadow-lg transition-shadow border border-maroon-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-maroon-100  flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-maroon-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-maroon-950 mb-2">Head Office</h3>
                    <p className="text-maroon-700 leading-relaxed">
                      Mudiwa House<br />
                      48 Midlothian Avenue<br />
                      Eastlea, Harare<br />
                      Zimbabwe
                    </p>
                    <a 
                      href="https://maps.google.com/?q=Mudiwa+House+48+Midlothian+Avenue+Eastlea+Harare"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gold-600 font-medium text-sm mt-3 hover:text-gold-700 transition-colors"
                    >
                      View on Map
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={scaleIn}
                className="bg-white  p-6 shadow-sm hover:shadow-lg transition-shadow border border-maroon-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-100  flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-maroon-950 mb-2">Telephone</h3>
                    <a href="tel:+263712407700" className="block text-maroon-700 hover:text-gold-600 transition-colors">
                      +263 712 407 700
                    </a>
                    <a href="tel:+263772314380" className="block text-maroon-700 hover:text-gold-600 transition-colors">
                      +263 772 314 380
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                variants={scaleIn}
                className="bg-white  p-6 shadow-sm hover:shadow-lg transition-shadow border border-maroon-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-maroon-100  flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-maroon-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-maroon-950 mb-2">Email</h3>
                    <a href="mailto:office@jsmconsulting.co.zw" className="text-maroon-700 hover:text-gold-600 transition-colors">
                      office@jsmconsulting.co.zw
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                variants={scaleIn}
                className="bg-white  p-6 shadow-sm hover:shadow-lg transition-shadow border border-maroon-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-100  flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-maroon-950 mb-2">Business Hours</h3>
                    <p className="text-maroon-700">
                      Monday – Friday: 8:00 AM – 5:00 PM<br />
                      Saturday – Sunday: Closed
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Website */}
            <motion.div variants={fadeInLeft} className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-gold-600" />
              <a 
                href="https://www.jsmconsulting.co.zw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-maroon-700 hover:text-gold-600 transition-colors"
              >
                www.jsmconsulting.co.zw
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form (3 columns) */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInRight}
            className="lg:col-span-3"
          >
            <div className="bg-white  p-8 md:p-10 shadow-xl border border-maroon-100">
              <h3 className="font-display text-2xl text-maroon-950 mb-2">Online Enquiry</h3>
              <p className="text-maroon-600 mb-8">Fill out the form below and we'll respond within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Title */}
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-maroon-700 mb-2">
                      Title
                    </label>
                    <select
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full px-4 py-3  border border-maroon-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all bg-white"
                    >
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Miss">Miss</option>
                      <option value="Ms">Ms</option>
                      <option value="Dr">Dr</option>
                      <option value="Prof">Prof</option>
                    </select>
                  </div>

                  {/* Surname */}
                  <div>
                    <label htmlFor="surname" className="block text-sm font-medium text-maroon-700 mb-2">
                      Surname *
                    </label>
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3  border border-maroon-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                      placeholder="Your surname"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-maroon-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3  border border-maroon-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-maroon-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3  border border-maroon-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                      placeholder="+263 7XX XXX XXX"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-maroon-700 mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3  border border-maroon-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                      placeholder="Zimbabwe"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-maroon-700 mb-2">
                    Required Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3  border border-maroon-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Enquiry */}
                <div>
                  <label htmlFor="enquiry" className="block text-sm font-medium text-maroon-700 mb-2">
                    Your Enquiry *
                  </label>
                  <textarea
                    id="enquiry"
                    name="enquiry"
                    value={formData.enquiry}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3  border border-maroon-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all resize-none"
                    placeholder="Please describe your requirements..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-maroon-900 text-white py-4  font-semibold hover:bg-maroon-800 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Map Section
const MapSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Map Container */}
        <div className="h-[400px] md:h-[500px] bg-maroon-100 relative overflow-hidden">
          {/* Placeholder for map - In production, use Google Maps or similar */}
          <div className="absolute inset-0 bg-gradient-to-br from-maroon-200 to-maroon-100 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-maroon-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="w-10 h-10 text-gold-400" />
              </div>
              <h3 className="font-display text-2xl text-maroon-950 mb-2">Mudiwa House</h3>
              <p className="text-maroon-700">48 Midlothian Avenue, Eastlea, Harare</p>
              <a 
                href="https://maps.google.com/?q=Mudiwa+House+48+Midlothian+Avenue+Eastlea+Harare"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 bg-maroon-900 text-white px-6 py-3  font-medium hover:bg-maroon-800 transition-colors"
              >
                Open in Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Decorative grid overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: 'linear-gradient(to right, #6b1d35 1px, transparent 1px), linear-gradient(to bottom, #6b1d35 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>

        {/* Floating Info Card */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: -60 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-maroon-950  p-8 md:p-10 max-w-2xl relative z-10 shadow-2xl"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-gold-400 font-semibold mb-2">Getting Here</h3>
                <p className="text-maroon-200 text-sm leading-relaxed">
                  Our office is conveniently located in Eastlea, Harare. 
                  Easily accessible from the city centre via Samora Machel Avenue.
                </p>
              </div>
              <div>
                <h3 className="text-gold-400 font-semibold mb-2">Parking</h3>
                <p className="text-maroon-200 text-sm leading-relaxed">
                  Ample parking is available at Mudiwa House for all visitors. 
                  Please park in the designated visitor bays.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

// Quick Links Section
const QuickLinksSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const links = [
    {
      title: 'Our Services',
      description: 'Explore our comprehensive range of accounting and advisory services.',
      link: '/services',
      icon: CheckCircle2
    },
    {
      title: 'Meet Our Team',
      description: 'Get to know the experienced professionals behind JSM Consulting.',
      link: '/team',
      icon: CheckCircle2
    },
    {
      title: 'Career Opportunities',
      description: 'Join our growing team of chartered accountants and consultants.',
      link: '/careers',
      icon: CheckCircle2
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-maroon-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          {links.map((item, index) => (
            <motion.div key={index} variants={scaleIn}>
              <Link
                to={item.link}
                className="group block bg-white  p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gold-200 h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-maroon-100  flex items-center justify-center group-hover:bg-gold-100 transition-colors">
                    <item.icon className="w-6 h-6 text-maroon-700 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-maroon-400 group-hover:text-gold-600 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-display text-xl text-maroon-950 mb-2 group-hover:text-gold-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-maroon-600 leading-relaxed">
                  {item.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Main Contact Page Component
const Contact = () => {
  return (
    <>
      <SEOHead
        title="Contact Us | JSM Consulting - Chartered Accountants Zimbabwe"
        description="Get in touch with JSM Consulting for expert accounting, audit, and business advisory services. Located in Eastlea, Harare. Call +263 712 407 700."
        keywords="contact JSM Consulting, chartered accountants Harare, accounting services Zimbabwe, business advisory contact"
        canonical="/contact"
      />
      
      <main>
        <HeroSection />
        <ContactSection />
        <MapSection />
        <QuickLinksSection />
      </main>
    </>
  )
}

export default Contact
