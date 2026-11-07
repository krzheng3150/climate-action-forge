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
            <span className="card-badge badge-blue">Fellowship Project</span>
            <h3>Connected in Climate</h3>
            <p>
              A platform connecting climate professionals and organizations
              to accelerate collaboration on climate solutions.
            </p>
          </div>

          <div className="card card-dark">
            <span className="card-badge badge-purple">Fellowship Project</span>
            <h3>ShockT</h3>
            <p>
              Building tools to help communities understand and prepare for
              climate shock events through data-driven insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
