import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  GraduationCap,
  Award,
  Users,
  TrendingUp,
  Heart,
  Coffee,
  BookOpen,
  Target,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Building2,
  Mail,
  Upload,
  CheckCircle2,
  Sparkles,
  Send
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

// Hero Section - Diagonal Split
const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative min-h-[90vh] sm:min-h-[80vh] flex items-center overflow-hidden">
      {/* Background with diagonal */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 bg-maroon-950" style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
        }} />
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(30deg, #d4a537 12%, transparent 12.5%, transparent 87%, #d4a537 87.5%, #d4a537),
              linear-gradient(150deg, #d4a537 12%, transparent 12.5%, transparent 87%, #d4a537 87.5%, #d4a537),
              linear-gradient(30deg, #d4a537 12%, transparent 12.5%, transparent 87%, #d4a537 87.5%, #d4a537),
              linear-gradient(150deg, #d4a537 12%, transparent 12.5%, transparent 87%, #d4a537 87.5%, #d4a537)`,
            backgroundSize: '60px 100px',
            backgroundPosition: '0 0, 0 0, 30px 50px, 30px 50px'
          }} />
        </div>
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-gold-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.div variants={fadeInUp} className="mb-4 sm:mb-6">
            <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gold-500/20 border border-gold-500/40 rounded-full text-gold-300 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Join Our Growing Team
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] sm:leading-[1.05] mb-4 sm:mb-6"
          >
            Build Your{' '}
            <span className="text-gradient">Career</span>{' '}
            With Zimbabwe's Trusted Advisors
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-base sm:text-xl text-maroon-200 leading-relaxed mb-8 sm:mb-10 max-w-2xl"
          >
            At JSM Consulting, we invest in talented individuals who share our passion 
            for excellence. Join a team where your growth and expertise are valued.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#openings"
              className="group inline-flex items-center justify-center gap-2 bg-gold-500 text-maroon-950 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold hover:bg-gold-400 transition-all duration-300 text-sm sm:text-base"
            >
              View Open Positions
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#culture"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
            >
              Our Culture
            </a>
          </motion.div>
        </motion.div>

        {/* Stats Cards - Mobile & Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 sm:mt-0 sm:absolute sm:bottom-0 sm:right-0 flex justify-center sm:justify-end gap-3 sm:gap-4 sm:mr-8 sm:mb-8"
        >
          {[
            { number: '23+', label: 'Years in Business' },
            { number: '95%', label: 'Employee Retention' }
          ].map((stat, i) => (
            <div 
              key={i}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl text-center min-w-[120px] sm:min-w-[140px]"
            >
              <div className="text-2xl sm:text-3xl font-display font-bold text-maroon-900">{stat.number}</div>
              <div className="text-maroon-600 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Why Join Us Section - Bento Grid Style
const WhyJoinSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      icon: GraduationCap,
      title: 'Professional Development',
      description: 'Continuous training and support for professional certifications including ICAZ, ACCA, and more.',
      color: 'maroon'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear progression paths with mentorship from industry leaders and partners.',
      color: 'gold'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work alongside experienced professionals in a supportive, team-oriented environment.',
      color: 'maroon'
    },
    {
      icon: Award,
      title: 'Diverse Clients',
      description: 'Exposure to various industries and complex engagements across Zimbabwe.',
      color: 'gold'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'We value your wellbeing with flexible arrangements and supportive policies.',
      color: 'maroon'
    },
    {
      icon: Coffee,
      title: 'Great Workplace',
      description: 'Modern office in Eastlea, Harare with excellent facilities and amenities.',
      color: 'gold'
    }
  ]

  return (
    <section id="culture" ref={ref} className="py-16 sm:py-24 bg-maroon-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start"
        >
          {/* Left Column - Header */}
          <motion.div variants={fadeInLeft} className="lg:sticky lg:top-32">
            <span className="inline-flex items-center gap-2 text-gold-600 font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
              <span className="w-6 sm:w-8 h-px bg-gold-500" />
              Why Join Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-maroon-950 mb-4 sm:mb-6">
              More Than Just a Job
            </h2>
            <p className="text-maroon-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              At JSM Consulting, we believe our people are our greatest asset. 
              We're committed to creating an environment where talent thrives.
            </p>
            <div className="h-1 w-20 sm:w-24 bg-gold-500" />
          </motion.div>

          {/* Right Column - Benefits Grid */}
          <motion.div
            variants={staggerContainer}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-${benefit.color === 'gold' ? 'gold' : 'maroon'}-200 overflow-hidden`}
              >
                {/* Icon */}
                <div className={`w-12 sm:w-14 h-12 sm:h-14 ${benefit.color === 'gold' ? 'bg-gold-100' : 'bg-maroon-100'} rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5`}>
                  <benefit.icon className={`w-6 sm:w-7 h-6 sm:h-7 ${benefit.color === 'gold' ? 'text-gold-600' : 'text-maroon-700'}`} />
                </div>

                <h3 className="font-display text-lg sm:text-xl text-maroon-950 mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-maroon-600 leading-relaxed text-sm sm:text-base">
                  {benefit.description}
                </p>

                {/* Decorative corner */}
                <div className={`absolute -bottom-8 -right-8 w-20 sm:w-24 h-20 sm:h-24 ${benefit.color === 'gold' ? 'bg-gold-100' : 'bg-maroon-100'} rounded-full opacity-50`} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Open Positions Section
const OpenPositionsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedJob, setExpandedJob] = useState(null)

  const positions = [
    {
      id: 1,
      title: 'Audit Associate',
      department: 'Audit & Assurance',
      type: 'Full-time',
      location: 'Harare',
      experience: '2-4 years',
      description: 'Join our audit team to deliver high-quality statutory and compliance audits for diverse clients across various industries.',
      requirements: [
        'ICAZ, ACCA, or equivalent qualification (or part-qualified)',
        '2-4 years of audit experience, preferably in a professional services firm',
        'Strong analytical and problem-solving skills',
        'Excellent communication skills in English',
        'Proficiency in accounting software and MS Office'
      ],
      responsibilities: [
        'Conduct statutory audits and compliance reviews',
        'Prepare audit working papers and documentation',
        'Assist in planning and executing audit engagements',
        'Identify and communicate audit findings',
        'Support senior team members in client relationship management'
      ]
    },
    {
      id: 2,
      title: 'Tax Consultant',
      department: 'Tax Advisory',
      type: 'Full-time',
      location: 'Harare',
      experience: '3-5 years',
      description: 'Provide expert tax advice and compliance services to corporate and individual clients, ensuring optimal tax positions.',
      requirements: [
        'Recognised accounting qualification (ICAZ, ACCA, or equivalent)',
        '3-5 years of tax experience in Zimbabwe',
        'In-depth knowledge of Zimbabwe tax legislation',
        'Experience with ZIMRA systems and procedures',
        'Strong technical writing and presentation skills'
      ],
      responsibilities: [
        'Prepare and review corporate and individual tax returns',
        'Advise clients on tax planning and compliance matters',
        'Represent clients before ZIMRA',
        'Stay updated on tax legislation changes',
        'Conduct tax health checks and due diligence'
      ]
    },
    {
      id: 3,
      title: 'Accounting Officer',
      department: 'Bookkeeping & Accounting',
      type: 'Full-time',
      location: 'Harare',
      experience: '1-3 years',
      description: 'Manage bookkeeping and accounting functions for multiple clients, ensuring accurate and timely financial reporting.',
      requirements: [
        'Accounting diploma or degree',
        '1-3 years of accounting experience',
        'Proficiency in Pastel and other accounting software',
        'Strong attention to detail',
        'Ability to manage multiple client accounts'
      ],
      responsibilities: [
        'Maintain client books and accounting records',
        'Prepare monthly and quarterly financial statements',
        'Process payroll and statutory returns',
        'Reconcile bank statements and accounts',
        'Support year-end audit preparation'
      ]
    }
  ]

  return (
    <section id="openings" ref={ref} className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 sm:gap-3 text-gold-600 font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-px bg-gold-500" />
            Current Openings
            <span className="w-6 sm:w-8 h-px bg-gold-500" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-maroon-950 mb-3 sm:mb-4">
            Open Positions
          </h2>
          <p className="text-maroon-700 text-base sm:text-lg max-w-2xl mx-auto">
            Explore our current opportunities and find your perfect role
          </p>
        </motion.div>

        {/* Job Listings */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="space-y-4 sm:space-y-6"
        >
          {positions.map((job, index) => (
            <motion.div
              key={job.id}
              variants={fadeInUp}
              className="bg-gradient-to-r from-maroon-50/50 to-white rounded-xl sm:rounded-2xl border border-maroon-100 overflow-hidden"
            >
              {/* Job Header */}
              <button
                onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                className="w-full p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left hover:bg-maroon-50/50 transition-colors active:bg-maroon-50"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-start sm:items-center gap-2 sm:gap-3 mb-2">
                    <h3 className="font-display text-xl sm:text-2xl text-maroon-950">{job.title}</h3>
                    <span className="px-2.5 sm:px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-xs sm:text-sm font-medium">
                      {job.department}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-maroon-600 text-sm">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {job.experience}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 self-end sm:self-auto">
                  <span className="text-maroon-700 font-medium text-sm sm:text-base">
                    {expandedJob === job.id ? 'Hide' : 'View Details'}
                  </span>
                  {expandedJob === job.id ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-maroon-700" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-maroon-700" />
                  )}
                </div>
              </button>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedJob === job.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 md:px-8 pb-6 sm:pb-8 border-t border-maroon-100">
                      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 pt-5 sm:pt-6">
                        {/* Description */}
                        <div>
                          <p className="text-maroon-700 leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
                            {job.description}
                          </p>

                          <h4 className="font-semibold text-maroon-900 mb-2.5 sm:mb-3 text-sm sm:text-base">Requirements</h4>
                          <ul className="space-y-2 mb-5 sm:mb-6">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-2 text-maroon-700 text-sm sm:text-base">
                                <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Responsibilities */}
                        <div>
                          <h4 className="font-semibold text-maroon-900 mb-2.5 sm:mb-3 text-sm sm:text-base">Responsibilities</h4>
                          <ul className="space-y-2 mb-5 sm:mb-6">
                            {job.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2 text-maroon-700 text-sm sm:text-base">
                                <CheckCircle2 className="w-4 h-4 text-maroon-500 mt-0.5 flex-shrink-0" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>

                          <a
                            href="#apply"
                            className="inline-flex items-center justify-center gap-2 bg-maroon-900 text-white px-5 sm:px-6 py-3 rounded-xl font-semibold hover:bg-maroon-800 transition-colors text-sm sm:text-base w-full sm:w-auto"
                          >
                            Apply for This Position
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* No specific opening? */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <p className="text-maroon-700 mb-3 sm:mb-4 text-sm sm:text-base">
            Don't see a position that fits? We're always looking for talented individuals.
          </p>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-700 transition-colors text-sm sm:text-base"
          >
            Send us your CV
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// Application Section
const ApplicationSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Application submitted successfully! We will be in touch soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 1500)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="apply" ref={ref} className="py-16 sm:py-24 bg-maroon-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left - Info */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="order-2 lg:order-1"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 text-gold-400 font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4"
            >
              <span className="w-6 sm:w-8 h-px bg-gold-500" />
              Apply Now
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6"
            >
              Start Your Journey With Us
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-maroon-200 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8"
            >
              Submit your application below and take the first step towards joining 
              Zimbabwe's trusted consulting firm.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">Email Us</h4>
                  <a href="mailto:careers@jsmconsulting.co.zw" className="text-maroon-200 hover:text-gold-400 transition-colors text-sm sm:text-base break-all">
                    careers@jsmconsulting.co.zw
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">Visit Our Office</h4>
                  <p className="text-maroon-200 text-sm sm:text-base">
                    Mudiwa House<br />
                    48 Midlothian Avenue<br />
                    Eastlea, Harare
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Career Path */}
            <motion.div 
              variants={fadeInUp}
              className="mt-8 sm:mt-12 p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10"
            >
              <h4 className="text-white font-semibold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400" />
                Our Career Path
              </h4>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                {['Graduate', 'Associate', 'Senior', 'Manager', 'Partner'].map((level, i) => (
                  <React.Fragment key={level}>
                    <span className="text-maroon-200 py-1 px-2 bg-white/5 rounded">{level}</span>
                    {i < 4 && <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gold-500 flex-shrink-0" />}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
              <h3 className="font-display text-xl sm:text-2xl text-maroon-950 mb-5 sm:mb-6">Application Form</h3>
              
              <div className="space-y-4 sm:space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-maroon-700 mb-1.5 sm:mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 sm:px-4 py-3 sm:py-3 rounded-lg sm:rounded-xl border border-maroon-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm sm:text-base"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-maroon-700 mb-1.5 sm:mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 sm:px-4 py-3 sm:py-3 rounded-lg sm:rounded-xl border border-maroon-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-maroon-700 mb-1.5 sm:mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 sm:px-4 py-3 sm:py-3 rounded-lg sm:rounded-xl border border-maroon-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm sm:text-base"
                    placeholder="+263 7XX XXX XXX"
                  />
                </div>

                {/* Position */}
                <div>
                  <label htmlFor="position" className="block text-xs sm:text-sm font-medium text-maroon-700 mb-1.5 sm:mb-2">
                    Position Applying For *
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 sm:px-4 py-3 sm:py-3 rounded-lg sm:rounded-xl border border-maroon-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all bg-white text-sm sm:text-base"
                  >
                    <option value="">Select a position</option>
                    <option value="audit-associate">Audit Associate</option>
                    <option value="tax-consultant">Tax Consultant</option>
                    <option value="accounting-officer">Accounting Officer</option>
                    <option value="general">General Application</option>
                  </select>
                </div>

                {/* Experience */}
                <div>
                  <label htmlFor="experience" className="block text-xs sm:text-sm font-medium text-maroon-700 mb-1.5 sm:mb-2">
                    Years of Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 sm:px-4 py-3 sm:py-3 rounded-lg sm:rounded-xl border border-maroon-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all bg-white text-sm sm:text-base"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-maroon-700 mb-1.5 sm:mb-2">
                    Cover Letter / Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3.5 sm:px-4 py-3 sm:py-3 rounded-lg sm:rounded-xl border border-maroon-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all resize-none text-sm sm:text-base"
                    placeholder="Tell us about yourself and why you'd like to join JSM Consulting..."
                  />
                </div>

                {/* CV Upload Note */}
                <div className="flex items-start gap-2.5 sm:gap-3 p-3.5 sm:p-4 bg-maroon-50 rounded-lg sm:rounded-xl">
                  <Upload className="w-4 h-4 sm:w-5 sm:h-5 text-maroon-600 mt-0.5 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-maroon-700">
                    Please email your CV and supporting documents to{' '}
                    <a href="mailto:careers@jsmconsulting.co.zw" className="text-gold-600 font-medium hover:underline break-all">
                      careers@jsmconsulting.co.zw
                    </a>{' '}
                    referencing your application.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-maroon-900 text-white py-3.5 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-maroon-800 active:bg-maroon-900 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Main Careers Page Component
const Careers = () => {
  return (
    <>
      <SEOHead
        title="Careers | JSM Consulting - Join Our Team"
        description="Build your career with JSM Consulting, Zimbabwe's trusted chartered accountants. Explore current job openings in audit, tax, and accounting. Join our growing team."
        keywords="JSM Consulting careers, accounting jobs Zimbabwe, audit jobs Harare, chartered accountant vacancies, tax consultant jobs"
        canonical="/careers"
      />
      
      <main>
        <HeroSection />
        <WhyJoinSection />
        <OpenPositionsSection />
        <ApplicationSection />
      </main>
    </>
  )
}

export default Careers