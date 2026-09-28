import { useEffect, useRef, useState } from "react";

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const descRef = useRef(null);

  // Show "See more" only when the clamped text actually overflows the card size.
  useEffect(() => {
    if (expanded) return;
    const el = descRef.current;
    if (!el) return;

    const check = () => {
      setOverflows(el.scrollHeight > el.clientHeight + 2);
    };

    check();
    window.addEventListener("resize", check);
    // Re-check after fonts/images settle
    const t = setTimeout(check, 300);
    return () => {
      window.removeEventListener("resize", check);
      clearTimeout(t);
    };
  }, [expanded, project.description]);

  const handleToggle = (e) => {
    e.preventDefault();
    setExpanded((v) => !v);
  };

  return (
    <article className="card-item">
      <div className="card-media">
        <img src={project.image} alt={project.title} loading="lazy" />
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
        <p
          ref={descRef}
          className={`card-desc ${expanded ? "expanded" : "clamped"}`}
        >
          {project.description}
        </p>
        {overflows && (
          <a
            href="#"
            className="see-more-btn"
            onClick={handleToggle}
            role="button"
            aria-expanded={expanded}
          >
            {expanded ? "See less" : "See more"}
          </a>
        )}
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
