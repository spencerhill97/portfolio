import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useGlobalContext } from "../context/GlobalContext";
import SkillsContainer from "../components/SkillsContainer";
import Interests from "../components/Interests";

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
      <h2 className="page-title">
        <span className="blue-gradient-text hashtag">#</span>About Me
      </h2>
      <div className="about-grid">
        <article className="rundown container">
          <h3>Rundown</h3>
          <p>
            <span className="first-word">Hi!</span> I'm a{" "}
            <span className="em">self-taught</span> developer based in{" "}
            <span className="em">Chicago, IL</span>. For the past year I've been
            learning <span className="em">Frontend Development</span> and have
            developed a strong passion for creating engaging user interfaces.
            I'm excited to continue this endless learning journey and see how
            much I can improve as a developer!
          </p>
        </article>
        <SkillsContainer />
        <Interests />
      </div>
    </section>
  );
};

export default About;
