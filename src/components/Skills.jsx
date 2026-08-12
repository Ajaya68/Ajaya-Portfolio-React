import skills from "../data/skills";

function SkillItem({ skill }) {
  const { name, role, color } = skill;
  return (
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
  );
}

function Skills() {
  return (
    <section className="tools">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5">
            <h2 className="section-title">
              Essential Tools <br />I use
            </h2>
            <p className="section-sub">
              Discover the powerful tools and technologies I use to create
              exceptional, high-performing web applications &amp; enterprise
              systems.
            </p>
          </div>
          <div className="col-lg-7">
            <div className="tools-grid">
              {skills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
