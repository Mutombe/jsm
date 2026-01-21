import { useEffect } from 'react'

const SEOHead = ({ 
  title = 'JSM Consulting | Chartered Accountants Zimbabwe',
  description = 'JSM Consulting, Chartered Accountants Zimbabwe, established in 2001. We provide audit, bookkeeping, tax advisory, corporate finance, and business consulting services.',
  keywords = 'chartered accountants zimbabwe, audit services harare, tax advisory zimbabwe',
  canonical = '',
  ogImage = '/og-image.jpg',
  ogType = 'website',
  structuredData = null
}) => {
  useEffect(() => {
    // Update document title
    document.title = title

    // Update meta tags
    const updateMeta = (name, content, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let element = document.querySelector(selector)
      if (element) {
        element.setAttribute('content', content)
      } else {
        element = document.createElement('meta')
        element.setAttribute(isProperty ? 'property' : 'name', name)
        element.setAttribute('content', content)
        document.head.appendChild(element)
      }
    }

    // Primary meta tags
    updateMeta('description', description)
    updateMeta('keywords', keywords)

    // Open Graph
    updateMeta('og:title', title, true)
    updateMeta('og:description', description, true)
    updateMeta('og:type', ogType, true)
    updateMeta('og:image', ogImage, true)
    if (canonical) {
      updateMeta('og:url', canonical, true)
    }

    // Twitter
    updateMeta('twitter:title', title, true)
    updateMeta('twitter:description', description, true)
    updateMeta('twitter:image', ogImage, true)

    // Canonical URL
    let canonicalEl = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      if (canonicalEl) {
        canonicalEl.setAttribute('href', canonical)
      } else {
        canonicalEl = document.createElement('link')
        canonicalEl.setAttribute('rel', 'canonical')
        canonicalEl.setAttribute('href', canonical)
        document.head.appendChild(canonicalEl)
      }
    }

    // Structured Data
    if (structuredData) {
      let scriptEl = document.querySelector('script[data-page-schema]')
      if (scriptEl) {
        scriptEl.textContent = JSON.stringify(structuredData)
      } else {
        scriptEl = document.createElement('script')
        scriptEl.setAttribute('type', 'application/ld+json')
        scriptEl.setAttribute('data-page-schema', 'true')
        scriptEl.textContent = JSON.stringify(structuredData)
        document.head.appendChild(scriptEl)
      }
    }

    return () => {
      // Cleanup page-specific schema on unmount
      const pageSchema = document.querySelector('script[data-page-schema]')
      if (pageSchema) {
        pageSchema.remove()
      }
    }
  }, [title, description, keywords, canonical, ogImage, ogType, structuredData])

  return null
}

export default SEOHead
