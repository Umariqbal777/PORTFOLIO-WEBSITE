import SectionLink from './SectionLink.jsx'

export default function Footer() {
  return (
    <footer>
      <SectionLink id="hero" className="footer-logo">UMAR</SectionLink>
      <p>Designing for extraordinary people.</p>
      <div className="footer-links">
        <SectionLink id="about">About</SectionLink>
        <SectionLink id="work">Work</SectionLink>
        <SectionLink id="contact">Contact</SectionLink>
      </div>
    </footer>
  )
}
