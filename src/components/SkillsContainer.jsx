import { skills } from "../data/Skills";

const SkillsContainer = () => {
  const removeName = (e) => {
    e.target.setAttribute("style", "margin-right: 0");
  };

  return (
    <div className="skills-container">
      {skills.map((skill) => {
        const { name, html } = skill;
        const width = (16 * name.length) / 2 + 24;
        return (
          <div
            key={name}
            className="skill"
            onMouseOut={removeName}
            onMouseEnter={(e) => {
              e.target.setAttribute("style", `margin-right: ${width}px`);
            }}
          >
            {html}
            <p className="skill-name ">{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsContainer;
