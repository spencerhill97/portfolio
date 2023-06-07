import { links } from "../data/links";
import { useGlobalContext } from "../context/GlobalContext";
import SocialLinks from "./SocialLinks";
import Logo from "./Logo";

const Navbar = ({ className }) => {
  const { activeLink } = useGlobalContext();

  return (
    <nav id="navbar" className={`navbar ${className}`}>
      <Logo />
      <ul>
        {links.map((link) => {
          const { id, name, route } = link;
          return (
            <li key={id} className={`${activeLink == id ? "active" : ""}`}>
              <a className="link" href={route}>
                {name}
              </a>
              <span className={`dot ${activeLink == id ? "show" : "hide"}`}>
                {" "}
              </span>
            </li>
          );
        })}
      </ul>
      <SocialLinks />
    </nav>
  );
};

export default Navbar;
