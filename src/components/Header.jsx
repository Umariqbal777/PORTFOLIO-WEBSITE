import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SectionLink from './SectionLink.jsx'

const NAV = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience-education', 'Journey'],
  ['certifications', 'Certs'],
  ['work', 'Work'],
  ['contact', 'Contact'],
]

export default function Header({ light, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const onProjects = pathname === '/projects'

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  const links = (cls) =>
    NAV.map(([id, label]) =>
      id === 'work' && onProjects ? (
        <Link key={id} to="/projects" className="active" onClick={close}>{label}</Link>
      ) : (
        <SectionLink key={id} id={id} onClick={close}>{label}</SectionLink>
      )
    )

  return (
    <>
      <header id="header">
        <SectionLink id="hero" className="logo">UMAR</SectionLink>
        <nav aria-label="Main">{links()}</nav>
        <div className="header-actions">
          <button className="theme-btn" onClick={onToggleTheme} aria-label="Toggle theme">
            {light ? (
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
          <button className="mobile-btn" onClick={() => setOpen(true)} aria-label="Open menu">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </header>

      <div className={'mobile-nav' + (open ? ' open' : '')} aria-hidden={!open}>
        <button className="mobile-close" onClick={close} aria-label="Close menu">
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        {links()}
      </div>
    </>
  )
}
