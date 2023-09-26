import React, { useContext } from "react";
import "./Modal.css";
// import Closebtn from "@iconscout/react-unicons/icons/uil-trash";
import Closebtn from "../../img/close.png";
import { themeContext } from "../../Context/Context";
const Modal = ({ title, info, github, liveDemo, stack, date, img, ind }) => {
  const theme = useContext(themeContext);
  const closeClick = () => {
    theme.dispatch({ type: "hideModal" });
  };
  return (
    <>
      {/* Component Main Containter */}
      <div className="m-wraper" key={ind}>
        {/* Left Side */}
        <div className="m-left">
          {/* Info Div */}
          <div className="m-info">
            <h1>{title}</h1>
            <h3>{info}</h3>
          </div>
          {/* Project Links */}
          <div className="m-links">
            <a href={github} target={"_blank"} rel="noreferrer">
              GitHub
            </a>
            <a href={liveDemo} target={"_blank"} rel="noreferrer">
              LiveDemo
            </a>
          </div>
          {/* TECH Stack */}
          <div className="m-stack">
            {stack.map((el) => {
              return <span>{el}</span>;
            })}
          </div>
          {/* Date*/}
          <div className="m-date">
            <span>{date}</span>
          </div>
        </div>
        {/* Right Side */}
        <div className="m-right">
          <img src={img} alt="Kryptic" />
        </div>
        <div className="btn-close" onClick={closeClick}>
          <img src={Closebtn} alt="CloseBtn" />
        </div>
      </div>
    </>
  );
};

export default Modal;
