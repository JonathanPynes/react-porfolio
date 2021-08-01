import React, {useState} from "react";
import Github from "./Asset/github_1.svg";
import styled from "styled-components";
import BackgroundHeader from "./Asset/background-header.jpg";
import LeftButton from "./Asset/left_button.png";
import RightButton from "./Asset/right_button.png";


const ProjectItem = ({projects}) => {

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
    <LeftButtonCSS src={LeftButton} alt="" onClick={prevProject} />
     {projects.map((projects, index) => {
        return (
          <div key={index}> 
          {index === current && <div> 
            <div>{projects.title}{projects.description}</div></div>}
          </div>
        );
      })}
      <RightButtonCSS src={RightButton} alt="" onClick={nextProject} />
    </ProjectsSectionTopCSS>
  );
};


const ProjectsSectionTopCSS = styled.section`
  display: flex;
  flex-direction: row;
  background-color: rgba(18, 8, 32, 1);
  color: rgba(255, 229, 207, 1);
  width: 100%;
  height: 100vh;
`;
const LeftButtonCSS = styled.img`
 width: 1rem; 
 postion: relative;
 top: 50%;
 margin: 2rem;
 justify-content: center;
 align-items: center;
 object-fit: contain;

`
const RightButtonCSS = styled.img`
 width: 1rem;
 postion: relative;
 top: 50%;
 margin: 2rem;
 justify-content: center;
 align-items: center;
 object-fit: contain;

`

const HeroImgCSS = styled.img`
  height: 50rem;
  width: auto;
  object-fit: contain;
  margin-left: 2m;
`;


export default ProjectItem;
