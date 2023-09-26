import React from "react";
import "./NavMobile.css";
import { Link } from "react-scroll";
import Home from "@iconscout/react-unicons/icons/uil-home";
import About from "@iconscout/react-unicons/icons/uil-user";
import Contact from "@iconscout/react-unicons/icons/uil-envelope";
import Project from "@iconscout/react-unicons/icons/uil-suitcase";
import Resume from "./Akshatha's_Resume.pdf";
const NavMobile = () => {
  return (
    <>
      <div className="NavMobile nm-wraper" id="NavMobile">
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
              <Home color="#242d49" size={"1.5rem"} className={"nm-icon"} />
              <p className="title">Home</p>
            </Link>
          </li>
          <li>
            <Link to="About" spy={true} smooth={true}>
              <About color="#242d49" size={"1.5rem"} className={"nm-icon"} />
              <p className="title">About</p>
            </Link>
          </li>
          <li>
            <Link to="portfolio" spy={true} smooth={true}>
              <Project color="#242d49" size={"1.5rem"} className={"nm-icon"} />
              <p className="title">Project</p>
            </Link>
          </li>
          <li>
            <Link to="Contact" spy={true} smooth={true}>
              <Contact color="#242d49" size={"1.5rem"} className={"nm-icon"} />
              <p className="title">Contact</p>
            </Link>
          </li>
          <li>
            <a href={Resume} download target={"_blank"} rel="noreferrer">
              <button className="button cv-btn">CV</button>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavMobile;
