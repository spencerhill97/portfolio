import { links } from "../data/links";
import { useGlobalContext } from "../context/GlobalContext";
import SocialLinks from "./SocialLinks";
import Logo from "./Logo";
import { RiMenu3Fill } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import { TiHome } from "react-icons/ti";

const Navbar = () => {
  const { activeLink, screenSize, toggleNav, setToggleNav } =
    useGlobalContext();

  return (
    <nav id="navbar" className={`navbar`}>
      {screenSize.dynamicWidth >= 850 && <Logo />}
      <ul className={screenSize.dynamicWidth >= 850 ? "" : "hidden"}>
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
      {screenSize.dynamicWidth >= 850 && <SocialLinks />}
      {!(screenSize.dynamicWidth >= 850) && (
        <a href="#home" className="home-icon">
          <TiHome />
        </a>
      )}
      {!(screenSize.dynamicWidth >= 850) && (
        <div className="hamburger-menu">
          {!toggleNav ? (
            <RiMenu3Fill onClick={() => setToggleNav(!toggleNav)} />
          ) : (
            <VscChromeClose onClick={() => setToggleNav(!toggleNav)} />
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
