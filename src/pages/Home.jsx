import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../sections/Hero.jsx'
import About from '../sections/About.jsx'
import Skills from '../sections/Skills.jsx'
import Experience from '../sections/Experience.jsx'
import Certifications from '../sections/Certifications.jsx'
import Work from '../sections/Work.jsx'
import Contact from '../sections/Contact.jsx'
import useStack from '../hooks/useStack.js'
import { scrollToSection } from '../utils/scroll.js'

const TITLE = 'Umar Iqbal | AI/ML Engineer & UI/UX Designer'

export default function Home() {
  const mainRef = useRef(null)
  const firstRun = useRef(true)
  const { hash, key } = useLocation()
  useStack(mainRef)

  useEffect(() => { document.title = TITLE }, [])

  // /#about etc: jump (first load / coming from /projects) or smooth-scroll (clicks on this page)
  useEffect(() => {
    const id = hash.slice(1)
    const behavior = firstRun.current ? 'instant' : 'smooth'
    firstRun.current = false
    let r2 = 0
    const r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(() => {
        if (id) scrollToSection(id, behavior)
        else window.scrollTo({ top: 0, behavior })
      })
    })
    return () => { cancelAnimationFrame(r1); cancelAnimationFrame(r2) }
  }, [hash, key])

  return (
    <main className="stack" ref={mainRef}>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Work />
      <Contact />
    </main>
  )
}
