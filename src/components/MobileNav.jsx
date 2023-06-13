import { useGlobalContext } from "../context/GlobalContext";
import { links } from "../data/links";
import SocialLinks from "./SocialLinks";

const MobileNav = () => {
  const { activeLink, toggleNav } = useGlobalContext();

  return (
    <ul className={`${!toggleNav && "out-of-sight"} toggle`}>
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
      <SocialLinks />
    </ul>
  );
};

export default MobileNav;
