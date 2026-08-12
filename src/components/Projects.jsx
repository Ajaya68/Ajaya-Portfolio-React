import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="work" className="projects">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-5">
          <h2 className="section-title m-0">My portfolio highlights</h2>
        </div>
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
