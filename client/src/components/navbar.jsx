import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

import "./navbar.css";

import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link to="/">
        <img src={Logo} alt="Logo" className="nav-logo " />
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-items">
            Features
          </Link>
        </li>
        <li>
          <Link to="/works" className="nav-items">
            How it works?
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-items">
            FAQ
          </Link>
        </li>
      </ul>
      <div className="nav-items">
        <button className="nav-button">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
