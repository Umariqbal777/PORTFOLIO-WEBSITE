import StackSection from '../components/StackSection.jsx'
import Reveal from '../components/Reveal.jsx'
import { skills } from '../data/site.js'

export default function Skills() {
  return (
    <StackSection id="skills">
      <div className="container">
        <div className="skills-header">
          <div>
            <p className="section-label">Toolbox</p>
            <h2 className="section-title">Skills &amp; <span className="accent">Tech</span></h2>
          </div>
        </div>
        <div className="skills-grid">
          {skills.map(([name, src], i) => (
            <Reveal key={name} className="skill-card" delay={i * 50}>
              <img src={src} alt={name} width="44" height="44" loading="lazy" decoding="async" />
              <span>{name}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </StackSection>
  )
}
