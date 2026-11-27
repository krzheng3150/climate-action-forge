import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  useEffect(() => { document.title = 'Privacy Policy | Climate Action Forge' }, [])

  return (
    <article className="legal-page">
      <div className="container-narrow">
        <Link to="/apps/acam" className="legal-back">&larr; Back to ACAM</Link>
        <h1>Privacy Policy for Automated Climate Action Maker (ACAM)</h1>
        <p className="legal-updated">Last updated: November 2026</p>
        <p>
          The <strong>Automated Climate Action Maker (ACAM)</strong> browser extension is designed with a strict{' '}
          <strong>Local-First, Zero-Telemetry Privacy Architecture</strong>. This policy explains how ACAM handles
          your information and demonstrates our commitment to user privacy and data sovereignty.
        </p>

        <h2>1. Core Guarantee: Your Data Stays on Your Device</h2>
        <p>
          Under no circumstance does ACAM transmit, sync, or sell your browsing history, visited URLs, personal
          identifiers, interest profiles, location estimates, or digital carbon metrics to external servers.
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
            <strong>Hardened Sandbox:</strong> The extension's Content Security Policy (CSP) strictly locks
            script execution to <code>'self'</code>. No third-party code runs inside the extension.
          </li>
        </ul>

        <h2>2. Information Handled &amp; On-Device Processing</h2>
        <p>
          ACAM processes browsing activity entirely within your browser to personalize climate action
          recommendations. Everything described below stays on your device.
        </p>

        <h3>A. Browsing Profile</h3>
        <ul>
          <li>
            <strong>What is accessed:</strong> When you trigger a scan or browse with auto-scan enabled,
            ACAM reads your local Chromium history to build a browsing profile.
          </li>
          <li>
            <strong>Topic &amp; Interest Classification:</strong> ACAM analyzes domain names and URL path
            keywords to classify your browsing into broad interest categories (e.g., food, travel, fitness)
            and climate topic affinities. This powers personalized nudge recommendations.
          </li>
          <li>
            <strong>Motivator Signals:</strong> Browsing patterns are scored against motivator categories
            (cost, health, community, identity) to frame nudges in ways that resonate with you.
          </li>
          <li>
            <strong>What is stored:</strong> Only aggregated scores and category tallies are persisted
            in <code>chrome.storage.local</code>. Full URLs are processed in memory and discarded — never
            written to storage.
          </li>
        </ul>

        <h3>B. Location Estimate</h3>
        <ul>
          <li>
            ACAM estimates your approximate city from patterns in your browsing history (e.g., local news
            domains, city-specific sites) to rank nearby climate events and civic actions.
          </li>
          <li>
            This estimate is computed entirely on your device. It is never transmitted anywhere.
          </li>
        </ul>

        <h3>C. Impact Metrics &amp; Preferences</h3>
        <ul>
          <li>
            Gamification counters (Civic Points, estimated kilograms of CO₂ avoided), nudge frequency
            settings, and other preferences are stored locally in <code>chrome.storage.local</code>.
          </li>
        </ul>

        <h2>3. Chrome Permissions &amp; Why They Are Needed</h2>
        <p>
          In accordance with the Chrome Web Store <strong>Principle of Least Privilege</strong>, ACAM only requests
          permissions that are directly necessary for its purpose:
        </p>
        <table>
          <thead>
            <tr><th>Permission</th><th>Justification</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><code>history</code></td>
              <td>Required to perform on-device analysis of your browsing activity to compute carbon footprint estimates, interest profiles, and personalized recommendations.</td>
            </tr>
            <tr>
              <td><code>storage</code></td>
              <td>Required to persist your on-device profile scores, impact metrics, and preference toggles within Chromium's local sandboxed storage.</td>
            </tr>
            <tr>
              <td><code>alarms</code></td>
              <td>Required to schedule periodic, low-resource refresh of local profile data without running battery-draining continuous background timers.</td>
            </tr>
            <tr>
              <td><code>host_permissions</code> (10 partner sites)</td>
              <td>Required to link you to refurbished and secondhand alternatives on partner sites (Back Market, eBay, Swappa, ThredUp, Poshmark, Depop, ThriftBooks, Better World Books, Chairish, AptDeco) and check whether listings exist before showing a link.</td>
            </tr>
          </tbody>
        </table>

        <h2>4. User Control &amp; Data Deletion</h2>
        <p>You maintain complete control over your data:</p>
        <ul>
          <li>
            <strong>Purge Local Cache:</strong> Clicking the <strong>"Purge Local Cache"</strong> button in the
            ACAM popup immediately wipes all stored profiles, metrics, and queued
            visits from <code>chrome.storage.local</code>.
          </li>
          <li>
            <strong>Adjust Nudge Frequency:</strong> You can control how often ACAM surfaces recommendations
            via the frequency dial in the popup interface.
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
            Data is utilized exclusively to provide on-device carbon footprint insights, personalized
            sustainability nudges, and civic action recommendations visible directly to the user.
          </li>
          <li>
            Data is never transferred to third parties or used for personalized advertising, credit assessment,
            or data broker sales.
          </li>
          <li>No human reads or has access to your browsing signals.</li>
        </ol>

        <h2>6. Open Source Verification &amp; Contact</h2>
        <p>
          ACAM is open source and auditable. You can independently verify our privacy guarantees and source
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

        <h2>7. Frequently Asked Questions</h2>

        <h3>Does ACAM connect to the internet?</h3>
        <p>
          Only to check whether refurbished or secondhand products are available before showing you a link.
          These requests contain a product search term — never your browsing history, identity, or profile.
          Responses are cached in temporary session storage (5-minute TTL) and are never written to disk.
        </p>

        <h3>Does ACAM know my location?</h3>
        <p>
          ACAM estimates your approximate city from your browsing patterns (e.g., visiting local news or
          city-specific sites) so it can rank nearby climate events higher. This estimate is computed
          entirely on your device and is never sent anywhere.
        </p>

        <h3>What does ACAM learn about my interests?</h3>
        <p>
          ACAM classifies your browsing into broad categories like food, travel, fitness, and community to
          personalize which nudges it shows you. This profile is built and stored entirely in your browser.
          No one else — including us — ever sees it.
        </p>

        <h3>Will ACAM ever use affiliate links?</h3>
        <p>
          The infrastructure to support affiliate tagging exists in the codebase but is currently disabled
          for all partners. If enabled in the future, tags would be static and public — never personalized
          per user or per install. This policy will be updated to reflect any change.
        </p>
      </div>
    </article>
  )
}
