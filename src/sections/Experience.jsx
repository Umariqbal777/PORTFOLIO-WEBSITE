import { useState } from 'react'
import StackSection from '../components/StackSection.jsx'
import Reveal from '../components/Reveal.jsx'
import { experience, education } from '../data/site.js'

export default function Experience() {
  const [tab, setTab] = useState('exp')
  const items = tab === 'exp' ? experience : education

  return (
    <StackSection id="experience-education">
      <div className="container">
        <p className="section-label" style={{ justifyContent: 'center' }}>My Journey</p>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Experience &amp; <span className="accent">Education</span></h2>
        <div className="tab-group" role="tablist">
          <button role="tab" aria-selected={tab === 'exp'} className={'tab-btn' + (tab === 'exp' ? ' active' : '')} onClick={() => setTab('exp')}>Experience</button>
          <button role="tab" aria-selected={tab === 'edu'} className={'tab-btn' + (tab === 'edu' ? ' active' : '')} onClick={() => setTab('edu')}>Education</button>
        </div>
        <div className="timeline" key={tab}>
          {items.map((it, i) => (
            <Reveal key={it.role} className="timeline-item" delay={i * 150}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <p className="timeline-meta">{it.meta}</p>
                <h3 className="timeline-role">{it.role}</h3>
                <p className="timeline-org">{it.org}</p>
                <p className="timeline-desc">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </StackSection>
  )
}
