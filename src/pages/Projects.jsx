import { useEffect, useMemo, useState, useCallback } from 'react'
import Reveal from '../components/Reveal.jsx'
import Modal from '../components/Modal.jsx'
import Footer from '../components/Footer.jsx'
import { allProjects } from '../data/allProjects.js'

const FILTERS = [
  ['all', 'All'],
  ['ml', 'Machine Learning'],
  ['ui', 'UI/UX Design'],
  ['web', 'Web Dev'],
  ['branding', 'Branding'],
]

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [modal, setModal] = useState(null)
  const close = useCallback(() => setModal(null), [])

  useEffect(() => {
    document.title = 'UMAR — Projects'
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const shown = useMemo(
    () => (filter === 'all' ? allProjects : allProjects.filter(p => p.category === filter)),
    [filter]
  )

  const open = p => setModal({
    category: p.detail.category,
    title: p.title,
    desc: p.detail.desc,
    stack: p.detail.stack,
    link: p.detail.link,
    linkLabel: p.detail.linkLabel,
  })

  return (
    <>
      <main>
        <div className="page-hero">
          <div className="page-hero-grid" />
          <div className="page-hero-content">
            <p className="page-eyebrow">All Work</p>
            <h1 className="page-title">Selected<br /><span className="outline">Projects</span></h1>
            <p className="page-subtitle">A collection of ML systems, automation tools, and UI/UX designs built with purpose and craft.</p>
          </div>
        </div>

        <div className="filter-bar">
          <div className="filter-inner">
            {FILTERS.map(([key, label]) => (
              <button key={key} className={'filter-btn' + (filter === key ? ' active' : '')} onClick={() => setFilter(key)}>{label}</button>
            ))}
          </div>
        </div>

        <section className="projects-section">
          <div className="projects-container">
            <p className="results-count">Showing <span>{shown.length}</span> project{shown.length === 1 ? '' : 's'}</p>
            <div className="projects-grid">
              {shown.map((p, i) => (
                <Reveal
                  key={p.id}
                  className="project-card"
                  delay={i * 60}
                  role="button"
                  tabIndex={0}
                  onClick={() => open(p)}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(p) } }}
                >
                  <div className="project-thumb">
                    <div className="project-thumb-bg" />
                    <span className="project-thumb-label">{p.thumb}</span>
                    <div className="project-overlay"><span>View Details</span></div>
                  </div>
                  <div className="project-body">
                    <div className="project-tags">{p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}</div>
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-desc">{p.short}</p>
                    <p className="project-category-label">{p.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Modal data={modal} onClose={close} />
    </>
  )
}
