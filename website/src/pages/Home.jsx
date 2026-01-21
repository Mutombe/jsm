import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  ArrowUpRight,
  BarChart3, 
  Shield, 
  Users, 
  TrendingUp,
  CheckCircle2,
  Quote,
  ChevronRight,
  Award,
  Building2,
  Briefcase,
  Calculator,
  FileSearch,
  Landmark,
  Scale,
  Sprout,
  BookOpen,
  Play
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { Phone } from 'lucide-react'
// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

// Hero Section


// Swiss Style Hero Section
const SwissHeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [currentImage, setCurrentImage] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Background images for carousel
  const bgImages = [
    '/16.jpg',
    '/17.jpg',
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop',
    '/12.jpg',
  ]

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bgImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const statsVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }
    }
  }

  const stats = [
    { number: '20+', label: 'Years of Excellence', sublabel: 'Since 2001' },
    { number: '500+', label: 'Clients Served', sublabel: 'Across Zimbabwe' },
    { number: '100%', label: 'Commitment', sublabel: 'To Integrity' },
  ]

  return (
    <section 
      ref={ref} 
      className="relative h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img 
              src={bgImages[currentImage]}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Overlay - diagonal gradient for better text visibility while showing image */}
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-950/85 to-maroon-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-transparent to-maroon-950/30" />
      </div>

      {/* Swiss Grid Lines - Subtle Background Structure */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[8.33%] top-0 bottom-0 w-px bg-white/[0.03]" />
        <div className="absolute left-[25%] top-0 bottom-0 w-px bg-white/[0.03]" />
        <div className="absolute left-[41.66%] top-0 bottom-0 w-px bg-white/[0.03]" />
        <div className="absolute left-[58.33%] top-0 bottom-0 w-px bg-white/[0.03]" />
        <div className="absolute left-[75%] top-0 bottom-0 w-px bg-white/[0.03]" />
        <div className="absolute top-[33%] left-0 right-0 h-px bg-white/[0.03]" />
        <div className="absolute top-[66%] left-0 right-0 h-px bg-white/[0.03]" />
      </div>

      {/* Geometric Accent - Gold Rectangle */}
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        style={{ originY: 0 }}
        className="absolute top-0 left-0 w-1.5 h-[50%] bg-gold-500"
      />

      {/* Main Content Grid */}
      <motion.div 
        style={{ opacity }}
        className="relative h-full max-w-[1400px] mx-auto px-6 lg:px-12"
      >
        <div className="grid grid-cols-12 gap-6 h-full items-center">
          
          {/* Left Content - Typography Block */}
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="col-span-12 lg:col-span-7 pt-8 lg:pt-0"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-3 text-gold-400 text-sm tracking-[0.2em] uppercase font-medium">
                <span className="w-12 h-px bg-gold-500" />
                Est. 2001 — Harare, Zimbabwe
              </span>
            </motion.div>

            {/* Main Headline - Swiss Style Typography */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="font-display leading-[0.9] tracking-[-0.03em]">
                <span className="block text-[clamp(2.5rem,8vw,6rem)] text-white font-bold">
                  Chartered
                </span>
                <span className="block text-[clamp(2.5rem,8vw,6rem)] text-white font-bold">
                  Accountants
                </span>
                <span className="block text-[clamp(1.2rem,3vw,2rem)] text-gold-400 font-medium mt-3 tracking-[0.08em]">
                  Strategic Advisory · Audit · Tax
                </span>
              </h1>
            </motion.div>

            {/* Description - Clean, minimal */}
            <motion.p 
              variants={itemVariants}
              className="text-white/80 text-lg leading-relaxed max-w-lg mb-10"
            >
              Two decades of excellence driving business growth 
              through precise financial strategy and unwavering integrity.
            </motion.p>

            {/* CTA Buttons - Swiss minimal style */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-maroon-950 text-sm font-semibold tracking-wider uppercase hover:bg-gold-400 transition-all duration-300"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white text-sm font-semibold tracking-wider uppercase hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Our Services
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Block */}
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={statsVariants}
            className="col-span-12 lg:col-span-5 relative"
          >
            <div className="lg:pl-12">
              {/* Stats Container with glass effect */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 lg:p-10">
                {/* Stats Header */}
                <div className="mb-8 pb-6 border-b border-white/10">
                  <p className="text-gold-400 text-xs tracking-[0.25em] uppercase font-medium mb-2">
                    Why Choose JSM
                  </p>
                  <p className="text-white/60 text-sm">
                    Trusted by 500+ businesses across Zimbabwe
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="space-y-8">
                  {stats.map((stat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + (i * 0.15), duration: 0.5 }}
                      className="group"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-display text-5xl lg:text-6xl font-bold text-white tracking-tight">
                          {stat.number}
                        </span>
                        <div>
                          <p className="text-white font-medium text-sm lg:text-base">
                            {stat.label}
                          </p>
                          <p className="text-white/50 text-xs tracking-wide">
                            {stat.sublabel}
                          </p>
                        </div>
                      </div>
                      {i < stats.length - 1 && (
                        <div className="mt-6 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* CTA in stats box */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.2 }}
                  className="mt-8 pt-6 border-t border-white/10"
                >
                  <a 
                    href="tel:+263712407700"
                    className="flex items-center gap-3 text-gold-400 hover:text-gold-300 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/30 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider">Call us now</p>
                      <p className="font-medium tracking-wide">+263 712 407 700</p>
                    </div>
                  </a>
                </motion.div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-gold-500/30 pointer-events-none hidden lg:block" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Carousel Indicators */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="absolute bottom-24 left-6 lg:left-12 flex gap-2 hidden sm:block"
      >
        {bgImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`h-1 transition-all duration-300 ${
              i === currentImage 
                ? 'w-8 bg-gold-500' 
                : 'w-4 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </motion.div>

      {/* Bottom Bar - Contact Info Swiss Style */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 bg-maroon-950/80 backdrop-blur-sm border-t border-white/5"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-between py-4 gap-4">
            <div className="flex items-center gap-8">
              <span className="hidden md:inline text-white/60 text-sm tracking-wide">

              </span>
            </div>
            <span className="text-gold-500 text-xs tracking-[0.2em] uppercase font-medium">
              Chartered Accountants Zimbabwe
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

// Services Overview Section
const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: <FileSearch className="w-7 h-7" />,
      title: 'Audit & Assurance',
      description: 'Statutory, compliance, and investigative audits conducted with precision and integrity.',
      link: '/services/audit-assurance',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026&auto=format&fit=crop'
    },
    {
      icon: <Landmark className="w-7 h-7" />,
      title: 'Tax Advisory',
      description: 'Strategic tax planning and compliance to optimise your fiscal position.',
      link: '/services/tax-advisory',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop'
    },
    {
      icon: <Briefcase className="w-7 h-7" />,
      title: 'Business Advisory',
      description: 'Management consulting, operational planning, and performance optimisation.',
      link: '/services/business-advisory',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: 'Corporate Finance',
      description: 'Capital raising, business valuations, and restructuring strategies.',
      link: '/services/corporate-finance',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
    },
    {
      icon: <Calculator className="w-7 h-7" />,
      title: 'Bookkeeping',
      description: 'Comprehensive accounting services for businesses of all sizes.',
      link: '/services/bookkeeping',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      icon: <Sprout className="w-7 h-7" />,
      title: 'Agri-Accounting',
      description: 'Specialised financial services for agricultural enterprises.',
      link: '/services/agri-accounting',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop'
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23722F37' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl">
            <span className="text-gold-600 font-medium tracking-wider uppercase text-sm">Our Services</span>
            <h2 className="font-display text-4xl md:text-5xl text-maroon-900 mt-4 mb-6 leading-tight">
              Comprehensive Solutions for Your Business
            </h2>
            <div className="h-1 w-20 bg-gold-500 mb-6" />
            <p className="text-lg text-maroon-600 leading-relaxed">
              From statutory audits to strategic business advisory, we offer a complete suite of 
              professional services tailored to drive your success.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Link
                to={service.link}
                className="group relative block h-full rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-maroon-900/10 transition-all duration-500"
              >
                {/* Background Image - Visible by Default */}
                <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <img 
                    src={service.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/90 to-maroon-950/70" />
                </div>

                {/* White Background - Reveals on Hover */}
                <div className="absolute inset-0 bg-white border border-maroon-100 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:border-gold-300 transition-all duration-500" />

                <div className="relative p-8">
                  <div className="w-14 h-14 rounded-xl bg-gold-500 text-maroon-900 flex items-center justify-center mb-6 group-hover:bg-maroon-900 group-hover:text-gold-400 transition-all duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-white mb-3 group-hover:text-maroon-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-maroon-200 mb-4 leading-relaxed group-hover:text-maroon-600 transition-colors duration-300">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold-400 font-medium group-hover:text-gold-600 transition-colors">
                    Learn More
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-maroon-900 text-white font-semibold rounded hover:bg-maroon-800 transition-all hover:shadow-xl hover:scale-[1.02]"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


// About Preview Section
const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const values = [
    { icon: <Shield className="w-5 h-5" />, text: 'Integrity' },
    { icon: <Users className="w-5 h-5" />, text: 'Commitment' },
    { icon: <Award className="w-5 h-5" />, text: 'Excellence' },
    { icon: <Scale className="w-5 h-5" />, text: 'Accountability' }
  ]

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Split Layout */}
      <div className="grid lg:grid-cols-2 min-h-[800px]">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] lg:h-auto order-2 lg:order-1"
        >
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
            alt="Professional team collaboration"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for seamless blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-maroon-950 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 to-transparent lg:hidden" />
          
          {/* Floating Experience Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.6, type: 'spring' }}
            className="absolute bottom-8 left-8 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:right-0 lg:left-auto lg:translate-x-1/2 z-10"
          >
            <div className="w-32 h-32 bg-gold-500 rounded-2xl flex items-center justify-center shadow-2xl rotate-6">
              <div className="text-center -rotate-6">
                <p className="font-display text-4xl font-bold text-maroon-900">20+</p>
                <p className="text-sm text-maroon-800 font-medium">Years</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Side */}
        <div className="bg-maroon-950 py-24 px-8 lg:px-16 order-1 lg:order-2 flex items-center">
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="max-w-xl"
          >
            <motion.span 
              variants={fadeInUp}
              className="text-gold-400 font-medium tracking-wider uppercase text-sm"
            >
              About Us
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl text-white mt-4 mb-6 leading-tight"
            >
              Two Decades of Excellence in Financial Services
            </motion.h2>
            <motion.div variants={fadeInUp} className="h-1 w-20 bg-gold-500 mb-6" />
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-maroon-200 leading-relaxed mb-6"
            >
              Established on 1 July 2001, JSM Consulting has grown to become one of Zimbabwe's 
              most respected chartered accountancy practices. Our vision is to be an undisputed 
              corporate partner in business.
            </motion.p>

            <motion.p 
              variants={fadeInUp}
              className="text-maroon-300 leading-relaxed mb-8"
            >
              We remain committed to being the most sought-after provider of accounting, company 
              secretarial, audit, and consulting services. Integrity and confidentiality are the 
              cornerstones of our profession.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3 text-maroon-200"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400">
                    {value.icon}
                  </div>
                  <span className="font-medium">{value.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-maroon-950 font-semibold rounded hover:bg-gold-400 transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Quote Section with Background */}
      <div className="relative py-20 bg-maroon-900">
        <div className="absolute inset-0">
          <img 
            src=""
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-16 h-16 text-gold-500/30 mx-auto mb-6" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="font-display text-2xl md:text-3xl text-white leading-relaxed mb-8"
          >
            "It is our vision to become an undisputed corporate partner in business. 
            We will remain an exciting, rewarding, dynamic and prosperous consulting firm."
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="w-14 h-14 rounded-full bg-gold-500/20 flex items-center justify-center border-2 border-gold-500/30">
              <span className="font-display text-gold-400 font-bold text-lg">JM</span>
            </div>
            <div className="text-left">
              <p className="text-white font-medium">Janet Mutasa</p>
              <p className="text-maroon-300 text-sm">Managing Partner</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Process Section - Interactive Consulting Skills Showcase
const ProcessSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We begin with a thorough assessment of your business needs, challenges, and objectives.',
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      number: '02',
      title: 'Analysis',
      description: 'Our experts conduct comprehensive analysis using industry-leading methodologies.',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      number: '03',
      title: 'Strategy',
      description: 'We develop tailored strategies aligned with your business goals and market conditions.',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      number: '04',
      title: 'Implementation',
      description: 'Our team guides you through seamless execution with ongoing support and monitoring.',
      icon: <CheckCircle2 className="w-6 h-6" />
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-maroon-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span 
            variants={fadeInUp}
            className="text-gold-600 font-medium tracking-wider uppercase text-sm"
          >
            Our Approach
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl text-maroon-900 mt-4 mb-6"
          >
            A Proven Path to Success
          </motion.h2>
          <motion.div variants={fadeInUp} className="h-1 w-20 bg-gold-500 mx-auto mb-6" />
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-maroon-600 max-w-2xl mx-auto"
          >
            Our structured consulting methodology ensures consistent, measurable results for every client engagement.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-maroon-200">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gold-500 rounded-full" />
                </div>
              )}

              <div className="relative bg-white rounded-2xl p-8 border border-maroon-100 hover:border-gold-300 hover:shadow-xl transition-all duration-300 h-full">
                {/* Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-5xl font-bold text-maroon-100 group-hover:text-gold-200 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-maroon-900 text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-maroon-900 transition-colors">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-xl text-maroon-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-maroon-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Testimonials Section
const TestimonialsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    {
      quote: "JSM Consulting transformed our financial operations. Their expertise in tax advisory saved us significant costs while ensuring full compliance.",
      author: "Managing Director",
      company: "Leading Manufacturing Company",
      initials: "MD"
    },
    {
      quote: "Professional, thorough, and always available. The team's dedication to our success is unmatched in the industry.",
      author: "Chief Financial Officer",
      company: "Agricultural Enterprise",
      initials: "CF"
    },
    {
      quote: "Their business advisory services helped us navigate a complex restructuring with confidence and clarity.",
      author: "Board Chairman",
      company: "Investment Holdings",
      initials: "BC"
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span 
            variants={fadeInUp}
            className="text-gold-600 font-medium tracking-wider uppercase text-sm"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl text-maroon-900 mt-4 mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.div variants={fadeInUp} className="h-1 w-20 bg-gold-500 mx-auto" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative"
            >
              <div className="bg-maroon-50 rounded-2xl p-8 h-full">
                <Quote className="w-10 h-10 text-gold-500/50 mb-4" />
                <p className="text-maroon-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-maroon-900 flex items-center justify-center">
                    <span className="text-gold-400 font-semibold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-medium text-maroon-900">{testimonial.author}</p>
                    <p className="text-sm text-maroon-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// CTA Section
const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/95 to-maroon-950/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-transparent to-maroon-950/50" />
      </div>

      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #d4a537 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Orbs */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.div variants={scaleIn} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-400 text-sm font-medium">
              <Building2 className="w-4 h-4" />
              Start Your Journey Today
            </span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
          >
            Ready to Elevate Your Business?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-maroon-200 mb-10 max-w-2xl mx-auto"
          >
            Partner with Zimbabwe's trusted chartered accountants. Let's discuss how we can help 
            you achieve your financial and business objectives.
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-maroon-950 font-semibold rounded hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-[1.02]"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+263712407700"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Call +263 712 407 700
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={fadeInUp}
            className="mt-16 pt-12 border-t border-white/10"
          >
            <p className="text-maroon-300 text-sm mb-6">Trusted by leading organizations across Zimbabwe</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-24 h-12 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-white/50 text-xs">Client {i}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Main Home Page Component
const Home = () => {
  return (
    <>
      <SEOHead 
        title="JSM Consulting | Chartered Accountants Zimbabwe | Business Advisory & Audit Services"
        description="JSM Consulting, Chartered Accountants Zimbabwe since 2001. Expert audit, tax advisory, bookkeeping, corporate finance, and business consulting services in Harare, Zimbabwe."
        keywords="chartered accountants zimbabwe, audit services harare, tax advisory zimbabwe, business consulting, corporate finance, bookkeeping, JSM Consulting, accounting services harare"
        canonical="https://jsmconsulting.co.zw/"
      />
      
      <main>
        <SwissHeroSection/>
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  )
}

export default Home
