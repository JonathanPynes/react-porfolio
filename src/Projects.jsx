import React from "react";
import Github from "./Asset/github_1.svg";
import RightButton from "./Asset/right_button.png";
import LeftButton from "./Asset/left_button.png";

const ProjectItem = (props) => {
  const {
    title,
    description,
    figma,
    invision,
    github,
    website,
    artifacts,
    heroImg,
    id,
  } = props.item;
  return (
    <>
      <div>
        <img src={LeftButton} alt="" />
        <div>
          <p>{title}</p>
          <p>{description}</p>
        </div>
        <div>
          <a href={ProjectItem.github}>
            <img src={Github} alt="" />
          </a>
        </div>
        <img src={RightButton} alt="" />
      </div>
    </>
  );
};

export default ProjectItem;
