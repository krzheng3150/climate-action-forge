import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TermsOfService() {
  useEffect(() => { document.title = 'Terms of Service | Climate Action Forge' }, [])

  return (
    <article className="legal-page">
      <div className="container-narrow">
        <Link to="/apps/acam" className="legal-back">&larr; Back to ACAM</Link>
        <h1>Terms of Service for Automated Climate Action Maker (ACAM)</h1>
        <p className="legal-updated">Last updated: November 2026</p>
        <p>
          By installing or using the <strong>Automated Climate Action Maker (ACAM)</strong> browser extension,
          you agree to these terms.
        </p>

        <h2>1. What ACAM Does</h2>
        <p>
          ACAM is a free, open-source browser extension that analyzes your browsing patterns locally on your
          device and suggests climate-positive actions such as signing petitions, finding refurbished alternatives,
          and making lower-emission food choices. All processing happens on your machine — ACAM never transmits
          your data to external servers.
        </p>

        <h2>2. No Account Required</h2>
        <p>ACAM does not require registration, login, or any personal information to function.</p>

        <h2>3. Your Data Stays Local</h2>
        <p>
          All browsing analysis, recommendations, and point tracking are stored exclusively in your browser's
          local storage. You can purge all stored data at any time from the extension popup. See
          our <Link to="/apps/acam/privacy">Privacy Policy</Link> for full details.
        </p>

        <h2>4. External Links</h2>
        <p>
          When you click an action button (e.g., signing a petition or browsing a refurbished marketplace),
          ACAM opens that website in a new tab. Your interaction with that external website is governed by its
          own terms and privacy policy, not ours.
        </p>

        <h2>5. Voluntary Feedback</h2>
        <p>
          If you choose to share feedback via the Share Feedback button, that action is user-initiated and opens
          an external page. No feedback is collected automatically.
        </p>

        <h2>6. No Warranty</h2>
        <p>
          ACAM is provided "as is" without warranty of any kind. Climate impact estimates are approximations
          based on publicly available data (AGRIBALYSE, academic research) and should not be taken as precise
          measurements.
        </p>

        <h2>7. Open Source</h2>
        <p>
          ACAM is open source under the MIT License. You can inspect, modify, and redistribute the code
          at{' '}
          <a href="https://github.com/krzheng3150/automated-climate-action-maker" target="_blank" rel="noopener noreferrer">
            github.com/krzheng3150/automated-climate-action-maker
          </a>.
        </p>

        <h2>8. Changes</h2>
        <p>We may update these terms as the extension evolves. Continued use after changes constitutes acceptance.</p>

        <h2>9. Contact</h2>
        <p>
          For questions or feedback, reach us via the{' '}
          <a href="https://github.com/krzheng3150/automated-climate-action-maker/issues" target="_blank" rel="noopener noreferrer">
            GitHub Issues page
          </a>.
        </p>
      </div>
    </article>
  )
}
