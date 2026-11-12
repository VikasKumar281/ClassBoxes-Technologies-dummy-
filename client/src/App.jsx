import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'
import SearchOverlay from './components/SearchOverlay'
import MessageWidget from './components/MessageWidget'

import Home from './pages/Home'
import About from './pages/About'
import FindJob from './pages/FindJob'
import FindTalent from './pages/FindTalent'
import TestSkills from './pages/TestSkills'
import ContactUs from './pages/ContactUs'
import Search from './pages/Search'
import NotFound from './pages/NotFound'

function AppRoutes() {
  const location = useLocation()
  const [searchOpen, setSearchOpen] = useState(false)
  const closeSearch = useCallback(() => setSearchOpen(false), [])

  useEffect(() => {
    closeSearch()
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      })
    }
  }, [location.pathname, location.search, closeSearch])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nodes = Array.from(document.querySelectorAll('main section'))
    if (reduced) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return undefined
    }
    nodes.forEach((node) => node.classList.add('reveal-section'))
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <>
      <Header onSearch={() => setSearchOpen(true)} />

      <PageLoader key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/find-a-job" element={<FindJob />} />
          <Route path="/find-talent" element={<FindTalent />} />
          <Route path="/test-your-skills" element={<TestSkills />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageLoader>

      <Footer />
      <SearchOverlay open={searchOpen} onClose={closeSearch} />
      <MessageWidget />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}