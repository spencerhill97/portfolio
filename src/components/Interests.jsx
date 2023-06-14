import pizza from "../images/icons/pizza.png";
import basketball from "../images/icons/basketball.png";
import volleyball from "../images/icons/volleyball.png";
import fetch from "../images/icons/fetch.png";
import concert from "../images/icons/concert.png";
import fishing from "../images/icons/fishing.png";
import workout from "../images/icons/workout.png";

const Interests = () => {
  return (
    <article className="interests">
      <div className="hobbies container">
        <h3>When I'm not programming...</h3>
        <ul className="hobbies-list">
          <li>
            <img className="hobby-icon" src={fetch} alt="fetch" />
          </li>
          <li>
            <img className="hobby-icon" src={basketball} alt="basketball" />
          </li>
          <li>
            <img className="hobby-icon" src={volleyball} alt="volleyball" />
          </li>
          <li>
            <img className="hobby-icon" src={workout} alt="workout" />
          </li>
          <li>
            <img className="hobby-icon" src={fishing} alt="fishing" />
          </li>
          <li>
            <img className="hobby-icon" src={pizza} alt="pizza" />
          </li>
          <li>
            <img className="hobby-icon" src={concert} alt="concerts" />
          </li>
        </ul>
      </div>
      <iframe
        className="spotify container"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1F0sijgNaJdgit?utm_source=generator&theme=0"
        width="100%"
        height="100%"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </article>
  );
};

export default Interests;
