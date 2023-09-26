import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Messenger from "@iconscout/react-unicons/icons/uil-facebook-messenger";
import Mail from "@iconscout/react-unicons/icons/uil-envelope";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>©2023 Akshatha B. All rights are reserved.</span>
        <div className="f-icons">
          <a
            href="https://api.whatsapp.com/send?phone=9036482474"
            target={"_blank"}
            rel="noreferrer"
          >
            <Whatsapp color="white" size={"3rem"} />
          </a>
          <a
            href="https://m.me/akshatha.akshatha.3192479"
            target={"_blank"}
            rel="noreferrer"
          >
            <Messenger color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.linkedin.com/in/akshatha-b-31b730217/"
            target={"_blank"}
            rel="noreferrer"
          >
            <Linkedin color="white" size={"3rem"} />
          </a>
          <a
            href="https://github.com/Akshatha2023"
            target={"_blank"}
            rel="noreferrer"
          >
            <Gitub color="white" size={"3rem"} />
          </a>
          <a
            href="mailto:akshatha1410@gmail.com"
            target={"_blank"}
            rel="noreferrer"
          >
            <Mail color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
