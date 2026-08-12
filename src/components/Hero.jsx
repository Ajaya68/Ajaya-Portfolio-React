import personal from "../data/personal";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="d-flex align-items-center gap-3 mb-4 hero-topline">
              <div className="avatar-mini">
                <span>A</span>
              </div>
              <div className="avail">
                <span className="dot"></span>
                {personal.availability.text}
              </div>
            </div>
            <h1 className="hero-title">{personal.tagline}</h1>
            <div className="hero-cta mt-4">
              <a
                className="btn-primary-cyan"
                href={personal.resume}
                target="_blank"
                rel="noopener"
              >
                Download CV <i className="bi bi-download"></i>
              </a>
              <a className="btn-ghost" href="#footer">
                Scroll down <i className="bi bi-arrow-down"></i>
              </a>
            </div>
            <p id="about" className="hero-sub mt-5">
              {personal.description}
            </p>
            <div className="stats">
              {personal.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="stat-value">
                    {stat.value}
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src={personal.profileImage}
              alt="Ajaya profile"
              className="hero-profile-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
