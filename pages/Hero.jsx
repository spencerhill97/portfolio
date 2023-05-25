import img from "../images/portrait.webp";

const Hero = () => {
  return (
    <div id="home" className="home wrapper">
      <section id="home" className="hero">
        <article>
          <div className="bio">
            <p className="intro">Hello, I'm</p>
            <h1 className="name">Spencer Hill</h1>
            <h3 className="occupation">
              a Chicago based <span>Web Developer</span>.
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
