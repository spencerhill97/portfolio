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
    <div className="contact wrapper">
      <section ref={ref} id="contact" className="contact">
        <h2>Contact Me</h2>
      </section>
    </div>
  );
};

export default Contact;
