import React, { useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { 
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  FileSearch,
  Calculator,
  Briefcase,
  TrendingUp,
  Landmark,
  Sprout,
  Phone,
  Mail,
  Clock,
  Users,
  Award
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

// Service Data with images
const servicesData = {
  'audit-assurance': {
    icon: <FileSearch className="w-10 h-10" />,
    title: 'Audit & Assurance',
    subtitle: 'Comprehensive audit services that build trust and ensure compliance',
    description: 'Our audit and assurance services provide stakeholders with confidence in the accuracy and reliability of financial information. We conduct thorough, independent examinations that meet the highest professional standards.',
    heroImage: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026&auto=format&fit=crop',
    features: [
      {
        title: 'Statutory Audits',
        description: 'Independent examination of financial statements in accordance with International Standards on Auditing (ISA) and Companies Act requirements.'
      },
      {
        title: 'Compliance Audits',
        description: 'Assessment of adherence to regulatory requirements, internal policies, and industry standards.'
      },
      {
        title: 'Investigative Audits',
        description: 'Specialised examinations to detect fraud, misconduct, or irregularities within organisations.'
      },
      {
        title: 'Internal Audit Support',
        description: 'Assistance in establishing and strengthening internal audit functions and controls.'
      }
    ],
    benefits: [
      'Enhanced stakeholder confidence',
      'Improved financial reporting accuracy',
      'Identification of control weaknesses',
      'Regulatory compliance assurance',
      'Risk mitigation insights',
      'Operational efficiency recommendations'
    ],
    process: [
      { step: 'Planning', description: 'Understanding your business and assessing risks' },
      { step: 'Fieldwork', description: 'Gathering evidence and testing controls' },
      { step: 'Reporting', description: 'Communicating findings and recommendations' },
      { step: 'Follow-up', description: 'Supporting implementation of improvements' }
    ]
  },
  'tax-advisory': {
    icon: <Landmark className="w-10 h-10" />,
    title: 'Tax Advisory',
    subtitle: 'Strategic tax planning for optimal financial outcomes',
    description: 'Our tax advisory services help organisations navigate complex tax legislation, minimise liabilities, and ensure compliance. We provide proactive planning strategies tailored to your business objectives.',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop',
    features: [
      {
        title: 'Tax Planning',
        description: 'Strategic structuring of transactions and operations to optimise tax positions within legal frameworks.'
      },
      {
        title: 'Compliance Services',
        description: 'Preparation and submission of all statutory tax returns including corporate tax, VAT, and PAYE.'
      },
      {
        title: 'Tax Dispute Resolution',
        description: 'Representation and negotiation with tax authorities on assessments, audits, and appeals.'
      },
      {
        title: 'Transfer Pricing',
        description: 'Documentation and structuring of intercompany transactions to meet regulatory requirements.'
      }
    ],
    benefits: [
      'Optimised tax positions',
      'Reduced compliance risks',
      'Timely statutory submissions',
      'Expert representation in disputes',
      'Strategic tax planning',
      'Cash flow improvements'
    ],
    process: [
      { step: 'Assessment', description: 'Review of current tax position and exposure' },
      { step: 'Strategy', description: 'Development of tax-efficient structures' },
      { step: 'Implementation', description: 'Execution of planning strategies' },
      { step: 'Monitoring', description: 'Ongoing compliance and optimisation' }
    ]
  },
  'business-advisory': {
    icon: <Briefcase className="w-10 h-10" />,
    title: 'Business Advisory',
    subtitle: 'Strategic guidance to drive growth and performance',
    description: 'Our business advisory services provide expert guidance on strategy, operations, and management to help organisations achieve their goals and overcome challenges.',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    features: [
      {
        title: 'Strategic Planning',
        description: 'Development of comprehensive business strategies aligned with market conditions and organisational objectives.'
      },
      {
        title: 'Operational Improvement',
        description: 'Analysis and optimisation of business processes to enhance efficiency and reduce costs.'
      },
      {
        title: 'Performance Reviews',
        description: 'Comprehensive assessment of business performance with actionable recommendations.'
      },
      {
        title: 'Restructuring & Turnaround',
        description: 'Expert guidance for organisations facing financial or operational challenges.'
      }
    ],
    benefits: [
      'Clear strategic direction',
      'Improved operational efficiency',
      'Enhanced profitability',
      'Better decision-making frameworks',
      'Risk identification and mitigation',
      'Sustainable growth strategies'
    ],
    process: [
      { step: 'Discovery', description: 'Understanding your business challenges and goals' },
      { step: 'Analysis', description: 'In-depth examination of operations and market position' },
      { step: 'Recommendations', description: 'Tailored solutions and action plans' },
      { step: 'Support', description: 'Implementation assistance and monitoring' }
    ]
  },
  'corporate-finance': {
    icon: <TrendingUp className="w-10 h-10" />,
    title: 'Corporate Finance',
    subtitle: 'Expert guidance for critical financial decisions',
    description: 'Our corporate finance services support organisations through major financial transactions and strategic decisions, providing expert analysis and guidance throughout the process.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    features: [
      {
        title: 'Capital Raising',
        description: 'Assistance in securing debt or equity financing from banks, investors, or development finance institutions.'
      },
      {
        title: 'Business Valuations',
        description: 'Independent valuations for transactions, disputes, financial reporting, or strategic planning purposes.'
      },
      {
        title: 'Due Diligence',
        description: 'Comprehensive financial and operational investigations for mergers, acquisitions, or investments.'
      },
      {
        title: 'Transaction Advisory',
        description: 'End-to-end support for mergers, acquisitions, disposals, and corporate restructuring.'
      }
    ],
    benefits: [
      'Optimal transaction structures',
      'Accurate business valuations',
      'Risk identification',
      'Negotiation support',
      'Regulatory compliance',
      'Stakeholder confidence'
    ],
    process: [
      { step: 'Engagement', description: 'Understanding transaction objectives' },
      { step: 'Analysis', description: 'Financial modelling and due diligence' },
      { step: 'Negotiation', description: 'Supporting deal structuring and terms' },
      { step: 'Completion', description: 'Finalising documentation and closing' }
    ]
  },
  'bookkeeping': {
    icon: <Calculator className="w-10 h-10" />,
    title: 'Bookkeeping & Accounting',
    subtitle: 'Reliable financial record-keeping for informed decisions',
    description: 'Our bookkeeping and accounting services ensure accurate, timely financial records that support business decision-making and regulatory compliance.',
    heroImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop',
    features: [
      {
        title: 'Monthly Bookkeeping',
        description: 'Regular processing of transactions, reconciliations, and preparation of management accounts.'
      },
      {
        title: 'Financial Statements',
        description: 'Preparation of annual financial statements in compliance with accounting standards.'
      },
      {
        title: 'Management Reporting',
        description: 'Customised reports providing insights into business performance and trends.'
      },
      {
        title: 'Cash Flow Management',
        description: 'Monitoring and forecasting of cash flows to support liquidity planning.'
      }
    ],
    benefits: [
      'Accurate financial records',
      'Timely management information',
      'Regulatory compliance',
      'Cost-effective solutions',
      'Scalable services',
      'Expert support'
    ],
    process: [
      { step: 'Setup', description: 'Establishing systems and processes' },
      { step: 'Processing', description: 'Regular transaction recording' },
      { step: 'Reconciliation', description: 'Ensuring accuracy and completeness' },
      { step: 'Reporting', description: 'Delivering meaningful financial information' }
    ]
  },
  'agri-accounting': {
    icon: <Sprout className="w-10 h-10" />,
    title: 'Agri-Accounting',
    subtitle: 'Specialised financial services for the agricultural sector',
    description: 'Our agri-accounting services are specifically designed for agricultural enterprises, addressing the unique accounting challenges of crop and livestock farming.',
    heroImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop',
    features: [
      {
        title: 'Farm Accounting',
        description: 'Comprehensive financial management for agricultural operations including cost tracking and profitability analysis.'
      },
      {
        title: 'Crop Costing',
        description: 'Detailed analysis of production costs per crop, season, and hectare for informed decision-making.'
      },
      {
        title: 'Livestock Accounting',
        description: 'Specialised record-keeping and valuation for livestock operations.'
      },
      {
        title: 'Agricultural Proposals',
        description: 'Preparation of business plans and financing proposals for agricultural projects.'
      }
    ],
    benefits: [
      'Industry-specific expertise',
      'Accurate cost tracking',
      'Improved profitability analysis',
      'Financing support',
      'Compliance with agricultural regulations',
      'Strategic planning assistance'
    ],
    process: [
      { step: 'Assessment', description: 'Understanding your farming operations' },
      { step: 'Implementation', description: 'Setting up appropriate accounting systems' },
      { step: 'Recording', description: 'Capturing all agricultural transactions' },
      { step: 'Analysis', description: 'Providing actionable insights' }
    ]
  }
}

const ServiceDetail = () => {
  const { slug } = useParams()
  const service = servicesData[slug]
  const ref = useRef(null)
  const heroRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Redirect to services if service not found
  if (!service) {
    return <Navigate to="/services" replace />
  }

  return (
    <>
      <SEOHead 
        title={`${service.title} | JSM Consulting Zimbabwe`}
        description={service.description}
        keywords={`${service.title.toLowerCase()}, ${slug.replace('-', ' ')}, zimbabwe, harare, chartered accountants`}
        canonical={`https://jsmconsulting.co.zw/services/${slug}`}
      />
      
      <main>
        {/* Hero Section with Blended Background Image */}
        <section ref={heroRef} className="relative min-h-[80vh] flex items-center overflow-hidden">
          {/* Background Image with Parallax */}
          <motion.div 
            style={{ y }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={service.heroImage}
              alt=""
              className="w-full h-full object-cover"
            />
            {/* Multi-layer gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-950/90 to-maroon-950/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-transparent to-maroon-950/50" />
          </motion.div>

          {/* Animated Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-3xl z-[1]" 
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              style={{ opacity }}
            >
              <motion.div variants={fadeInUp}>
                <Link 
                  to="/services"
                  className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors mb-8 group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Services
                </Link>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.div 
                    variants={fadeInUp}
                    className="w-20 h-20 rounded-2xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-6 border border-gold-500/30"
                  >
                    {service.icon}
                  </motion.div>

                  <motion.h1 
                    variants={fadeInUp}
                    className="font-display text-5xl md:text-6xl text-white leading-tight mb-4"
                  >
                    {service.title}
                  </motion.h1>

                  <motion.p 
                    variants={fadeInUp}
                    className="text-xl text-gold-400 mb-6"
                  >
                    {service.subtitle}
                  </motion.p>

                  <motion.div variants={fadeInUp} className="h-1 w-24 bg-gold-500 mb-6" />

                  <motion.p 
                    variants={fadeInUp}
                    className="text-lg text-maroon-200 leading-relaxed mb-8"
                  >
                    {service.description}
                  </motion.p>

                  {/* Quick Stats */}
                  <motion.div 
                    variants={fadeInUp}
                    className="flex flex-wrap gap-6"
                  >
                    {[
                      { icon: <Clock className="w-5 h-5" />, label: '20+ Years', sublabel: 'Experience' },
                      { icon: <Users className="w-5 h-5" />, label: '500+', sublabel: 'Clients' },
                      { icon: <Award className="w-5 h-5" />, label: '100%', sublabel: 'Commitment' }
                    ].map((stat, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-400">
                          {stat.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-white">{stat.label}</p>
                          <p className="text-xs text-maroon-300">{stat.sublabel}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                <motion.div 
                  variants={fadeInUp}
                  className="hidden lg:block"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <h3 className="font-heading font-semibold text-white text-xl mb-6">Quick Contact</h3>
                    <div className="space-y-4 mb-8">
                      <a 
                        href="tel:+263712407700"
                        className="flex items-center gap-3 text-maroon-200 hover:text-gold-400 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                          <Phone className="w-5 h-5 text-gold-500" />
                        </div>
                        +263 712 407 700
                      </a>
                      <a 
                        href="mailto:office@jsmconsulting.co.zw"
                        className="flex items-center gap-3 text-maroon-200 hover:text-gold-400 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                          <Mail className="w-5 h-5 text-gold-500" />
                        </div>
                        office@jsmconsulting.co.zw
                      </a>
                    </div>
                    <Link
                      to="/contact"
                      className="group block w-full px-6 py-4 bg-gold-500 text-maroon-900 font-semibold text-center rounded hover:bg-gold-400 transition-all"
                    >
                      Request a Consultation
                      <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
            >
              <motion.div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section ref={ref} className="py-24 bg-white relative overflow-hidden">
          {/* Subtle Background */}
          <div className="absolute inset-0 opacity-[0.02]">
            <img 
              src={service.heroImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-16">
                <span className="text-gold-600 font-medium tracking-wider uppercase text-sm">What We Offer</span>
                <h2 className="font-display text-4xl text-maroon-900 mt-4 mb-4">Service Features</h2>
                <div className="h-1 w-20 bg-gold-500" />
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="bg-maroon-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-transparent hover:border-gold-200"
                  >
                    <div className="w-12 h-12 rounded-xl bg-maroon-900 text-gold-400 flex items-center justify-center mb-4">
                      <span className="font-display text-xl font-bold">{index + 1}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-maroon-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-maroon-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-maroon-950 relative overflow-hidden">
          {/* Background Image - Subtle */}
          <div className="absolute inset-0 opacity-10">
            <img 
              src={service.heroImage}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-maroon-950/50" />
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
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <span className="text-gold-400 font-medium tracking-wider uppercase text-sm">Our Approach</span>
                <h2 className="font-display text-4xl text-white mt-4 mb-4">How We Work</h2>
                <div className="h-1 w-20 bg-gold-500 mx-auto" />
              </motion.div>

              <div className="grid md:grid-cols-4 gap-6">
                {service.process.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    className="relative"
                  >
                    {index < service.process.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-maroon-800">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                          viewport={{ once: true }}
                          className="absolute left-0 top-0 h-full bg-gold-500"
                        />
                      </div>
                    )}
                    <div className="relative bg-maroon-900/50 backdrop-blur-sm border border-maroon-800 rounded-xl p-6 text-center hover:border-gold-500/30 transition-all">
                      <div className="w-16 h-16 rounded-full bg-gold-500 text-maroon-900 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-gold-500/25">
                        <span className="font-display text-2xl font-bold">{index + 1}</span>
                      </div>
                      <h3 className="font-heading font-semibold text-white mb-2">{step.step}</h3>
                      <p className="text-sm text-maroon-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gradient-to-b from-white to-maroon-50 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-gold-500/5 to-transparent" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div variants={fadeInUp}>
                  <span className="text-gold-600 font-medium tracking-wider uppercase text-sm">Why Choose Us</span>
                  <h2 className="font-display text-4xl text-maroon-900 mt-4 mb-4">Key Benefits</h2>
                  <div className="h-1 w-20 bg-gold-500 mb-6" />
                  <p className="text-maroon-600 leading-relaxed mb-8">
                    Partner with JSM Consulting for {service.title.toLowerCase()} services and experience 
                    the difference that expert guidance and dedicated support can make for your organisation.
                  </p>

                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white font-semibold">{service.title}</p>
                      <p className="text-maroon-200 text-sm">Expert Services</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, index) => (
                      <motion.div 
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-maroon-100"
                      >
                        <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-maroon-900" />
                        </div>
                        <span className="text-maroon-700 font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
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

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                variants={fadeInUp}
                className="font-display text-4xl md:text-5xl text-white mb-6"
              >
                Ready to Get Started?
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-maroon-200 mb-10 max-w-2xl mx-auto"
              >
                Contact us today to discuss how our {service.title.toLowerCase()} services 
                can benefit your organisation.
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-maroon-950 font-semibold rounded hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/25"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  View All Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ServiceDetail