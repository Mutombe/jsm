import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { 
  Award, 
  Briefcase, 
  GraduationCap, 
  Linkedin, 
  Mail, 
  Phone,
  Building2,
  Users,
  Target,
  TrendingUp,
  ArrowRight,
  Quote,
  Star,
  ChevronRight,
  Clock
} from 'lucide-react'
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
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}


const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative min-h-[70vh] overflow-hidden">
      {/* Left Side - White */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-white hidden lg:block" />
      
      {/* Right Side - Maroon */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 bg-maroon-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 165, 55, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gold-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 min-h-[70vh] items-center gap-12">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="py-20 lg:py-0"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 text-maroon-700 font-semibold text-sm tracking-wider uppercase mb-6"
            >
              <span className="w-12 h-px bg-maroon-700" />
              Our Leadership
            </motion.span>

            <motion.h1 
              variants={fadeInUp}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-maroon-950 leading-[1.05] mb-6"
            >
              Meet the{' '}
              <span className="relative">
                Experts
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 4 150 4 198 10" stroke="#d4a537" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
              <br />
              Behind Your Success
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg text-maroon-700 leading-relaxed max-w-lg mb-8"
            >
              Since 2001, our team of PricewaterhouseCoopers-trained chartered accountants 
              has been delivering exceptional financial and business advisory services across Zimbabwe.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-maroon-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-maroon-800 transition-all duration-300"
              >
                Work With Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border-2 border-maroon-900 text-maroon-900 px-8 py-4 rounded-xl font-semibold hover:bg-maroon-50 transition-all duration-300"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="py-20 lg:py-0 lg:pl-12"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '23+', label: 'Years of Excellence', icon: Award },
                { number: '500+', label: 'Clients Served', icon: Users },
                { number: '6', label: 'Core Team Members', icon: Briefcase },
                { number: '100%', label: 'Client Retention', icon: Target }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                  <div className="text-4xl font-display font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-maroon-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}




// Hero Section with Blended Background Image

// Leadership Section with Enhanced Design
const LeadershipSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const leaders = [
        {
      name: 'Noel Mutasa',
      role: 'Marketing, Client Relations & Corporate Finance Partner',
      image: '/Noel-Mutasa.jpg',
      bio: 'Noel trained with PricewaterhouseCoopers before joining commerce and industry, where he rapidly rose to Group Finance Executive, Managing Director and Chief Executive Officer.',
      experience: [
        'Former Manager at PricewaterhouseCoopers',
        'Former Group Finance Executive',
        'Former Managing Director & CEO',
        'Board Member of multiple private and public companies'
      ],
      expertise: ['Corporate Finance', 'Business Valuations', 'Strategic Planning', 'Board Advisory'],
      quote: 'Success in business comes from understanding your clients\' vision and aligning our expertise to make it reality.'
    },
    {
      name: 'Janet Mutasa',
      role: 'Managing Partner',
      image: '/Noel-Mutasa.jpg',
      bio: 'Janet administers the practice on a daily basis. She is a PricewaterhouseCoopers trained Chartered Accountant with extensive audit and financial administration experience.',
      experience: [
        'Former Head of Business Services Division, PwC Bulawayo',
        'Former Manager, PwC National & Regional Accounting Function',
        'Former Group Financial Controller, National Foods Limited',
        'Tax Award Winner - ICAZ Final Qualifying Examinations'
      ],
      expertise: ['Audit & Assurance', 'Tax Administration', 'Financial Reporting', 'Group Accounting'],
      quote: 'Excellence in financial stewardship is not just our profession—it\'s our commitment to every client we serve.'
    },

  ]

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-3 text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4">
            <span className="w-8 h-px bg-gold-500" />
            Partners
            <span className="w-8 h-px bg-gold-500" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-maroon-950 mb-4">
            Our Leadership Team
          </h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mb-6" />
          <p className="text-maroon-700 text-lg max-w-2xl mx-auto">
            Decades of combined experience in accounting, audit, and business advisory
          </p>
        </motion.div>

        {/* Leader Cards */}
        <div className="space-y-24">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}
            >
              {/* Image Side */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative max-w-md mx-auto lg:mx-0">
                  {/* Background decoration */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${index % 2 === 0 ? 'from-maroon-900 to-maroon-700' : 'from-gold-500 to-gold-600'} rounded-2xl transform ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'}`} />
                  
                  {/* Main Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={leader.image}
                      alt={leader.name}
                      className="w-full aspect-[4/5] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/60 via-transparent to-transparent" />
                    
                    {/* Name Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-display text-2xl font-bold">{leader.name}</p>
                      <p className="text-gold-400 text-sm">{leader.role}</p>
                    </div>
                  </div>

                  {/* Quote card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className={`absolute -bottom-8 ${index % 2 === 0 ? '-right-4 lg:-right-8' : '-left-4 lg:-left-8'} bg-white rounded-2xl shadow-xl p-6 max-w-xs border border-maroon-100`}
                  >
                    <Quote className="w-8 h-8 text-gold-500 mb-2" />
                    <p className="text-maroon-800 text-sm italic leading-relaxed">
                      "{leader.quote}"
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Content Side */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Briefcase className="w-4 h-4" />
                  {leader.role}
                </div>

                <h3 className="font-display text-4xl text-maroon-950 mb-4">
                  {leader.name}
                </h3>

                <p className="text-maroon-700 text-lg leading-relaxed mb-6">
                  {leader.bio}
                </p>

                {/* Experience */}
                <div className="mb-6">
                  <h4 className="font-semibold text-maroon-900 mb-3 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-gold-600" />
                    Career Highlights
                  </h4>
                  <ul className="space-y-2">
                    {leader.experience.map((exp, i) => (
                      <li key={i} className="flex items-start gap-2 text-maroon-700">
                        <ChevronRight className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" />
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {leader.expertise.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 bg-maroon-100 text-maroon-800 rounded-full text-sm font-medium hover:bg-maroon-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Support Staff Section with Image Accents
const SupportStaffSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const staff = [
    {
      name: 'Beauty Hwindizi',
      role: 'Senior Consultant & Practice Liaison',
      tenure: '7+ years with the firm',
      description: 'Key front liaison of the practice, leading client relations and day-to-day operational management.',
      initials: 'BH',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop'
    },
    {
      name: 'Support Team',
      role: 'Accounting & Consulting Personnel',
      tenure: 'Dedicated team of 5',
      description: 'Our skilled support team ensures seamless delivery of all accounting and consulting services.',
      initials: 'ST',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-maroon-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-gold-500/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-3xl mb-16"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 text-gold-600 font-semibold text-sm tracking-wider uppercase mb-4"
          >
            <span className="w-8 h-px bg-gold-500" />
            Our Team
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl text-maroon-950 mb-4"
          >
            Support Excellence
          </motion.h2>
          <motion.div variants={fadeInUp} className="h-1 w-20 bg-gold-500 mb-6" />
          <motion.p 
            variants={fadeInUp}
            className="text-maroon-700 text-lg"
          >
            Behind every successful engagement is our dedicated team of professionals 
            committed to delivering exceptional service.
          </motion.p>
        </motion.div>

        {/* Staff Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {staff.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <img 
                  src={member.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/90 to-maroon-950/70" />
              </div>

              <div className="relative p-8">
                <div className="flex items-start gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-maroon-950 mb-1 group-hover:text-white transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-gold-600 font-medium mb-1 group-hover:text-gold-400 transition-colors duration-300">{member.role}</p>
                    <p className="text-maroon-500 text-sm mb-4 group-hover:text-maroon-300 transition-colors duration-300">{member.tenure}</p>
                    <p className="text-maroon-700 leading-relaxed group-hover:text-maroon-200 transition-colors duration-300">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gold-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Values Section with Background Image
const ValuesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    { value: 'Accountability', description: 'Taking full ownership of our actions and their outcomes' },
    { value: 'Commitment', description: 'Dedicated to exceeding client expectations every time' },
    { value: 'Diligence', description: 'Meticulous attention to detail in every engagement' },
    { value: 'Integrity', description: 'Unwavering ethical standards in all dealings' },
    { value: 'Professionalism', description: 'Maintaining the highest standards of conduct' },
    { value: 'Responsibility', description: 'Trustworthy stewards of our clients\' interests' }
  ]

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-maroon-950/95" />
      </div>

      {/* Pattern Overlay */}
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
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-flex items-center gap-3 text-gold-400 font-semibold text-sm tracking-wider uppercase mb-4"
          >
            <Star className="w-4 h-4" />
            Core Values
            <Star className="w-4 h-4" />
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl text-white mb-4"
          >
            What We Stand For
          </motion.h2>
          <motion.div variants={fadeInUp} className="h-1 w-20 bg-gold-500 mx-auto mb-6" />
          <motion.p 
            variants={fadeInUp}
            className="text-maroon-200 text-lg max-w-2xl mx-auto"
          >
            Our core values guide every decision and action we take
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {values.map((item, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-gold-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gold-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:bg-gold-500/30 transition-colors">
                <span className="text-2xl font-display text-gold-400">{index + 1}</span>
              </div>
              <h3 className="text-white font-semibold mb-2">{item.value}</h3>
              <p className="text-maroon-300 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// CTA Section with Background Image
const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gold-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/95 to-maroon-950/90" />
          </div>

          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a537' fill-opacity='0.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Floating Orb */}
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-l from-gold-500/20 to-transparent rounded-full blur-3xl"
          />

          <div className="relative p-12 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
                  Ready to Partner with Excellence?
                </h2>
                <p className="text-maroon-200 text-lg leading-relaxed">
                  Let our experienced team help you achieve your business and financial objectives. 
                  Contact us today for a consultation.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInRight}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-gold-500 text-maroon-950 px-8 py-4 rounded font-semibold hover:bg-gold-400 transition-all duration-300 shadow-lg shadow-gold-500/25"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/careers"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  Join Our Team
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Main Team Page Component
const Team = () => {
  return (
    <>
      <SEOHead
        title="Our Team | JSM Consulting - Chartered Accountants Zimbabwe"
        description="Meet the experienced team at JSM Consulting. Our PwC-trained chartered accountants bring decades of expertise in audit, tax, and business advisory services."
        keywords="JSM Consulting team, Janet Mutasa, Noel Mutasa, chartered accountants Zimbabwe, PwC trained accountants, business advisors Harare"
        canonical="/team"
      />
      
      <main>
        <HeroSection />
        <LeadershipSection />
        <SupportStaffSection />
        <ValuesSection />
        <CTASection />
      </main>
    </>
  )
}

export default Team