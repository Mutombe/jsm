import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { 
  ArrowRight,
  ArrowUpRight,
  FileSearch,
  Calculator,
  Briefcase,
  TrendingUp,
  Landmark,
  Sprout,
  BookOpen,
  Users,
  FileText,
  Scale,
  Shield,
  Building2,
  GraduationCap,
  ClipboardCheck
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
}

// Services Data
const mainServices = [
  {
    slug: 'audit-assurance',
    icon: <FileSearch className="w-8 h-8" />,
    title: 'Audit & Assurance',
    description: 'Comprehensive audit services including statutory, compliance, and investigative audits. We ensure accuracy, transparency, and adherence to regulatory standards.',
    features: ['Statutory Audits', 'Compliance Audits', 'Investigative Audits', 'Internal Audits'],
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026&auto=format&fit=crop'
  },
  {
    slug: 'tax-advisory',
    icon: <Landmark className="w-8 h-8" />,
    title: 'Tax Advisory',
    description: 'Strategic tax planning and compliance services to optimise your fiscal position while ensuring full regulatory compliance.',
    features: ['Tax Planning', 'Compliance', 'Tax Disputes', 'Transfer Pricing'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop'
  },
  {
    slug: 'business-advisory',
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Business Advisory',
    description: 'Management consulting, operational planning, and strategic advisory services to drive business performance and growth.',
    features: ['Strategy Development', 'Operational Planning', 'Performance Reviews', 'Restructuring'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
  },
  {
    slug: 'corporate-finance',
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Corporate Finance',
    description: 'Capital raising, business valuations, due diligence, and transaction advisory services for strategic financial decisions.',
    features: ['Capital Raising', 'Business Valuations', 'Due Diligence', 'M&A Advisory'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  },
  {
    slug: 'bookkeeping',
    icon: <Calculator className="w-8 h-8" />,
    title: 'Bookkeeping & Accounting',
    description: 'Comprehensive bookkeeping and accounting services for businesses of all sizes, from monthly accounts to annual reports.',
    features: ['Monthly Accounts', 'Quarterly Reports', 'Annual Statements', 'Financial Analysis'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    slug: 'agri-accounting',
    icon: <Sprout className="w-8 h-8" />,
    title: 'Agri-Accounting',
    description: 'Specialised accounting services tailored for agricultural enterprises, including crop and livestock accounting.',
    features: ['Farm Accounting', 'Crop Costing', 'Livestock Records', 'Agricultural Proposals'],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop'
  }
]

const additionalServices = [
  { icon: <BookOpen className="w-5 h-5" />, name: 'Business Plans & Proposals' },
  { icon: <Scale className="w-5 h-5" />, name: 'Business Valuations' },
  { icon: <GraduationCap className="w-5 h-5" />, name: 'Capacity Building' },
  { icon: <FileText className="w-5 h-5" />, name: 'Company Secretarial' },
  { icon: <ClipboardCheck className="w-5 h-5" />, name: 'Due Diligence' },
  { icon: <Shield className="w-5 h-5" />, name: 'Risk Assessment' },
  { icon: <Users className="w-5 h-5" />, name: 'HR & Skills Audits' },
  { icon: <Building2 className="w-5 h-5" />, name: 'Estate Planning' },
  { icon: <TrendingUp className="w-5 h-5" />, name: 'Recruitment Services' },
  { icon: <BookOpen className="w-5 h-5" />, name: 'Training Programmes' },
  { icon: <Calculator className="w-5 h-5" />, name: 'Payroll Bureau' },
  { icon: <FileSearch className="w-5 h-5" />, name: 'Systems Installation' }
]

// Hero Section with Blended Background Image
const HeroSection = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-maroon-50/80 to-transparent z-[1]" />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gold-500/10 rounded-full blur-3xl z-[1]" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ opacity }}
            className="lg:col-span-3"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 text-gold-700 text-sm font-medium"
            >
              <Briefcase className="w-4 h-4" />
              What We Offer
            </motion.span>

            <motion.h1 
              variants={fadeInUp}
              className="font-display text-5xl md:text-6xl text-maroon-900 leading-[1.1] mt-6 mb-6"
            >
              Professional Services for Every{' '}
              <span className="relative">
                <span className="text-gold-600">Business Need</span>
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gold-500/50"
                />
              </span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="h-1 w-24 bg-gold-500 mb-6" />

            <motion.p 
              variants={fadeInUp}
              className="text-xl text-maroon-600 leading-relaxed max-w-2xl"
            >
              From statutory audits to strategic business advisory, we deliver comprehensive 
              financial and consulting services tailored to your organisation's unique requirements.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-maroon-900 text-white font-semibold hover:bg-maroon-800 transition-all"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-maroon-200 text-maroon-700 font-semibold hover:bg-maroon-50 transition-all"
              >
                Explore Services
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="relative">
              {/* Main Circle */}
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-maroon-900 to-maroon-950 mx-auto flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <p className="font-display text-6xl font-bold text-gold-400">20+</p>
                  <p className="text-maroon-300 text-sm mt-2 tracking-wider">SERVICES OFFERED</p>
                </div>
              </div>
              
              {/* Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-gold-400/30"
              />
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -left-8 top-1/4 bg-white p-4 shadow-xl border border-maroon-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Trust</p>
                    <p className="font-semibold text-maroon-900">100%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 bottom-1/4 bg-white p-4 shadow-xl border border-maroon-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Clients</p>
                    <p className="font-semibold text-maroon-900">500+</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-maroon-300 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Main Services Grid with Image Reveals
const MainServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={ref} className="py-24 bg-maroon-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-gold-500/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-maroon-800/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.span 
            variants={fadeInUp}
            className="text-gold-400 font-medium tracking-wider uppercase text-sm"
          >
            Core Services
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl text-white mt-4 mb-4"
          >
            Our Primary Expertise
          </motion.h2>
          <motion.div variants={fadeInUp} className="h-1 w-20 bg-gold-500" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
            >
              <Link
                to={`/services/${service.slug}`}
                className="group relative block h-full overflow-hidden"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={service.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/90 to-maroon-950/70 group-hover:from-maroon-900 group-hover:via-maroon-900/85 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="relative p-8 min-h-[400px] flex flex-col">
                  <div className="w-16 h-16 bg-gold-500/10 text-gold-400 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-maroon-900 transition-all duration-300 border border-gold-500/20 group-hover:border-transparent">
                    {service.icon}
                  </div>

                  <h3 className="font-heading font-semibold text-2xl text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-maroon-300 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-maroon-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-2 text-gold-400 font-medium group-hover:text-white transition-colors">
                    Learn More
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Additional Services Section
const AdditionalServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Header */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.span 
              variants={fadeInUp}
              className="text-gold-600 font-medium tracking-wider uppercase text-sm"
            >
              Extended Services
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="font-display text-4xl text-maroon-900 mt-4 mb-4"
            >
              More Ways We Can Help
            </motion.h2>
            <motion.div variants={fadeInUp} className="h-1 w-16 bg-gold-500 mb-6" />
            <motion.p 
              variants={fadeInUp}
              className="text-maroon-600 leading-relaxed"
            >
              Beyond our core services, we offer a comprehensive range of specialised solutions 
              to address every aspect of your business needs.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="lg:col-span-2"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex items-center gap-3 p-4 bg-maroon-50 hover:bg-maroon-100 hover:shadow-lg transition-all group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-white flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors shadow-sm">
                    {service.icon}
                  </div>
                  <span className="font-medium text-maroon-800 text-sm">{service.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Associate Services Section
const AssociateServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 bg-maroon-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-gold-500/5 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.span 
            variants={fadeInUp}
            className="text-gold-600 font-medium tracking-wider uppercase text-sm"
          >
            Partner Solutions
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="font-display text-4xl text-maroon-900 mt-4 mb-4"
          >
            Associate Services
          </motion.h2>
          <motion.div variants={fadeInUp} className="h-1 w-16 bg-gold-500 mx-auto mb-8" />

          <motion.div 
            variants={fadeInUp}
            className="bg-white p-8 md:p-12 shadow-xl border border-maroon-100"
          >
            <p className="text-maroon-700 leading-relaxed mb-8">
              In conjunction with our network of trusted associates, we also offer specialised 
              technology and operational services:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-start gap-4 p-6 bg-maroon-50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-maroon-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-maroon-900 mb-2">
                    Computerised Accounting Systems
                  </h3>
                  <p className="text-sm text-maroon-600">
                    Professional installation and configuration of accounting software, 
                    primarily Pastel, tailored to your business needs.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-start gap-4 p-6 bg-maroon-50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-maroon-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-maroon-900 mb-2">
                    Payroll Bureau Services
                  </h3>
                  <p className="text-sm text-maroon-600">
                    Comprehensive payroll processing for salaries and wages, ensuring 
                    compliance and accuracy every pay period.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// CTA Section with Background Image
const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/95 to-maroon-950/90" />
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #d4a537 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Orb */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl text-white mb-6"
          >
            Need a Tailored Solution?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-maroon-200 mb-10 max-w-2xl mx-auto"
          >
            Every business is unique. Contact us to discuss how we can customise 
            our services to meet your specific needs.
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-maroon-950 font-semibold hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+263712407700"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Call Us Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Main Services Page Component
const Services = () => {
  return (
    <>
      <SEOHead 
        title="Our Services | Audit, Tax, Business Advisory | JSM Consulting Zimbabwe"
        description="Explore JSM Consulting's comprehensive services: statutory audits, tax advisory, business consulting, corporate finance, bookkeeping, and specialised agri-accounting in Zimbabwe."
        keywords="audit services zimbabwe, tax advisory harare, business consulting, corporate finance, bookkeeping services, agri-accounting, chartered accountants services"
        canonical="https://jsmconsulting.co.zw/services"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Accounting and Business Advisory Services",
          "provider": {
            "@type": "AccountingService",
            "name": "JSM Consulting"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Zimbabwe"
          }
        }}
      />
      
      <main>
        <HeroSection />
        <MainServicesSection />
        <AdditionalServicesSection />
        <AssociateServicesSection />
        <CTASection />
      </main>
    </>
  )
}

export default Services