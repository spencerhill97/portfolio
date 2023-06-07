import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useGlobalContext } from "../context/GlobalContext";
import portrait from "../images/portraitAboutPage.webp";
import { skills } from "../data/Skills";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveLink } = useGlobalContext();

  useEffect(() => {
    inView && setActiveLink("about");
  }, [inView]);

  const removeName = (e) => {
    e.target.setAttribute("style", "margin-right: 0");
  };

  return (
    <section ref={ref} id="about" className="about wrapper">
      <article>
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
      </article>
    </section>
  );
};

export default About;
