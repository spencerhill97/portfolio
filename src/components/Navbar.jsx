import { links } from "../data/links";
import { useGlobalContext } from "../context/GlobalContext";

const Navbar = () => {
  const { activeLink } = useGlobalContext();

  return (
    <div className="nav-wrapper">
      <nav id="navbar" className="navbar">
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
    </div>
  );
};

export default Navbar;
