import certifications from "../data/certification";
import CertificationCard from "./CertificationCard";
import Reveal from "./Reveal";

function Certification() {
  return (
    <section id="certification" className="certs">
      <div className="container">
        <Reveal direction="left">
          <h2 className="section-title">Certificates</h2>
        </Reveal>
        <Reveal delay={100} direction="left">
          <p className="section-sub mb-5" style={{ maxWidth: 420 }}>
            Certifications that validate my Full-Stack Java journey and coding
            practice.
          </p>
        </Reveal>
        <div className="row g-4">
          {certifications.map((certification, index) => (
            <div key={certification.id} className="col-md-6 col-lg-4">
              <Reveal
                delay={index * 90}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <CertificationCard certification={certification} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certification;
