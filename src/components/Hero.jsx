import personal from "../data/personal";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div
            className="d-flex align-items-center gap-3 hero-topline load-item"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="avatar-mini">
              <span>A</span>
            </div>
            <div className="avail">
              <span className="dot"></span>
              {personal.availability.text}
            </div>
          </div>
          <img
            src={personal.profileImage}
            alt="Ajaya profile"
            className="hero-profile-img"
          />
          <h1
            className="hero-title load-item"
            style={{ animationDelay: "0.22s" }}
          >
            {personal.tagline}
          </h1>
          <div
            className="hero-cta load-item"
            style={{ animationDelay: "0.34s" }}
          >
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
          <p
            id="about"
            className="hero-sub load-item"
            style={{ animationDelay: "0.46s" }}
          >
            {personal.description}
          </p>
          <div
            className="stats load-item"
            style={{ animationDelay: "0.58s" }}
          >
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
      </div>
    </section>
  );
}

export default Hero;
