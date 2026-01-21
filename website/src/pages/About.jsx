import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { 
  Target, 
  Eye, 
  Heart, 
  Shield, 
  Award,
  Users,
  Clock,
  Building2,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Quote,
  ChevronRight
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

// Hero Section with Split Design
const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      {/* Split Background */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-white" />
        <div className="bg-maroon-950 hidden lg:block" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:pr-16"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-medium mb-6"
            >
              <Building2 className="w-4 h-4" />
              Established 2001
            </motion.span>

            <motion.h1 
              variants={fadeInUp}
              className="font-display text-5xl md:text-6xl text-maroon-900 leading-[1.1] mb-6"
            >
              Building Trust Through{' '}
              <span className="text-gold-600">Excellence</span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="h-1 w-24 bg-gold-500 mb-6" />

            <motion.p 
              variants={fadeInUp}
              className="text-xl text-maroon-600 leading-relaxed mb-8"
            >
              For over two decades, JSM Consulting has been at the forefront of 
              financial and business advisory services in Zimbabwe.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-maroon-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-maroon-700" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-maroon-900">20+</p>
                  <p className="text-sm text-maroon-500">Years of Service</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-maroon-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-maroon-700" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-maroon-900">500+</p>
                  <p className="text-sm text-maroon-500">Clients Served</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Maroon Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:pl-16 lg:py-16"
          >
            <div className="bg-maroon-900 lg:bg-transparent rounded-2xl lg:rounded-none p-8 lg:p-0">
              <p className="text-maroon-200 lg:text-maroon-300 text-lg leading-relaxed mb-6">
                JSM Consulting, Chartered Accountants Zimbabwe, was established on 1 July 2001. 
                Since then, we have grown to become one of the most respected practices in the country, 
                serving clients across diverse industries.
              </p>
              <p className="text-maroon-300 lg:text-maroon-400 leading-relaxed">
                Our team of experienced professionals brings together decades of expertise from 
                top-tier firms and corporate backgrounds, ensuring that every client receives 
                world-class service tailored to their unique needs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Vision, Mission, Values Section with Images
const VMVSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const items = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Vision',
      content: 'To become an undisputed corporate partner in business. We will remain an exciting, rewarding, dynamic and prosperous consulting firm.',
      color: 'gold',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Mission',
      content: 'To be the most sought-after provider of accounting, company secretarial, audit and consulting services in Zimbabwe.',
      color: 'maroon',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Ethics',
      content: 'Integrity and confidentiality are the cornerstones of our profession. We value all our clients and staff, and encourage regular interactive dialogue.',
      color: 'gold',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop'
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-maroon-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-maroon-700/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span 
            variants={fadeInUp}
            className="text-gold-400 font-medium tracking-wider uppercase text-sm"
          >
            Our Foundation
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl text-white mt-4 mb-4"
          >
            Vision, Mission & Ethics
          </motion.h2>
          <motion.div variants={fadeInUp} className="h-1 w-20 bg-gold-500 mx-auto" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid lg:grid-cols-3 gap-8"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${
                  item.color === 'gold' 
                    ? 'bg-gradient-to-t from-gold-600/95 via-gold-500/90 to-gold-400/80' 
                    : 'bg-gradient-to-t from-maroon-950/95 via-maroon-900/90 to-maroon-800/80'
                }`} />
              </div>

              {/* Content */}
              <div className="relative p-8 min-h-[360px] flex flex-col">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                    backgroundSize: '12px 12px'
                  }} />
                </div>

                <div className={`relative w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                  item.color === 'gold' 
                    ? 'bg-maroon-900 text-gold-400' 
                    : 'bg-gold-500/20 text-gold-400 border border-gold-500/30'
                }`}>
                  {item.icon}
                </div>

                <h3 className={`font-display text-2xl font-bold mb-4 ${
                  item.color === 'gold' ? 'text-maroon-900' : 'text-white'
                }`}>
                  {item.title}
                </h3>
                <p className={`leading-relaxed flex-grow ${
                  item.color === 'gold' ? 'text-maroon-800' : 'text-maroon-200'
                }`}>
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Core Values Section
const ValuesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const values = [
    { name: 'Accountability', description: 'Taking ownership of our actions and results' },
    { name: 'Commitment', description: 'Dedicated to exceeding client expectations' },
    { name: 'Diligence', description: 'Meticulous attention to every detail' },
    { name: 'Integrity', description: 'Honest and ethical in all dealings' },
    { name: 'Professionalism', description: 'Maintaining the highest standards' },
    { name: 'Responsibility', description: 'Reliable partners you can count on' }
  ]

  const beliefs = [
    'Business appreciation',
    'Client care',
    'Open communication',
    'Performance',
    'Quality',
    'Respect and reward'
  ]

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Image - Subtle */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-[0.03]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Values */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="text-gold-600 font-medium tracking-wider uppercase text-sm">Our Foundation</span>
              <h2 className="font-display text-4xl text-maroon-900 mt-4 mb-4">Core Values</h2>
              <div className="h-1 w-16 bg-gold-500" />
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="space-y-4"
            >
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-4 p-4 bg-maroon-50 rounded-xl hover:bg-maroon-100 transition-all cursor-default"
                >
                  <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Shield className="w-5 h-5 text-maroon-900" />
                  </div>
                  <div>
                    <span className="font-semibold text-maroon-900 block">{value.name}</span>
                    <span className="text-sm text-maroon-600">{value.description}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Beliefs with Image */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="text-gold-600 font-medium tracking-wider uppercase text-sm">Our Philosophy</span>
              <h2 className="font-display text-4xl text-maroon-900 mt-4 mb-4">What We Believe</h2>
              <div className="h-1 w-16 bg-gold-500" />
            </motion.div>

            {/* Image with overlay beliefs */}
            <motion.div 
              variants={fadeInUp}
              className="relative rounded-2xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Team collaboration"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/90 via-maroon-900/60 to-transparent" />
              
              {/* Quote Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Quote className="w-8 h-8 text-gold-500/50 mb-2" />
                <p className="text-white font-medium italic">
                  "We believe in building lasting partnerships through trust, transparency, and mutual success."
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 gap-3 mt-6"
            >
              {beliefs.map((belief, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-4 bg-gold-50 rounded-xl hover:bg-gold-100 transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0" />
                  <span className="font-medium text-maroon-800">{belief}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Why Choose Us Section with Background Image
const WhyChooseSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const reasons = [
    {
      title: 'Experienced Leadership',
      description: 'Our partners bring decades of experience from PricewaterhouseCoopers and top corporate positions.',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Comprehensive Services',
      description: 'From audits to corporate finance, we offer end-to-end financial and advisory solutions.',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: 'Client-Centric Approach',
      description: 'We tailor our services to meet the unique needs of each client, ensuring personalised attention.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Transparent Pricing',
      description: 'Our fees are based on time spent and staff calibre, with estimates provided upfront.',
      icon: <Shield className="w-6 h-6" />
    }
  ]

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-950/95 to-maroon-900/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-transparent to-maroon-950/50" />
      </div>

      {/* Floating Orbs */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-16 text-center lg:text-left">
            <span className="text-gold-400 font-medium tracking-wider uppercase text-sm">Why JSM</span>
            <h2 className="font-display text-4xl md:text-5xl text-white mt-4 mb-4">
              Why Choose JSM Consulting?
            </h2>
            <div className="h-1 w-24 bg-gold-500 mx-auto lg:mx-0" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                className="group flex gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 text-gold-400 group-hover:bg-gold-500 group-hover:text-maroon-900 transition-all">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-maroon-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Fee Structure Section
const FeeSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-maroon-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-gold-500/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-maroon-500/5 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="text-gold-600 font-medium tracking-wider uppercase text-sm">Transparent</span>
            <h2 className="font-display text-4xl text-maroon-900 mt-4 mb-4">Fee Structure</h2>
            <div className="h-1 w-16 bg-gold-500 mx-auto" />
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/17.jpg"
                alt="Financial transparency"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-display text-2xl">Fair & Transparent</p>
                <p className="text-maroon-200 text-sm">No hidden fees, no surprises</p>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-maroon-900/5 border border-maroon-100">
              <p className="text-lg text-maroon-700 leading-relaxed mb-6">
                Our fees for all professional work are calculated on the basis of time spent 
                on the engagement and the rate appropriate to the calibre of staff utilised.
              </p>
              <p className="text-maroon-600 leading-relaxed mb-8">
                We provide fee estimates where there is a likelihood of engagement, ensuring 
                complete transparency and no surprises. Our commitment to fair pricing reflects 
                our respect for our clients and the value we place on long-term relationships.
              </p>

              <div className="space-y-3 mb-8">
                {['Time-based billing', 'Upfront estimates', 'No hidden charges', 'Flexible arrangements'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-600" />
                    <span className="text-maroon-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-maroon-900 text-white font-semibold rounded hover:bg-maroon-800 transition-all w-full justify-center"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
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
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1951&auto=format&fit=crop"
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
            Ready to Partner With Us?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-maroon-200 mb-10 max-w-2xl mx-auto"
          >
            Join hundreds of satisfied clients who trust JSM Consulting for their 
            financial and business advisory needs.
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-maroon-950 font-semibold rounded hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/25"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Explore Our Services
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Main About Page Component
const About = () => {
  return (
    <>
      <SEOHead 
        title="About Us | JSM Consulting - Chartered Accountants Zimbabwe Since 2001"
        description="Learn about JSM Consulting, Zimbabwe's trusted chartered accountancy firm established in 2001. Discover our vision, mission, values, and commitment to excellence."
        keywords="about JSM Consulting, chartered accountants zimbabwe history, zimbabwe accounting firm, business advisory harare"
        canonical="https://jsmconsulting.co.zw/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "AccountingService",
            "name": "JSM Consulting",
            "foundingDate": "2001-07-01",
            "description": "Chartered Accountants Zimbabwe providing audit, bookkeeping, tax advisory, and business consulting services."
          }
        }}
      />
      
      <main>
        <HeroSection />
        <VMVSection />
        <ValuesSection />
        <WhyChooseSection />
        <FeeSection />
      </main>
    </>
  )
}

export default About
