import skills from "../data/skills";
import Reveal from "./Reveal";

function SkillItem({ skill, index }) {
  const { name, role, color } = skill;
  return (
    <Reveal delay={index * 70} direction={index % 2 === 0 ? "left" : "right"}>
      <div className="tool">
        <div
          className="ico"
          style={{
            background: color + "1a",
            color: color,
          }}
        >
          {name.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <div className="name">{name}</div>
          <div className="role">{role}</div>
        </div>
      </div>
    </Reveal>
  );
}

function Skills() {
  return (
    <section className="tools">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5">
            <Reveal direction="left">
              <h2 className="section-title">
                Essential Tools <br />I use
              </h2>
            </Reveal>
            <Reveal delay={120} direction="left">
              <p className="section-sub">
                Discover the powerful tools and technologies I use to create
                exceptional, high-performing web applications &amp; enterprise
                systems.
              </p>
            </Reveal>
          </div>
          <div className="col-lg-7">
            <div className="tools-grid">
              {skills.map((skill, index) => (
                <SkillItem key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
