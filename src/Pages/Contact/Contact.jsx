import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context/Context";
import ContactInfo from "./ContactInfo";
import FormCard from "../../Components/FormCard/FormCard";
import { motion } from "framer-motion";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {
    duration: 1,
    type: "spring",
  };
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cutfy3t",
        "template_xrbejy6",
        form.current,
        "lKQL1pa_QKIazmLLE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="Contact">
      {/* left side copy and paste from work section */}
      <div className="c-title">
        <span style={{ color: darkMode ? "white" : "" }}>Contact </span>
        <span>Me</span>
      </div>
      <div className="c-detail">
        {/* Contact Detalis Section */}
        <div className="cd-left">
          {/* FormCard */}
          <div className="cd-card">
            {ContactInfo.map((el, ind) => {
              return (
                <>
                  <motion.div
                    initial={{ left: "-5rem", top: "3rem" }}
                    whileInView={{ left: "5rem", top: "3rem" }}
                    transition={transition}
                  >
                    <FormCard
                      icon={el["icon"][0]}
                      title={el["title"][0]}
                      subtitle={el["subtitle"][0]}
                      link={el["link"][0]}
                      key={ind}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ left: "-13rem", top: "10.5rem" }}
                    whileInView={{ left: "-8rem", top: "10.5rem" }}
                    transition={transition}
                  >
                    <FormCard
                      icon={el["icon"][1]}
                      title={el["title"][1]}
                      subtitle={el["subtitle"][1]}
                      link={el["link"][1]}
                      key={ind}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ top: "18rem", left: "15rem" }}
                    whileInView={{ left: "5rem", top: "18rem" }}
                    transition={transition}
                  >
                    <FormCard
                      icon={el["icon"][2]}
                      title={el["title"][2]}
                      subtitle={el["subtitle"][2]}
                      link={el["link"][2]}
                      key={ind}
                    />
                  </motion.div>
                </>
              );
            })}
          </div>
        </div>
        <div className="c-right">
          <p style={{ color: darkMode ? "white" : "" }}>
            Like what you see ? <br /> Let’s work together !
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder="Name"
            />
            <input
              type="email"
              name="user_email"
              className="user"
              placeholder="Email"
            />
            <textarea name="message" className="user" placeholder="Message" />
            <input type="submit" value="Send" className="button f-btn" />
            <span>{done && "Thanks for Contacting me"}</span>
            <div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>
      {/* right side form */}
    </div>
  );
};

export default Contact;
