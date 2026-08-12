import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

function Projects() {
  return (
    <section id="work" className="projects">
      <div className="container">
        <Reveal direction="left">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-5">
            <h2 className="section-title m-0">My portfolio highlights</h2>
          </div>
        </Reveal>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <Reveal
                delay={index * 90}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <ProjectCard project={project} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
