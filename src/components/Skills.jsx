import { useState } from "react";
import skills from "../data/skills";
import Reveal from "./Reveal";

const INITIAL_COUNT = 6;

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
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = showAll ? skills : skills.slice(0, INITIAL_COUNT);
  const remaining = skills.length - INITIAL_COUNT;

  const handleToggle = (e) => {
    e.preventDefault();
    setShowAll((v) => !v);
  };

  return (
    <section id="tools" className="tools">
      <div className="container">
        <div className="tools-single-col">
          <div className="tools-header">
            <Reveal direction="left">
              <h2 className="section-title">Essential Tools I Use</h2>
            </Reveal>
            <Reveal delay={120} direction="left">
              <p className="section-sub">
                Discover the powerful tools and technologies I use to create
                exceptional, high-performing web applications &amp; enterprise
                systems.
              </p>
            </Reveal>
          </div>
          <div className="tools-grid" id="tools-grid">
            {visibleSkills.map((skill, index) => (
              <SkillItem key={skill.name} skill={skill} index={index} />
            ))}
          </div>
          {skills.length > INITIAL_COUNT && (
            <div className="tools-more-wrap">
              <a
                href="#tools-grid"
                className="tools-more-link"
                onClick={handleToggle}
                role="button"
                aria-expanded={showAll}
              >
                {showAll ? "See less" : `See more (${remaining} more)`}
                <i
                  className={`bi ${showAll ? "bi-chevron-up" : "bi-chevron-down"}`}
                ></i>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;
