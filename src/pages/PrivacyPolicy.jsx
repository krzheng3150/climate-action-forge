import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  useEffect(() => { document.title = 'Privacy Policy | Climate Action Forge' }, [])

  return (
    <article className="legal-page">
      <div className="container-narrow">
        <Link to="/apps/acam" className="legal-back">&larr; Back to ACAM</Link>
        <h1>Privacy Policy for Automated Climate Action Maker (ACAM)</h1>
        <p className="legal-updated">Last updated: October 2026</p>
        <p>
          The <strong>Automated Climate Action Maker (ACAM)</strong> browser extension is designed with a strict{' '}
          <strong>Local-First, Zero-Telemetry Privacy Architecture</strong>. This policy explains how ACAM handles
          your information and demonstrates our commitment to user privacy and data sovereignty.
        </p>

        <h2>1. Absolute Guarantee: Zero Outbound Telemetry</h2>
        <p>
          ACAM operates completely on your local device. Under no circumstance does ACAM transmit, sync, leak, or
          sell your browsing history, visited URLs, search queries, personal identifiers, or digital carbon metrics
          to external servers.
        </p>
        <ul>
          <li>
            <strong>No Remote Servers:</strong> We do not operate telemetry servers, analytics collectors, or cloud databases.
          </li>
          <li>
            <strong>No Third-Party Analytics:</strong> ACAM contains zero third-party tracking libraries, analytics
            scripts (e.g., Google Analytics, Mixpanel), or error-monitoring SDKs (e.g., Sentry).
          </li>
          <li>
            <strong>Hardened Network Sandbox:</strong> The extension's Content Security Policy (CSP) strictly locks
            execution to <code>'self'</code>, and the source code contains zero network egress
            primitives (<code>fetch</code>, <code>XMLHttpRequest</code>, <code>WebSocket</code>,{' '}
            <code>sendBeacon</code>, <code>EventSource</code>).
          </li>
        </ul>

        <h2>2. Information Handled &amp; On-Device Processing</h2>
        <p>ACAM processes certain browsing activity strictly within Chromium's local process memory:</p>

        <h3>A. Browsing History &amp; Domain Aggregation</h3>
        <ul>
          <li>
            <strong>What is accessed:</strong> When you trigger an on-device scan or browse with auto-scan enabled,
            ACAM queries the local Chromium history database.
          </li>
          <li>
            <strong>Sanitization &amp; Minimization:</strong> ACAM <strong>never</strong> retains full URLs, page
            paths, or query parameters (which may contain sensitive search terms or session tokens).
          </li>
          <li>
            <strong>Domain-Level Frequencies:</strong> ACAM extracts only top-level hostnames
            (e.g., <code>theguardian.com</code>, <code>backmarket.com</code>) and increments local numerical
            counters to calculate estimated embodied carbon footprints and behavioral archetypes.
          </li>
          <li>
            <strong>Bounded Footprint:</strong> Persisted domain maps are capped at a maximum of 100 entries in
            local browser storage (<code>chrome.storage.local</code>) to prevent storage bloat.
          </li>
        </ul>

        <h3>B. Local Impact Metrics &amp; Preferences</h3>
        <ul>
          <li>
            Gamification counters (Civic Points, estimated kilograms of CO₂ avoided) and settings (Background
            Auto-Scan toggle) are stored locally in <code>chrome.storage.local</code>.
          </li>
        </ul>

        <h2>3. Chrome Permissions &amp; Why They Are Needed</h2>
        <p>
          In accordance with the Chrome Web Store <strong>Principle of Least Privilege</strong>, ACAM only requests
          permissions that are directly necessary for its single purpose:
        </p>
        <table>
          <thead>
            <tr><th>Permission</th><th>Justification</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><code>history</code></td>
              <td>Required to perform on-device categorization of your browsing activity to compute carbon footprint estimates and behavioral archetypes without external telemetry.</td>
            </tr>
            <tr>
              <td><code>storage</code></td>
              <td>Required to persist your on-device footprint snapshot, domain tallies, and user preference toggles within Chromium's local sandboxed LevelDB storage.</td>
            </tr>
            <tr>
              <td><code>alarms</code></td>
              <td>Required to schedule periodic, low-resource synchronization of local footprint data without running battery-draining continuous background timers.</td>
            </tr>
          </tbody>
        </table>

        <h2>4. User Control &amp; Data Deletion</h2>
        <p>You maintain complete control over your data:</p>
        <ul>
          <li>
            <strong>Purge Local Cache:</strong> Clicking the <strong>"Purge Local Cache"</strong> button in the
            ACAM popup immediately and atomically wipes all stored domain metrics, footprint snapshots, and queued
            visits from <code>chrome.storage.local</code>.
          </li>
          <li>
            <strong>Toggle Background Auto-Scan:</strong> You can disable real-time activity batching at any time
            via the toggle in the popup interface.
          </li>
          <li>
            <strong>Uninstalling:</strong> Removing the extension from your browser instantly deletes all extension
            storage and state held by Chromium.
          </li>
        </ul>

        <h2>5. Chrome Web Store Limited Use Disclosure</h2>
        <p>
          ACAM's use and transfer of information received from Google APIs adheres to the{' '}
          <strong>Chrome Web Store User Data Policy</strong>, including the <strong>Limited Use</strong> requirements:
        </p>
        <ol>
          <li>
            Data is utilized exclusively to provide on-device carbon footprint insights and contextual
            sustainability prompts visible directly to the user.
          </li>
          <li>
            Data is never transferred to third parties or used for personalized advertising, credit assessment,
            or data broker sales.
          </li>
          <li>No human reads or has access to your browsing signals.</li>
        </ol>

        <h2>6. Open Source Verification &amp; Contact</h2>
        <p>
          ACAM is open source and auditable. You can independently verify our zero-network guarantees and source
          code directly in our{' '}
          <a href="https://github.com/krzheng3150/automated-climate-action-maker" target="_blank" rel="noopener noreferrer">
            repository
          </a>.
        </p>
        <p>
          If you have questions, feedback, or security inquiries regarding ACAM's privacy practices, please{' '}
          <a href="https://github.com/krzheng3150/automated-climate-action-maker/issues" target="_blank" rel="noopener noreferrer">
            open an issue
          </a>{' '}
          in the official repository or contact the maintainers.
        </p>
      </div>
    </article>
  )
}
