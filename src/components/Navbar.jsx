import { links } from "../data/links";
import { useGlobalContext } from "../context/GlobalContext";

const Navbar = () => {
  const { activeLink } = useGlobalContext();

  return (
    <div className="nav-wrapper">
      <nav id="navbar" className="navbar">
        {links.map((link) => {
          const { id, name, route } = link;
          return (
            <a
              key={id}
              className={activeLink == id ? "active" : ""}
              href={route}
            >
              {name}
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
