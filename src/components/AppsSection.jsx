import { Link } from 'react-router-dom'

export default function AppsSection() {
  return (
    <section id="apps" className="section section-light">
      <div className="container">
        <h2 className="section-title">Climate Action Apps</h2>
        <p className="section-subtitle">
          Free, open-source tools for everyday climate action.
        </p>

        <div className="card-grid">
          <Link to="/apps/acam" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span className="card-badge badge-green">Chrome Extension</span>
            <h3>Automated Climate Action Maker (ACAM)</h3>
            <p>
              A Chrome extension that looks at your browsing habits (locally,
              on your device) and nudges you toward climate-friendly choices.
              Petitions near you, refurbished alternatives, lower-emission
              food swaps. No data leaves your browser.
            </p>
            <ul className="app-features">
              <li>100% On-Device</li>
              <li>Zero Telemetry</li>
              <li>Open Source</li>
              <li>Free</li>
            </ul>
            <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>
              Learn more &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
