import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useGlobalContext } from "../context/GlobalContext";
import portrait from "../images/portraitAboutPage.webp";
import { ImGithub } from "react-icons/im";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveLink } = useGlobalContext();

  useEffect(() => {
    inView && setActiveLink("about");
  }, [inView]);

  return (
    <section ref={ref} id="about" className="about wrapper">
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
        <figure className="about-img-container">
          <span className="border-design"></span>
          <img className="about-pic portrait" src={portrait} alt="portrait" />
        </figure>
      </article>
      <article>
        <h2 className="page-title">
          <span className="hashtag">#</span>About Me
        </h2>
        <div>
          <p className="about-description">
            <span className="first-word">Hi!</span> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Obcaecati sunt corrupti ad incidunt
            sapiente <span className="emphasis">passionate</span> ea eius rem
            porro. Maxime libero quas itaque laboriosam, cumque aliquid unde{" "}
            recusandae tenetur. Autem alias culpa mollitia, tempora aut, sunt,
            ab molestiae rerum <span className="emphasis">experienced</span> ut
            atque?
          </p>
        </div>
        <div className="skills-container">
          <i className="devicon-html5-plain-wordmark colored"></i>
          <i className="devicon-css3-plain-wordmark colored"></i>
          <i className="devicon-javascript-plain colored js"></i>
          <i className="devicon-react-original colored"></i>
          <i className="devicon-nodejs-plain colored"></i>
          <i className="devicon-tailwindcss-plain colored"></i>
          <i className="devicon-sass-original colored"></i>
          <i className="devicon-mongodb-plain-wordmark colored"></i>
        </div>
      </article>
    </section>
  );
};

export default About;
