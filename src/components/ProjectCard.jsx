function ProjectCard({ project }) {
  return (
    <article className="card-item">
      <div className="card-media">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
        />
      </div>
      <div className="card-body-2">
        <div className="card-head">
          <h3 className="card-title">{project.title}</h3>
          <a
            className="icon-btn"
            href={project.link}
            target="_blank"
            rel="noopener"
            aria-label={"Open " + project.title}
          >
            <i className="bi bi-arrow-up-right"></i>
          </a>
        </div>
        <p className="card-desc">{project.description}</p>
        <div className="card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
