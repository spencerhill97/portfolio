import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useInView } from "react-intersection-observer";
import img from "../images/portrait.webp";

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveLink } = useGlobalContext();

  useEffect(() => {
    inView && setActiveLink("home");
  }, [inView]);

  return (
    <div className="hero wrapper">
      <section ref={ref} id="home" className="home">
        <article>
          <div className="bio">
            <p className="intro">Hello, I'm</p>
            <h1 className="name">Spencer Hill</h1>
            <h3 className="occupation">
              a Chicago based <span>Web Developer</span>
            </h3>
          </div>
          <div className="btn-container">
            <form action="#contact">
              <button type="submit" className="hire btn">
                hire me
              </button>
            </form>
            <form action="#projects">
              <button type="submit" className="portfolio btn">
                portfolio
              </button>
            </form>
          </div>
        </article>
        <figure>
          <img src={img} alt="portrait" />
        </figure>
      </section>
    </div>
  );
};

export default Hero;
