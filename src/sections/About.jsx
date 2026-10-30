import StackSection from '../components/StackSection.jsx'
import Icon from '../components/Icon.jsx'
import { aboutLinks, stats, focus } from '../data/site.js'

export default function About() {
  return (
    <StackSection id="about">
      <div className="container">
        <div className="about-grid">
          <div>
            <span className="hero-tag">Who I Am</span>
            <h2 className="about-title">Building <span className="accent">intelligent</span> &amp; beautiful experiences</h2>
            <div className="about-text">
              <p>I'm Umar Iqbal, a B.Tech student specializing in Python, JavaScript, Machine Learning and Data Analysis. I combine technical depth with UI/UX design to build solutions that are both intelligent and user-friendly.</p>
              <p>I've built projects like Anemia Detection, deploying predictive models with Logistic Regression, Random Forest and Gradient Boosting. My industry exposure includes a Machine Learning virtual internship with SmartBridge &amp; Google for Developers and a UI/UX internship at Grootz.</p>
            </div>
            <div className="about-links">
              {aboutLinks.map(l => (
                <a key={l.name} href={l.href} target="_blank" rel="noopener noreferrer" className="about-link">
                  <Icon name={l.icon} size={14} />{l.name}
                </a>
              ))}
            </div>
          </div>
          <div className="about-side">
            <div className="about-stats">
              {stats.map(([num, label]) => (
                <div key={label} className="stat-card">
                  <div className="stat-num">{num}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
            <div className="about-focus">{focus.map(f => <span key={f}>{f}</span>)}</div>
          </div>
        </div>
      </div>
    </StackSection>
  )
}
