import certifications from "../data/certification";
import CertificationCard from "./CertificationCard";

function Certification() {
  return (
    <section id="certification" className="certs">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <p className="section-sub mb-5" style={{ maxWidth: 420 }}>
          Certifications that validate my Full-Stack Java journey and coding
          practice.
        </p>
        <div className="row g-4">
          {certifications.map((certification) => (
            <div key={certification.id} className="col-md-6 col-lg-4">
              <CertificationCard certification={certification} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certification;
