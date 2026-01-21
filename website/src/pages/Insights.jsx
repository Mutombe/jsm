import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  Tag,
  Search,
  ChevronRight,
  TrendingUp,
  FileText,
  BookOpen,
  Newspaper,
  Filter,
  ArrowUpRight,
  Quote,
  Play,
  Download,
  Share2,
  Bookmark
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}

// Featured Article Data
const featuredArticle = {
  id: 1,
  title: 'Navigating Zimbabwe\'s New Tax Legislation: What Businesses Need to Know in 2024',
  excerpt: 'A comprehensive guide to understanding the latest changes in Zimbabwe\'s tax framework and how they impact your business operations, compliance requirements, and financial planning strategies.',
  category: 'Tax Advisory',
  author: 'Janet Mutasa',
  authorRole: 'Managing Partner',
  date: '15 January 2024',
  readTime: '12 min read',
  image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop',
  tags: ['Tax', 'Compliance', 'Zimbabwe', 'Legislation']
}

// Articles Data with images
const articles = [
  {
    id: 2,
    title: 'Agricultural Accounting Best Practices for Zimbabwe\'s Farming Sector',
    excerpt: 'Essential financial management strategies for crop and livestock farmers, including seasonal cash flow planning and grant compliance.',
    category: 'Agri-Accounting',
    author: 'Noel Mutasa',
    date: '10 January 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop',
    tags: ['Agriculture', 'Accounting', 'Farming']
  },
  {
    id: 3,
    title: 'Corporate Governance Trends: Building Resilient Boardrooms',
    excerpt: 'Exploring the evolving landscape of corporate governance and how Zimbabwean companies can strengthen their board effectiveness.',
    category: 'Business Advisory',
    author: 'Janet Mutasa',
    date: '5 January 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    tags: ['Governance', 'Board', 'Leadership']
  },
  {
    id: 4,
    title: 'Due Diligence Essentials: Protecting Your Investment Decisions',
    excerpt: 'A step-by-step framework for conducting thorough due diligence before mergers, acquisitions, or significant business investments.',
    category: 'Corporate Finance',
    author: 'Noel Mutasa',
    date: '28 December 2023',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    tags: ['Due Diligence', 'M&A', 'Investment']
  },
  {
    id: 5,
    title: 'Streamlining Your Bookkeeping: Digital Transformation Strategies',
    excerpt: 'How modern accounting software and digital tools can revolutionise your financial record-keeping and reporting processes.',
    category: 'Bookkeeping',
    author: 'Beauty Hwindizi',
    date: '20 December 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop',
    tags: ['Digital', 'Technology', 'Efficiency']
  },
  {
    id: 6,
    title: 'Business Valuation Methods: Choosing the Right Approach',
    excerpt: 'Understanding different valuation methodologies and when to apply each for accurate business worth assessment.',
    category: 'Corporate Finance',
    author: 'Noel Mutasa',
    date: '15 December 2023',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
    tags: ['Valuation', 'Finance', 'Strategy']
  }
]

// Categories
const categories = [
  { name: 'All', count: 24 },
  { name: 'Tax Advisory', count: 8 },
  { name: 'Audit & Assurance', count: 5 },
  { name: 'Business Advisory', count: 6 },
  { name: 'Corporate Finance', count: 3 },
  { name: 'Agri-Accounting', count: 2 }
]

// Industry Reports
const reports = [
  {
    title: 'Zimbabwe Economic Outlook 2024',
    description: 'Comprehensive analysis of economic trends and forecasts',
    pages: 45,
    downloads: 1250
  },
  {
    title: 'SME Financial Health Guide',
    description: 'Essential metrics and benchmarks for small businesses',
    pages: 28,
    downloads: 890
  },
  {
    title: 'Agricultural Sector Report Q4',
    description: 'Quarterly review of farming sector performance',
    pages: 32,
    downloads: 650
  }
]

// Thought Leadership Quotes
const thoughtLeadership = [
  {
    quote: "In today's volatile economic environment, proactive financial planning isn't just advisable—it's essential for survival and growth.",
    author: 'Janet Mutasa',
    role: 'Managing Partner',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
  },
  {
    quote: "The best investment any business can make is in robust financial systems and governance frameworks.",
    author: 'Noel Mutasa',
    role: 'Corporate Finance Partner',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop'
  }
]

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <SEOHead
        title="Insights & Resources | JSM Consulting"
        description="Expert insights, thought leadership, and resources on accounting, tax, audit, and business advisory from JSM Consulting's experienced team."
        keywords="business insights, tax advice Zimbabwe, accounting resources, financial planning, audit guidance"
      />

      {/* Hero Section with Blended Background Image */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Multi-layer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/95 to-maroon-950/80" />
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
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gold-400/10 rounded-full blur-3xl z-[1]" 
        />

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] z-[1]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 165, 55, 0.5) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating Publication Elements */}
        <motion.div
          className="absolute top-32 right-[15%] hidden lg:block z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <FileText className="w-8 h-8 text-gold-400 mb-3" />
            <p className="text-white font-semibold">24+ Articles</p>
            <p className="text-white/60 text-sm">Published this year</p>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-40 right-[10%] hidden lg:block z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Download className="w-8 h-8 text-gold-400 mb-3" />
            <p className="text-white font-semibold">Free Resources</p>
            <p className="text-white/60 text-sm">Guides & reports</p>
          </div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ opacity }}
            >
              <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                <BookOpen className="w-4 h-4 text-gold-400" />
                <span className="text-gold-400 text-sm font-medium tracking-wide">Knowledge Hub</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
                Insights &
                <span className="block relative">
                  <span className="text-gradient">Perspectives</span>
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-1 bg-gold-500/50"
                  />
                </span>
              </h1>

              <p className="text-xl text-maroon-200 mb-10 leading-relaxed max-w-xl">
                Expert analysis, thought leadership, and practical guidance from Zimbabwe's trusted 
                chartered accountants. Stay informed, stay ahead.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-maroon-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                />
              </div>
            </motion.div>

            {/* Right - Featured Article Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-500 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-maroon-900/40 to-transparent" />
                  <span className="absolute top-4 left-4 bg-gold-500 text-maroon-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
                <div className="p-8">
                  <span className="inline-block bg-maroon-100 text-maroon-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {featuredArticle.category}
                  </span>
                  <h3 className="font-display text-2xl text-maroon-900 mb-3 leading-tight group-hover:text-gold-600 transition-colors">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-maroon-600 mb-6 line-clamp-2">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-maroon-100 flex items-center justify-center">
                        <User className="w-5 h-5 text-maroon-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-maroon-900">{featuredArticle.author}</p>
                        <p className="text-xs text-maroon-500">{featuredArticle.readTime}</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-700 transition-colors group">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-400/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
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

      {/* Category Filter Bar */}
      <section className="py-8 bg-white border-b border-maroon-100 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <Filter className="w-5 h-5 text-maroon-400 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.name
                    ? 'bg-maroon-700 text-white shadow-lg'
                    : 'bg-maroon-50 text-maroon-600 hover:bg-maroon-100'
                }`}
              >
                {category.name}
                <span className={`text-xs ${
                  activeCategory === category.name ? 'text-white/70' : 'text-maroon-400'
                }`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-maroon-50/30 relative overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Articles Grid - Left 2 Columns */}
              <div className="lg:col-span-2">
                <motion.div variants={fadeInUp} className="flex items-center justify-between mb-8">
                  <h2 className="font-display text-3xl text-maroon-900">Latest Articles</h2>
                  <span className="text-maroon-500">{filteredArticles.length} articles</span>
                </motion.div>

                <div className="space-y-8">
                  {filteredArticles.map((article, index) => (
                    <motion.article
                      key={article.id}
                      variants={fadeInUp}
                      whileHover={{ y: -5 }}
                      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-maroon-100"
                    >
                      <div className="grid md:grid-cols-5 gap-0">
                        <div className="md:col-span-2 relative h-48 md:h-full overflow-hidden">
                          <img 
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                            {article.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="md:col-span-3 p-6 md:p-8">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-xs font-semibold">
                              {article.category}
                            </span>
                            <span className="text-maroon-400 text-sm flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {article.readTime}
                            </span>
                          </div>
                          <h3 className="font-display text-xl md:text-2xl text-maroon-900 mb-3 group-hover:text-gold-600 transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-maroon-600 mb-6 line-clamp-2">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-maroon-100 flex items-center justify-center">
                                <User className="w-4 h-4 text-maroon-600" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-maroon-900">{article.author}</p>
                                <p className="text-xs text-maroon-400">{article.date}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <button className="p-2 text-maroon-400 hover:text-gold-500 transition-colors">
                                <Bookmark className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-maroon-400 hover:text-gold-500 transition-colors">
                                <Share2 className="w-4 h-4" />
                              </button>
                              <button className="flex items-center gap-1 text-gold-600 font-semibold text-sm hover:text-gold-700 transition-colors">
                                Read
                                <ArrowUpRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {/* Load More */}
                <motion.div variants={fadeInUp} className="text-center mt-12">
                  <button className="inline-flex items-center gap-2 px-8 py-4 bg-maroon-700 text-white rounded-xl font-semibold hover:bg-maroon-800 transition-all hover:shadow-lg">
                    Load More Articles
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </div>

              {/* Sidebar - Right Column */}
              <div className="space-y-8">
                {/* Newsletter Signup */}
                <motion.div
                  variants={fadeInUp}
                  className="relative rounded-2xl overflow-hidden"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-maroon-900/95 to-maroon-950/95" />
                  </div>
                  
                  <div className="relative p-8 text-white">
                    <Newspaper className="w-10 h-10 text-gold-400 mb-4" />
                    <h3 className="font-display text-2xl mb-3">Stay Informed</h3>
                    <p className="text-white/70 mb-6 text-sm">
                      Subscribe to our newsletter for the latest insights delivered to your inbox.
                    </p>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 mb-3 focus:outline-none focus:ring-2 focus:ring-gold-400"
                    />
                    <button className="w-full py-3 bg-gold-500 text-maroon-900 rounded-lg font-semibold hover:bg-gold-400 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </motion.div>

                {/* Downloadable Reports */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 border border-maroon-100 shadow-sm"
                >
                  <h3 className="font-display text-xl text-maroon-900 mb-6 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-gold-500" />
                    Free Reports
                  </h3>
                  <div className="space-y-4">
                    {reports.map((report, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        className="group p-4 rounded-xl bg-maroon-50 hover:bg-maroon-100 transition-all cursor-pointer"
                      >
                        <h4 className="font-semibold text-maroon-900 mb-1 group-hover:text-gold-600 transition-colors">
                          {report.title}
                        </h4>
                        <p className="text-sm text-maroon-500 mb-2">{report.description}</p>
                        <div className="flex items-center justify-between text-xs text-maroon-400">
                          <span>{report.pages} pages</span>
                          <span className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            {report.downloads}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Trending Topics */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 border border-maroon-100 shadow-sm"
                >
                  <h3 className="font-display text-xl text-maroon-900 mb-6 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-gold-500" />
                    Trending Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Tax Planning', 'ZIMRA Compliance', 'SME Growth', 'Agri-Finance', 'Due Diligence', 'Business Valuation', 'Audit', 'Corporate Governance'].map((topic) => (
                      <motion.span
                        key={topic}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-2 bg-maroon-50 text-maroon-600 rounded-lg text-sm hover:bg-maroon-100 cursor-pointer transition-colors"
                      >
                        {topic}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Thought Leadership Section with Background Image */}
      <section className="py-24 relative overflow-hidden">
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
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="inline-block text-gold-400 text-sm font-semibold tracking-widest uppercase mb-4">
                Thought Leadership
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
                Perspectives from Our Partners
              </h2>
              <div className="h-1 w-20 bg-gold-500 mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {thoughtLeadership.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 hover:bg-white/10 hover:border-gold-500/30 transition-all"
                >
                  <Quote className="w-12 h-12 text-gold-400 mb-6" />
                  <p className="text-xl text-white leading-relaxed mb-8">
                    "{item.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold-500/30">
                      <img 
                        src={item.image}
                        alt={item.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{item.author}</p>
                      <p className="text-gold-400 text-sm">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Video Resources Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-gold-500/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeInLeft}>
                <span className="inline-block text-gold-600 text-sm font-semibold tracking-widest uppercase mb-4">
                  Webinars & Videos
                </span>
                <h2 className="font-display text-4xl md:text-5xl text-maroon-900 mb-6">
                  Learn from Our Experts
                </h2>
                <div className="h-1 w-20 bg-gold-500 mb-6" />
                <p className="text-lg text-maroon-600 mb-8">
                  Access our library of educational webinars, workshops, and video content covering 
                  essential business and finance topics for Zimbabwe's evolving market.
                </p>
                <div className="space-y-4 mb-8">
                  {['Monthly Tax Update Webinars', 'Business Growth Masterclasses', 'Financial Literacy Workshops', 'Industry-Specific Seminars'].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center">
                        <Play className="w-4 h-4 text-gold-600" />
                      </div>
                      <span className="text-maroon-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-maroon-700 text-white rounded-xl font-semibold hover:bg-maroon-800 transition-all"
                >
                  Access Video Library
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                    alt="Webinar preview"
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-maroon-900/40 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 rounded-full bg-gold-500 flex items-center justify-center shadow-xl"
                    >
                      <Play className="w-8 h-8 text-maroon-900 ml-1" />
                    </motion.button>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-semibold text-lg">Latest Webinar</p>
                    <p className="text-white/70 text-sm">Tax Planning Strategies for 2024</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-400/20 rounded-full blur-2xl" />
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-maroon-400/20 rounded-full blur-2xl" />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gold-500/95 via-gold-500/90 to-gold-400/95" />
        </div>

        {/* Decorative Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-maroon-900/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <motion.div variants={fadeInUp}>
              <h2 className="font-display text-4xl md:text-5xl text-maroon-900 mb-6">
                Have Questions About Your Business?
              </h2>
              <p className="text-xl text-maroon-800 mb-10 max-w-2xl mx-auto">
                Our team of chartered accountants is ready to provide personalised guidance 
                for your unique business challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-maroon-800 text-white rounded font-semibold hover:bg-maroon-900 transition-all shadow-lg"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-maroon-800 rounded font-semibold hover:bg-maroon-50 transition-all shadow-lg"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}