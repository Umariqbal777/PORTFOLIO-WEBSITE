import StackSection from '../components/StackSection.jsx'
import SectionLink from '../components/SectionLink.jsx'
import Icon, { Arrow } from '../components/Icon.jsx'
import { socials } from '../data/site.js'

export default function Hero() {
  return (
    <StackSection id="hero">
      <div className="hero-content">
        <h1 className="sr-only">Umar Iqbal — AI/ML Engineer and UI/UX Designer</h1>

        <div className="hero-side left">
          <span className="hero-tag">Umar Iqbal</span>
          <h2>designer</h2>
          <p>UI/UX Designer with a passion for crafting beautiful and functional user experiences.</p>
          <div className="hero-actions">
            <SectionLink id="work" className="btn-primary">View My Work <Arrow /></SectionLink>
          </div>
        </div>

        <div className="hero-portrait">
          <span className="code-float c2" aria-hidden="true">
            {'import tensorflow as tf\n'}<b>model</b>{'.fit(X, y)\n'}<b>{'<div class="ui">'}</b>
          </span>
          <span className="code-float c1" aria-hidden="true">
            {'<html>\n'}<b>Python</b>{' · PyTorch\nmodel.predict()\n'}<b>Figma</b>{' → Code'}
          </span>
          <img
            src="/umar-hero.webp"
            alt="Umar Iqbal — AI/ML Engineer and UI/UX Designer"
            width="1536"
            height="1024"
            fetchpriority="high"
            decoding="async"
          />
        </div>

        <div className="hero-side right">
          <h2>&lt;coder&gt;</h2>
          <p>AI/ML Engineer who builds intelligent systems with clean, elegant and efficient code.</p>
          <div className="hero-actions">
            <SectionLink id="contact" className="btn-secondary">Get In Touch</SectionLink>
          </div>
        </div>

        <div className="hero-socials">
          {socials.map(s => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
              <Icon name={s.icon} />
            </a>
          ))}
        </div>
      </div>
      <div className="hero-scroll"><span>Scroll</span><div className="scroll-line" /></div>
    </StackSection>
  )
}
