import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function AcamPage() {
  useEffect(() => { document.title = 'ACAM – Automated Climate Action Maker | Climate Action Forge' }, [])

  return (
    <>
      <section className="hero" style={{ padding: '4rem 1.5rem 3.5rem' }}>
        <div className="hero-inner">
          <Link to="/" className="legal-back" style={{ color: 'var(--text-muted-light)' }}>&larr; Back to Home</Link>
          <div className="hero-badge" style={{ marginTop: '1.5rem' }}>Chrome Extension &middot; Free &amp; Open Source</div>
          <h1>Automated Climate Action Maker</h1>
          <p>
            A privacy-first browser extension that turns your everyday browsing into
            climate-positive action — all processed locally on your device with zero telemetry.
          </p>
          <div className="hero-ctas">
            <a
              href="https://chromewebstore.google.com/detail/automated-climate-action/kljhdfloengjjapadoimmdfmmjkannpk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Add to Chrome
            </a>
            <a
              href="https://github.com/krzheng3150/automated-climate-action-maker"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              View Source &rarr;
            </a>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            ACAM analyzes your browsing patterns entirely on your device to suggest
            personalized climate actions.
          </p>
          <div className="card-grid">
            <div className="card">
              <h3>Browsing Footprint Analysis</h3>
              <p>
                Scans your browsing history locally to build a digital carbon footprint
                estimate. Only domain-level frequencies are stored — never full URLs,
                paths, or query parameters.
              </p>
            </div>
            <div className="card">
              <h3>Personalized Interventions</h3>
              <p>
                Surfaces contextual nudges based on your browsing archetype — from
                food swap suggestions with CO₂ comparisons to refurbished product
                alternatives and civic petitions.
              </p>
            </div>
            <div className="card">
              <h3>Civic Action Matching</h3>
              <p>
                Detects your region from timezone and browsing patterns, then matches
                you with relevant climate petitions, campaigns, and civic actions
                happening near you.
              </p>
            </div>
            <div className="card">
              <h3>Impact Tracking</h3>
              <p>
                Tracks your estimated CO₂ avoided and civic engagement points locally.
                Gamification rewards keep you motivated without any data leaving your
                machine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title">Privacy by Design</h2>
          <p className="section-subtitle">
            ACAM was built from the ground up with a zero-telemetry architecture.
          </p>
          <div className="card-grid">
            <div className="card card-dark">
              <h3>100% On-Device</h3>
              <p>All processing happens in your browser. No remote servers, no cloud sync, no analytics SDKs.</p>
            </div>
            <div className="card card-dark">
              <h3>No Network Requests</h3>
              <p>
                The extension's Content Security Policy locks execution to <code>self</code>.
                The source code contains zero network egress primitives.
              </p>
            </div>
            <div className="card card-dark">
              <h3>Data Minimization</h3>
              <p>
                Only domain-level frequencies are stored, capped at 100 entries.
                Full URLs and query parameters are never retained.
              </p>
            </div>
            <div className="card card-dark">
              <h3>You Own Your Data</h3>
              <p>
                Purge all stored data instantly from the extension popup. Uninstalling
                the extension deletes everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 className="section-title">Legal</h2>
          <div className="card-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <Link to="/privacy" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>Privacy Policy</h3>
              <p>Full details on how ACAM handles your data with zero telemetry.</p>
              <span className="card-links"><span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem' }}>Read Privacy Policy &rarr;</span></span>
            </Link>
            <Link to="/terms" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>Terms of Service</h3>
              <p>Terms governing your use of the ACAM browser extension.</p>
              <span className="card-links"><span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem' }}>Read Terms &rarr;</span></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
