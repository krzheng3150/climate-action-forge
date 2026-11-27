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
            A Chrome extension that looks at your browsing habits and nudges you
            toward climate-friendly choices. Everything runs locally on your device.
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
            ACAM reads your browsing history locally and figures out how to help.
          </p>
          <div className="card-grid">
            <div className="card">
              <h3>Browsing Profile</h3>
              <p>
                Scans your history to understand what you browse and how. Stores
                domain-level counts only, never full URLs or search terms.
              </p>
            </div>
            <div className="card">
              <h3>Smart Nudges</h3>
              <p>
                Based on what you browse, ACAM suggests food swaps with CO₂
                comparisons, refurbished product alternatives, and petitions
                you might care about.
              </p>
            </div>
            <div className="card">
              <h3>Local Climate Events</h3>
              <p>
                Figures out roughly where you are from your browsing patterns
                and shows climate events, petitions, and campaigns near you.
              </p>
            </div>
            <div className="card">
              <h3>Impact Tracking</h3>
              <p>
                Keeps a running tally of your estimated CO₂ avoided and civic
                actions taken. All stored locally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title">Privacy by Design</h2>
          <p className="section-subtitle">
            Your browsing data never leaves your browser. Here's how we enforce that.
          </p>
          <div className="card-grid">
            <div className="card card-dark">
              <h3>100% On-Device</h3>
              <p>All analysis happens in your browser. We don't run servers, and there's no cloud sync.</p>
            </div>
            <div className="card card-dark">
              <h3>Locked-Down Networking</h3>
              <p>
                The only network requests are anonymous product availability
                checks. Your browsing data is never in those requests.
              </p>
            </div>
            <div className="card card-dark">
              <h3>Minimal Storage</h3>
              <p>
                We store domain-level counts, capped at 100 entries. Full URLs
                and search terms are never kept.
              </p>
            </div>
            <div className="card card-dark">
              <h3>You Own Your Data</h3>
              <p>
                Wipe all stored data from the extension popup. Uninstalling
                deletes everything too.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 className="section-title">Legal</h2>
          <div className="card-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <Link to="/apps/acam/privacy" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>Privacy Policy</h3>
              <p>How ACAM handles your data and why nothing leaves your device.</p>
              <span className="card-links"><span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem' }}>Read Privacy Policy &rarr;</span></span>
            </Link>
            <Link to="/apps/acam/terms" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
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
