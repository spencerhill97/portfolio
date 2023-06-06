import { links } from "../data/links";
import { useGlobalContext } from "../context/GlobalContext";

const Navbar = ({ className }) => {
  const { activeLink } = useGlobalContext();

  return (
    <nav id="navbar" className={`navbar ${className}`}>
      <ul>
        {links.map((link) => {
          const { id, name, route } = link;
          return (
            <li key={id} className={`${activeLink == id ? "active" : ""}`}>
              <a className="link" href={route}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
