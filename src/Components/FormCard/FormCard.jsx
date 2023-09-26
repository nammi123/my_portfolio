import React from "react";
import "./FormCard.css";

const FormCard = ({ icon, title, subtitle, link, ind }) => {
  return (
    <>
      <div className="fc-wraper" key={ind}>
        <div>{icon}</div>
        <p>{title}</p>
        <p>{subtitle}</p>
        <a href={link} target={"_blank"} rel="noreferrer">
          Send a Message
        </a>
      </div>
    </>
  );
};

export default FormCard;
