import { links } from "../data/links";

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar">
      {links.map((link) => {
        const { id, name, route } = link;
        return (
          <a key={id} href={route}>
            {name}
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;
