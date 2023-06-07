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
      strings: ["Frontend Developer", "Web Developer"],
      typeSpeed: 175,
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
            Hello <img src={wave} className="hand" alt="wave" />, I'm
          </p>
          <h1 className="name">Spencer Hill</h1>
          <h3 className="occupation">
            a <span className="span" ref={textRef}></span>
          </h3>
        </div>
      </article>
      <article>
        <figure>
          <img src={portrait} className="portrait" alt="portrait" />
        </figure>
      </article>
    </section>
  );
};

export default Hero;
