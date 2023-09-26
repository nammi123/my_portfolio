import React, { useContext } from "react";
import "./Skills.css";
import ReactIcon from "../../img/icons/React.svg";
//
import HTML from "../../img/icons/HTML.svg";
import CSS from "../../img/icons/CSS.svg";
import Javascript from "../../img/icons/JavaScript.svg";
import ReduxIcon from "../../img/icons/Redux.svg";
import MaterialUi from "../../img/icons/MaterialUI.svg";
import BootStrap from "../../img/icons/Bootstrap5.svg";
//
import NodeJs from "../../img/icons/Node.js.svg";
import Express from "../../img/icons/Express.svg";
import Mongo from "../../img/icons/MongoDB.svg";
import Git from "../../img/icons/GIT.svg";
import GitHub from "../../img/icons/Github.svg";
import Tailwind from "../../img/icons/tailwing.png";
import Npm from "../../img/icons/npm.png";

import { themeContext } from "../../Context/Context";
import { motion } from "framer-motion";
const Skills = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <>
      <div className="Skill" id="Skills">
        {/* left side */}
        <div className="w-left">
          <div className="st-title">
            <span style={{ color: darkMode ? "white" : "" }}>Skills &</span>
            <span>Tools</span>
          </div>
          <div className="awesome">
            {/* dark Mode */}
            {/* <span style={{ color: darkMode ? "white" : "" }}>
              Skills for All these
            </span>
            <span>Brands & Clients</span> */}
            {/* <spane>
              Lorem ispum is simpley dummy text of printing of printing Lorem
              <br />
              ispum is simpley dummy text of printingLorem ispum is simpley
              dummy text
              <br />
              y dummy text of printingLorem
              <br />
              ispum is simpley dummy text of printing
            </spane> */}
            {/* <Link to="contact" smooth={true} spy={true}>
              <button className="button s-button">Hire Me</button>
            </Link> */}
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>

          {/* right side */}
        </div>
        <div className="tools">
          <div className="w-right">
            <motion.div
              initial={{ rotate: 45 }}
              whileInView={{ rotate: 0 }}
              viewport={{ margin: "-40px" }}
              transition={{ duration: 3.5, type: "spring" }}
              className="w-mainCircle"
            >
              <div className="w-secCircle">
                <img src={ReactIcon} alt="" />
                <span>React</span>
              </div>
              <div className="w-secCircle">
                <img src={CSS} alt="" />
                <span>CSS</span>
              </div>
              <div className="w-secCircle">
                <img src={Javascript} alt="" />
                <span>Javascript </span>
              </div>
              <div className="w-secCircle">
                <img src={ReduxIcon} alt="" />
                <span>Redux</span>
              </div>
              <div className="w-secCircle">
                <img src={BootStrap} alt="" />
                <span>BootStrap</span>
              </div>
              <div className="w-secCircle">
                <img src={HTML} alt="" />
                <span>HTML</span>
              </div>
              <div className="w-secCircle">
                <img src={MaterialUi} alt="" />
                <span>MaterialUI</span>
              </div>
            </motion.div>
            {/* background Circles */}
            {/* <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div> */}
          </div>
          {/* SECOND TOOL SHOWCASE */}
          <div className="w-right">
            <motion.div
              initial={{ rotate: 45 }}
              whileInView={{ rotate: 0 }}
              viewport={{ margin: "-40px" }}
              transition={{ duration: 3.5, type: "spring" }}
              className="w-mainCircle"
            >
              <div className="w-secCircle">
                <img src={Mongo} alt="" />
                <span>MongoDB</span>
              </div>
              <div className="w-secCircle">
                <img src={GitHub} alt="" />
                <span>GitHub</span>
              </div>
              <div className="w-secCircle">
                <img src={NodeJs} alt="" />
                <span>Node</span>
              </div>
              <div className="w-secCircle">
                <img src={Npm} alt="" />
                <span>NPM</span>
              </div>
              <div className="w-secCircle">
                <img src={Express} alt="" />
                <span>Express</span>
              </div>{" "}
              <div className="w-secCircle">
                <img src={Git} alt="" />
                <span>Git</span>
              </div>
              <div className="w-secCircle">
                <img src={Tailwind} alt="" />
                <span>Tailwind Css</span>
              </div>
            </motion.div>
            {/* background Circles */}
            {/* <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
