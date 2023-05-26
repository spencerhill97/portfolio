import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useGlobalContext } from "../context/GlobalContext";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveLink } = useGlobalContext();

  useEffect(() => {
    inView && setActiveLink("projects");
  }, [inView]);

  return (
    <div className="projects wrapper">
      <section ref={ref} id="projects" className="projects">
        <h2>Projects</h2>
      </section>
    </div>
  );
};

export default Projects;
