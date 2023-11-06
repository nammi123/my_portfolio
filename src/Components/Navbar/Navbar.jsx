import React from "react";
import Toggle from "../../Components/Tooggle/Toggle";
import "./Navbar.css";
import Resume from "./Naminder Kumar Resume.pdf";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Naminder</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="About" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="Skills" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="Contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <a href={Resume} download target={"_blank"} rel="noreferrer">
          <button className="button n-button">RESUME</button>
        </a>
      </div>
    </div>
  );
};

export default navbar;
