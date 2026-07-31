import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo.png";
import "../css/Navbar.css";

function Navigation() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  const linkClass = ({ isActive }) =>
    isActive ? "site-nav-link active" : "site-nav-link";

  return (
    <nav className="site-nav">
      <NavLink to="/" className="site-nav-logo" onClick={close}>
        <img src={logo} alt="Antonella Domenez" />
      </NavLink>

      <button
        className="site-nav-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <FaTimes size={18} /> : <FaBars size={18} />}
      </button>

      <div className={`site-nav-links ${open ? "open" : ""}`}>
        <NavLink to="/" className={linkClass} onClick={close}>
          Home
        </NavLink>
        <NavLink to="/about-me" className={linkClass} onClick={close}>
          About Me
        </NavLink>
        <NavLink to="/portfolio" className={linkClass} onClick={close}>
          Portfolio
        </NavLink>
        <NavLink to="/contact" className={linkClass} onClick={close}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;