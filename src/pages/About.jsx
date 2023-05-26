import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useGlobalContext } from "../context/GlobalContext";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveLink } = useGlobalContext();

  useEffect(() => {
    inView && setActiveLink("about");
  }, [inView]);

  return (
    <div className="about wrapper">
      <section ref={ref} id="about" className="about">
        <h2>About Me</h2>
      </section>
    </div>
  );
};

export default About;
