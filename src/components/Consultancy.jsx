export default function Consultancy() {
  return (
    <section id="consultancy" className="section section-dark">
      <div className="container">
        <h2 className="section-title">Consultancy Services</h2>
        <p className="section-subtitle">
          We work with <a href="https://climatebase.org/fellowship" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Climatebase Fellowship</a> members
          to bring climate software ideas to life — from concept to launch.
        </p>

        <div className="card-grid">
          <div className="card card-dark">
            <span className="card-badge badge-blue">Fellowship Project - Cohort 10</span>
            <h3>Connected in Climate</h3>
            <p>
              A mentorship platform that pairs experienced climate professionals
              with people looking to transition into climate careers — making the
              industry more accessible, one connection at a time.
            </p>
            <a href="https://connected-in-climate-n42zu.ondigitalocean.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">View App</a>
          </div>

          <div className="card card-dark">
            <span className="card-badge badge-purple">Fellowship Project - Cohort 10</span>
            <h3>ShockT</h3>
            <p>
              Helps companies evaluate shipping route tradeoffs when supply chains
              are disrupted — comparing cost, time, and emissions across
              alternative routes so logistics teams can make informed decisions fast.
            </p>
            <a href="https://shockt-app-z6auf.ondigitalocean.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">View App</a>
          </div>

          <div className="card card-dark">
            <span className="card-badge badge-green">Spinoff - Cohort 6</span>
            <h3>BSDaaS</h3>
            <p>
              AI-powered greenwashing and spin detection. Originated from{' '}
              <a href="https://github.com/krzheng3150/climate-hashbot" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>climate-hashbot</a>
              , a climate article categorization tool we co-built in 2024 that served as our introduction to LLMs.
              Independently owned and operated by owners of BSDaaS.
            </p>
            <a href="https://www.bsdaas.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">View App</a>
          </div>
        </div>
      </div>
    </section>
  )
}
