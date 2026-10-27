import { skillGroups } from '../../data/profile';

export default function Skills() {
  return (
    <section
      className="toolbox-section section-pad"
      id="myskills"
      aria-labelledby="toolbox-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span>03 /</span> TECHNICAL TOOLKIT
            </p>
            <h2 id="toolbox-title">Tools I’ve put to work.</h2>
          </div>
          <p className="section-summary">
            Across web, mobile, services, and infrastructure.
            <br />
            The stack changes. The engineering carries over.
          </p>
        </div>
        <div className="skill-table">
          {skillGroups.map((group, index) => (
            <div className="skill-row" key={group.name}>
              <span className="skill-index">0{index + 1}</span>
              <div className="skill-category">
                <h3>{group.name}</h3>
                <p>{group.note}</p>
              </div>
              <ul className="skill-tags">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="toolkit-note">
          <span aria-hidden="true">↳</span> A working toolkit from the
          applications and services I’ve built.
        </p>
      </div>
    </section>
  );
}
