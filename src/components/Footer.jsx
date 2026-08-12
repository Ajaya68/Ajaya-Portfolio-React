import navigation from "../data/navigation";
import socialLinks from "../data/socialLinks";
import personal from "../data/personal";
import Reveal from "./Reveal";

const ORB_CLASSES = ["f1", "f2", "f3", "f4", "f5"];

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <Reveal direction="zoom">
          <div className="footer-card position-relative overflow-hidden">
          <div className="row g-4">
            <div className="col-lg-5">
              <h3 className="footer-heading">
                Let&rsquo;s work
                <br />
                together today!
              </h3>
              <a href="#contact" className="btn-primary-cyan mt-3">
                Start project <i className="bi bi-chevron-right"></i>
              </a>
            </div>
            <div className="col-6 col-lg-3">
              <div className="footer-title">Sitemap</div>
              <ul className="footer-list">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-6 col-lg-3">
              <div className="footer-title">Socials</div>
              <ul className="footer-list">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a href={social.url} target="_blank" rel="noopener">
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {ORB_CLASSES.map((orb) => (
            <span key={orb} className={`orb ${orb}`}></span>
          ))}
          </div>
        </Reveal>
        <div className="copyright">{personal.footer.copyright}</div>
      </div>
    </footer>
  );
}

export default Footer;
