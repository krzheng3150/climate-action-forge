import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">Climate Action Forge</div>
          <p className="footer-tagline">Building open-source apps for climate action.</p>
        </div>
        <div>
          <h4>Legal</h4>
          <ul className="footer-links">
            <li><Link to="/apps/acam/privacy">Privacy Policy</Link></li>
            <li><Link to="/apps/acam/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4>Connect</h4>
          <ul className="footer-links">
            <li><a href="#contact">Contact Us</a></li>
            <li>
              <a href="https://github.com/krzheng3150" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Climate Action Forge. All rights reserved.
      </div>
    </footer>
  )
}
