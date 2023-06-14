import { frontend, styling, backend, sourceControl } from "../data/Skills";

const SkillsContainer = () => {
  return (
    <article className="technologies container">
      <h3>Technologies</h3>
      <div className="skills">
        <div className="category">
          <h4>Frontend</h4>
          {frontend.map((skill) => {
            const { name, html } = skill;
            return (
              <div key={name} className="tech">
                <p>{name}</p>
                {html}
              </div>
            );
          })}
        </div>
        <div className="category">
          <h4>Styling</h4>
          {styling.map((skill) => {
            const { name, html } = skill;
            return (
              <div key={name} className="tech">
                <p>{name}</p>
                {html}
              </div>
            );
          })}
        </div>
        <div className="category">
          <h4>Backend</h4>
          {backend.map((skill) => {
            const { name, html } = skill;
            return (
              <div key={name} className="tech">
                <p>{name}</p>
                {html}
              </div>
            );
          })}
        </div>
        <div className="category">
          <h4>Source Control</h4>
          {sourceControl.map((skill) => {
            const { name, html } = skill;
            return (
              <div key={name} className="tech">
                <p>{name}</p>
                {html}
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default SkillsContainer;
