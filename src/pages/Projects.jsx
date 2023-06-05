import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useGlobalContext } from "../context/GlobalContext";
import { BsGithub } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import { projects } from "../data/projects";

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
      {/* <section ref={ref} id="projects" className="projects wrapper">
        <h2 className="page-title">Projects</h2>
        <article className="projects-list">
          {projects.map((project) => {
            const { id, name, image, description, github, website } = project;
            return (
              <div key={id} className="project">
                <div className="card">
                  <figure>
                    <img src={image} className="project-pic" alt="" />
                  </figure>
                  <h3 className="project-name">{name}</h3>
                  <p className="description">{description}</p>
                </div>
                <div className="code-container">
                  <a href={github}>
                    <BsGithub />
                  </a>
                  <a href={website}>
                    <TbWorldWww />
                  </a>
                </div>
              </div>
            );
          })}
        </article>
      </section> */}
    </div>
  );
};

export default Projects;
