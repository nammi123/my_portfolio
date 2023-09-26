import React from "react";
import "./ProjectCard.css";
import { Link } from "react-scroll";
const ProjectCard = ({ img, title, onClickImg, ind }) => {
  return (
    <>
      <div className="pc-wraper">
        {img.map((el, ind) => {
          return (
            <div key={ind}>
              <img src={el} alt="a" />
              <Link to="Projects" spy={true} smooth={true}>
                <button className="button pc-btn" id={ind} onClick={onClickImg}>
                  Know More
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectCard;
