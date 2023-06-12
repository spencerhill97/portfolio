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
    <section ref={ref} id="projects" className="projects wrapper">
      {/* <h2 className="page-title">Featured Projects</h2> */}
      <article className="projects-list">
        {projects.map((project, index) => {
          const { id, name, image, description, github, website, skills } =
            project;
          return (
            <div
              key={id}
              className="project"
              style={{
                flexDirection: index % 2 === 0 ? "row-reverse" : "row",
              }}
            >
              <figure>
                <img src={image} className="project-pic" alt="" />
              </figure>
              <div
                className="card"
                style={{
                  textAlign: index % 2 === 0 ? "left" : "right",
                  alignItems: index % 2 === 0 ? "flex-start" : "flex-end",
                }}
              >
                <div
                  className={`overlay-shadow ${
                    index % 2 === 0 ? "even" : "odd"
                  }`}
                  style={{
                    left: index % 2 === 0 ? "-10px" : "10px",
                  }}
                ></div>
                <div className="content">
                  <h3 className="project-name">{name}</h3>
                  <p className="description">{description}</p>
                  <div
                    className="tech-and-code"
                    style={{
                      flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                    }}
                  >
                    <div className="tech-stack">
                      {skills.map((skill) => {
                        const { name, html } = skill;
                        return <span key={name}>{html}</span>;
                      })}
                    </div>
                    <div className="code-container">
                      <a className="project-link" href={github}>
                        <BsGithub /> code
                      </a>
                      <a className="project-link" href={website}>
                        <TbWorldWww /> demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Projects;
