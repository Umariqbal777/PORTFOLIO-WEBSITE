import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import StackSection from '../components/StackSection.jsx'
import Reveal from '../components/Reveal.jsx'
import Modal from '../components/Modal.jsx'
import { Arrow } from '../components/Icon.jsx'
import { featured } from '../data/site.js'

export default function Work() {
  const [modal, setModal] = useState(null)
  const close = useCallback(() => setModal(null), [])

  return (
    <StackSection id="work">
      <div className="container">
        <div className="wks-header">
          <div>
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">Recent <span className="accent">Projects</span></h2>
          </div>
          <Link to="/projects" className="view-all">View all <Arrow size={16} /></Link>
        </div>
        <div className="wks-grid">
          {featured.map((p, i) => (
            <Reveal
              key={p.title}
              className="wk-card"
              delay={i * 100}
              role="button"
              tabIndex={0}
              onClick={() => setModal({ title: p.title, desc: p.desc })}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setModal({ title: p.title, desc: p.desc }) } }}
            >
              <div className="wk-thumb">
                <span className="wk-thumb-label">{p.thumb}</span>
                <div className="wk-overlay"><span>View Details</span></div>
              </div>
              <div className="wk-body">
                <div className="wk-tags">{p.tags.map(t => <span key={t} className="wk-tag">{t}</span>)}</div>
                <h3 className="wk-title">{p.title}</h3>
                <p className="wk-desc">{p.short}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Modal data={modal} onClose={close} />
    </StackSection>
  )
}
