import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">MyApp</Link>
          <button className="menu-toggle" onClick={toggleMenu}>
            &#9776;
          </button>
        </div>
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/upload" onClick={toggleMenu}>
              Upload Image
            </Link>
          </li>
          <li>
            <Link to="/upload" onClick={toggleMenu}>
              Upload Video
            </Link>
          </li>
          <li>
            <Link to="/upload" onClick={toggleMenu}>
              Upload Auido
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
