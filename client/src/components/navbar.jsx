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
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} data-aos="fade-up">
      <Link to="/">
        <img src={Logo} alt="Logo" className="nav-logo " />
      </Link>

      <ul className="nav-links">
        <li>
          <a href="#features" className="nav-items">
            Features
          </a>
        </li>
        <li>
          <a href="#works" className="nav-items">
            How it works?
          </a>
        </li>
        <li>
          <a href="#faq" className="nav-items">
            FAQ
          </a>
        </li>
      </ul>
      <div className="nav-items">
        <button className="nav-button">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
