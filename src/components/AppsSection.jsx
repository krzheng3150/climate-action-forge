import { Link } from 'react-router-dom'

export default function AppsSection() {
  return (
    <section id="apps" className="section section-light">
      <div className="container">
        <h2 className="section-title">Climate Action Apps</h2>
        <p className="section-subtitle">
          Free, open-source tools that help people take meaningful climate action
          in their daily lives.
        </p>

        <div className="card-grid">
          <Link to="/apps/acam" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span className="card-badge badge-green">Chrome Extension</span>
            <h3>Automated Climate Action Maker (ACAM)</h3>
            <p>
              A privacy-first browser extension that analyzes your browsing
              patterns locally on your device and suggests climate-positive
              actions — signing petitions, finding refurbished alternatives,
              and making lower-emission food choices. Zero telemetry.
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
