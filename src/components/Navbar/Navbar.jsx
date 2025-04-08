import { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { id: "accueil", label: "Accueil" },
    { id: "à propos", label: "À propos" },
    { id: "cv", label: "CV" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h1 className="navbar__logo">MSZ</h1>

        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar__hamburger" onClick={toggleMenu}>
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {open && (
        <div className="navbar__mobile-menu">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={closeMenu}
              className="navbar__mobile-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
