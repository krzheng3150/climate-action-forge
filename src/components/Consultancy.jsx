export default function Consultancy() {
  return (
    <section id="consultancy" className="section section-dark">
      <div className="container">
        <h2 className="section-title">Consultancy Services</h2>
        <p className="section-subtitle">
          We help <a href="https://climatebase.org/fellowship" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Climatebase Fellowship</a> members
          build and ship their climate software projects.
        </p>

        <div className="card-grid">
          <div className="card card-dark">
            <span className="card-badge badge-blue">Fellowship Project - Cohort 10</span>
            <h3>Connected in Climate</h3>
            <p>
              Pairs climate professionals with people looking to break into
              climate careers. Mentors help mentees find their path in.
            </p>
            <a href="https://connected-in-climate-n42zu.ondigitalocean.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">View App</a>
          </div>

          <div className="card card-dark">
            <span className="card-badge badge-purple">Fellowship Project - Cohort 10</span>
            <h3>ShockT</h3>
            <p>
              When a supply chain disruption hits, companies need to reroute
              shipments. ShockT compares alternative routes by cost, time, and
              emissions so logistics teams can pick the right tradeoff.
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
