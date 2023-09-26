import React, { useContext, useState } from "react";
import "./Projects.css";
import "swiper/css";
import { themeContext } from "../../Context/Context";
import Modal from "../../Components/Modal/Modal";
import ProjectsInfo from "./ProjectsInfo";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";

const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const modals = theme.state.modal;
  const [imgId, setImgId] = useState(0);

  const onClickImg = (e) => {
    setImgId((prev) => (prev = e.target.id));
    theme.dispatch({ type: "showModal" });
  };

  return (
    <>
      <div className="p-wraper">
        <div className={`${modals ? "learnMore" : "portfolio"}`} id="Projects">
          {/* heading */}
          {/* Section Title */}
          <div className="st-title">
            <span style={{ color: darkMode ? "white" : "" }}>Projects </span>
            <span>Portfolio</span>
          </div>
          <div className="p-gallary">
            {ProjectsInfo.map((el, ind) => {
              return (
                <ProjectCard
                  img={el["thumbnail"]}
                  onClickImg={onClickImg}
                  ind={ind}
                  key={ind}
                />
              );
            })}
          </div>
        </div>
        {modals && (
          <div className="p-modal">
            {ProjectsInfo.map((el, ind) => {
              return (
                <Modal
                  title={el["title"][imgId]}
                  info={el["info"][imgId]}
                  github={el["github"][imgId]}
                  liveDemo={el["liveDemo"][imgId]}
                  stack={el["stack"][imgId]}
                  date={el["date"][imgId]}
                  img={el["thumbnail"][imgId]}
                  ind={ind}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
