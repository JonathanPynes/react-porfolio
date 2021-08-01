import React, { useState } from "react";
import Github from "./Asset/github_1.svg";
import styled from "styled-components";
import BackgroundHeader from "./Asset/background-header.jpg";
import LeftButton from "./Asset/left_button.png";
import RightButton from "./Asset/right_button.png";

const ProjectItem = ({ projects }) => {
  const [current, setCurrent] = useState(0);
  const length = ProjectItem.length;

  const nextProject = () => {
    setCurrent(current === length + 1 ? 0 : current + 1);
  };

  const prevProject = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <ProjectsSectionTopCSS>
      {projects.map((projects, index) => {
        return (
          <div key={index}>
            {index === current && (
              <Test>
                <LeftButtonCSS src={LeftButton} alt="" onClick={prevProject} />
                <ProjectSectionInnerCSS>
                  {projects.title}
                  {projects.description}
                </ProjectSectionInnerCSS>
                <RightButtonCSS
                  src={RightButton}
                  alt=""
                  onClick={nextProject}
                />
              </Test>
            )}
          </div>
        );
      })}
    </ProjectsSectionTopCSS>
  );
};
const Test = styled.div`
display: flex:
flex-direction: row;

`;

const ProjectSectionInnerCSS = styled.div`
  display: grid;
  width: 100%;
  height: 80vh;
  justify-content: center;
`;

const ProjectsSectionTopCSS = styled.section`
  background-color: rgba(18, 8, 32, 1);
  color: rgba(255, 229, 207, 1);
  width: 100%;
  height: ;
`;
const LeftButtonCSS = styled.img`
  width: 1rem;
  position: relative;
  top: 50%;
  margin-left: 1rem;
  justify-content: center;
  align-items: center;
  object-fit: contain;
`;
const RightButtonCSS = styled.img`
  width: 1rem;
  position: relative;
  top: 50%;
  margin-right: 1rem;
  justify-content: center;
  align-items: center;
  object-fit: contain;
`;

const HeroImgCSS = styled.img`
  height: 50rem;
  width: auto;
  object-fit: contain;
  margin-left: 2m;
`;

export default ProjectItem;
