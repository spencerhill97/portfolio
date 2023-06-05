import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useInView } from "react-intersection-observer";
import portrait from "../images/portrait.webp";
import wave from "../images/handWave.webp";
import Typed from "typed.js";

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
      strings: ["we", "Web Devele", "Web Developer"],
      typeSpeed: 150,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="hero wrapper">
      <section ref={ref} id="home" className="home">
        <article>
          <div className="bio">
            <p className="intro">
              Hello <img src={wave} className="hand" alt="wave" />, I'm
            </p>
            <h1 className="name">Spencer Hill</h1>
            <h3 className="occupation">
              a Chicago based <span className="span" ref={textRef}></span>
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
        </article>
        <figure>
          <img src={portrait} className="portrait" alt="portrait" />
        </figure>
      </section>
    </div>
  );
};

export default Hero;
