import React, { useContext } from "react";
import "./About.css";
import Card from "../../Components/Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context/Context";
import { motion } from "framer-motion";
import Resume from "./Naminder Kumar Resume.pdf";

const About = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="about" id="About">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        {/* Section Title */}
        <div className="st-title">
          <span style={{ color: darkMode ? "white" : "" }}>About </span>
          <span>Me</span>
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span></span>
        <span className="sub-title">
          Driven by a constant desire to learn, create and make an impact in the world of web development.
          <br></br>
          Specialized in Front-End Developer. 
          <br />
          Based In Bhopal, India
        </span>
        <a
          href={Resume}
          download
          target={"_blank"}
          rel="noreferrer"
          className="cv-btn"
        >
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Problem Solving"}
            detail={
              " Possess a good set of problem solving skills. Willing to adapt."
            }
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={
              "Write code that’s self explanatory, easy to maintain, easily understandable and Optimised."
            }
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={
              "Design applications in a way that best serves the users. Aim for Progress."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default About;
