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
          ACAM is a local-first Chrome extension. Your browsing data stays in your browser, and we don't
          run servers to collect it. This policy explains exactly what ACAM does and doesn't do with
          your information.
        </p>

        <h2>1. Your Data Stays on Your Device</h2>
        <p>
          ACAM never sends your browsing history, visited URLs, interest profiles, location estimates,
          or any personal identifiers to any server. Period.
        </p>
        <ul>
          <li>
            <strong>No servers:</strong> We don't operate telemetry servers, analytics collectors, or cloud databases.
          </li>
          <li>
            <strong>No tracking libraries:</strong> No Google Analytics, no Mixpanel, no Sentry, no third-party
            scripts of any kind.
          </li>
          <li>
            <strong>Sandboxed execution:</strong> The extension's Content Security Policy locks
            script execution to <code>'self'</code>. No third-party code runs inside ACAM.
          </li>
        </ul>

        <h2>2. What ACAM Does on Your Device</h2>
        <p>
          Everything below happens locally in your browser. None of it is sent anywhere.
        </p>

        <h3>A. Browsing Profile</h3>
        <ul>
          <li>
            <strong>What it reads:</strong> When you trigger a scan or have auto-scan on,
            ACAM reads your local Chrome history.
          </li>
          <li>
            <strong>Interests:</strong> It classifies your browsing into broad categories
            (food, travel, fitness, etc.) and figures out what motivates you (cost savings,
            health, community) to pick relevant nudges.
          </li>
          <li>
            <strong>What it stores:</strong> Only aggregated scores and category tallies go
            into <code>chrome.storage.local</code>. Full URLs are processed in memory and
            thrown away.
          </li>
        </ul>

        <h3>B. Location Estimate</h3>
        <ul>
          <li>
            ACAM guesses your approximate city from your browsing patterns (local news sites,
            city-specific domains) to show nearby climate events. This guess stays on your device.
          </li>
        </ul>

        <h3>C. Impact Metrics &amp; Preferences</h3>
        <ul>
          <li>
            Your point tallies (CO₂ avoided, civic actions), nudge frequency settings, and
            preferences are stored locally in <code>chrome.storage.local</code>.
          </li>
        </ul>

        <h2>3. Chrome Permissions</h2>
        <p>
          ACAM only requests permissions it actually needs:
        </p>
        <table>
          <thead>
            <tr><th>Permission</th><th>Justification</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><code>history</code></td>
              <td>Needed to read your browsing history locally for profile building and recommendations.</td>
            </tr>
            <tr>
              <td><code>storage</code></td>
              <td>Needed to save your profile scores, impact metrics, and settings in local browser storage.</td>
            </tr>
            <tr>
              <td><code>alarms</code></td>
              <td>Needed to schedule periodic profile refreshes without running a constant background timer.</td>
            </tr>
            <tr>
              <td><code>host_permissions</code> (10 partner sites)</td>
              <td>Needed to link you to refurbished and secondhand alternatives on these sites: Back Market, eBay, Swappa, ThredUp, Poshmark, Depop, ThriftBooks, Better World Books, Chairish, and AptDeco. Also used to check whether listings exist before showing a link.</td>
            </tr>
          </tbody>
        </table>

        <h2>4. Your Controls</h2>
        <ul>
          <li>
            <strong>Purge Local Cache:</strong> Hit "Purge Local Cache" in the popup to wipe all stored
            data instantly.
          </li>
          <li>
            <strong>Nudge Frequency:</strong> Control how often ACAM shows recommendations with the
            frequency dial.
          </li>
          <li>
            <strong>Uninstall:</strong> Removing the extension deletes everything it stored.
          </li>
        </ul>

        <h2>5. Chrome Web Store Limited Use Disclosure</h2>
        <p>
          ACAM complies with the Chrome Web Store <strong>User Data Policy</strong> and{' '}
          <strong>Limited Use</strong> requirements:
        </p>
        <ol>
          <li>Your data is only used to show you climate nudges and recommendations on your own screen.</li>
          <li>Your data is never sold, shared with third parties, or used for advertising.</li>
          <li>No human ever sees your browsing data.</li>
        </ol>

        <h2>6. Open Source</h2>
        <p>
          ACAM is open source. You can verify everything in this policy by reading the{' '}
          <a href="https://github.com/krzheng3150/automated-climate-action-maker" target="_blank" rel="noopener noreferrer">
            source code
          </a>.
          Questions or concerns? <a href="https://github.com/krzheng3150/automated-climate-action-maker/issues" target="_blank" rel="noopener noreferrer">
            Open an issue
          </a>.
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
