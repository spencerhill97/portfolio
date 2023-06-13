import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useInView } from "react-intersection-observer";
import wave from "../images/handWave.webp";
import Typed from "typed.js";
import HeroPortrait from "../components/HeroPortrait";
import { FaTelegramPlane } from "react-icons/fa";
import { MdWork } from "react-icons/md";

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
      strings: ["Frontend Developer.", "Web Developer."],
      typeSpeed: 125,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section ref={ref} id="home" className="home wrapper">
      <article>
        <div className="bio">
          <p className="intro">
            Hi! <img src={wave} className="wave" alt="hand wave" /> I am
          </p>
          <h1 className="name">Spencer Hill</h1>
          <h3 className="occupation">
            a <span className="span" ref={textRef}></span>
          </h3>
        </div>
        <div className="btn-container">
          <form id="contact-btn" action="#contact">
            <button type="submit" className="hire btn">
              hire me <FaTelegramPlane />
            </button>
          </form>
          <form id="projects-btn" action="#projects">
            <button type="submit" className="portfolio btn">
              my work <MdWork />
            </button>
          </form>
        </div>
      </article>
      <HeroPortrait />
    </section>
  );
};

export default Hero;
