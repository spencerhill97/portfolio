import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useGlobalContext } from "../context/GlobalContext";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveLink } = useGlobalContext();

  useEffect(() => {
    inView && setActiveLink("contact");
  }, [inView]);

  return (
    <section ref={ref} id="contact" className="contact wrapper">
      <article className="map">hello</article>
      <article className="form-div">
        <h2 className="page-title">
          <span className="tag">&lt;form&gt;</span>
          Contact Me
          <span className="tag">&lt;/form&gt;</span>
        </h2>
        <form>
          <fieldset>
            <input type="name" placeholder="Name*" required />
            <input type="email" placeholder="Email*" required />
            <input type="text" placeholder="Your message here*" required />
            <button type="submit" className="btn">
              send message
            </button>
          </fieldset>
        </form>
      </article>
    </section>
  );
};

export default Contact;
