function CertificationCard({ certification }) {
  const meta = [certification.issuer, certification.date]
    .filter(Boolean)
    .join(" | ");
  return (
    <div className="card-item">         jiiiiikkk
      <div className="card-media">
        <img
          src={certification.image}
          alt={certification.title}
          loading="lazy"
        />
      </div>
      <div className="card-body-2">
        <div className="card-head">
          <div>
            <h3 className="card-title">{certification.title}</h3>
            <div className="card-meta">{meta}</div>
          </div>
          <a
            className="icon-btn"
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener"
            aria-label={"Open " + certification.title}
          >
            <i className="bi bi-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CertificationCard;
