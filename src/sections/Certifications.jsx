import StackSection from '../components/StackSection.jsx'
import Reveal from '../components/Reveal.jsx'
import { certs } from '../data/site.js'

export default function Certifications() {
  return (
    <StackSection id="certifications">
      <div className="container">
        <p className="section-label">Credentials</p>
        <h2 className="section-title">Certifications &amp; <span className="accent">Awards</span></h2>
        <div className="certs-grid">
          {certs.map((c, i) => (
            <Reveal
              key={c.file}
              as="a"
              className="cert-card"
              delay={i * 80}
              href={`/certificates/${c.file}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cert-img"><span className="cert-issuer-logo">{c.logo}</span></div>
              <div className="cert-body">
                <p className="cert-name">{c.name}</p>
                <p className="cert-issuer">{c.issuer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </StackSection>
  )
}
