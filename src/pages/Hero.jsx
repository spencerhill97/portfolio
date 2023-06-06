import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useInView } from "react-intersection-observer";
import portrait from "../images/portrait.webp";
import wave from "../images/handWave.webp";
import Typed from "typed.js";
import { skills } from "../data/Skills";

const Hero = () => {
  const textRef = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveLink } = useGlobalContext();

  useEffect(() => {
    inView && setActiveLink("home");
  }, [inView]);

  useEffect(() => {
    const typed = new Typed(".span", {
      strings: ["Frontend Developer", "Web Developer"],
      typeSpeed: 175,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const removeName = (e) => {
    e.target.setAttribute("style", "margin-right: 0");
  };

  return (
    <section ref={ref} id="home" className="home wrapper">
      <article>
        <div className="bio">
          <p className="intro">
            Hello <img src={wave} className="hand" alt="wave" />, I'm
          </p>
          <h1 className="name">Spencer Hill</h1>
          <h3 className="occupation">
            a <span className="span" ref={textRef}></span>
          </h3>
        </div>
        <div className="btn-container">
          <form className="contact-form" action="#contact">
            <button type="submit" className="hire btn">
              hire me
            </button>
            <i className="fa-solid fa-arrow-up fa-bounce arrow hidden"></i>
          </form>
          <form className="portfolio-form" action="#projects">
            <button type="submit" className="portfolio btn">
              portfolio
            </button>
          </form>
        </div>
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
      </article>
      <article>
        <div className="social-links">
          <a
            className="social linkedin"
            href="https://www.linkedin.com/in/-spencer-hill-/"
          >
            <i className="devicon-linkedin-plain colored"></i>
          </a>
          <a className="social github" href="https://github.com/spencerhill97">
            <i className="devicon-github-original colored"></i>
          </a>
        </div>
        <figure>
          <img src={portrait} className="portrait" alt="portrait" />
        </figure>
      </article>
    </section>
  );
};

export default Hero;
