import { skills } from "../data/Skills";
import portrait from "../images/profile-pic.webp";
import blob from "../images/blob.svg";

const HeroPortrait = () => {
  return (
    <article className="hero-img-container">
      {skills.map((skill) => {
        const { name, html } = skill;
        return (
          <div key={name} className="skill bubble">
            {html}
          </div>
        );
      })}
      <img src={blob} className="blob" alt="blob shape" />
      <img src={portrait} className="portrait" alt="portrait" />
    </article>
  );
};

export default HeroPortrait;
