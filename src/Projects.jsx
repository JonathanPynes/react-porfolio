import React from "react";
import Github from "./Asset/github_1.svg";
import styled from "styled-components";
import BackgroundHeader from "./Asset/background-header.jpg";

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
      <ProjectsSectionTopCSS>
        <div>
          <div>
            <div>
              <p>{title}</p>
              <p>{description}</p>
            </div>
            <div>
              <HeroImgContainerCSS>
                <HeroImgCSS src={heroImg} alt="" />
              </HeroImgContainerCSS>
              <a href={ProjectItem.github}>
                <img src={github} alt="" />
              </a>
            </div>
          </div>
        </div>
      </ProjectsSectionTopCSS>
    </>
  );
};

const HeroImgContainerCSS = styled.div`
  width: 40%;
  height: 40%;
`;

const HeroImgCSS = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
const ProjectsSectionTopCSS = styled.section`
  display: flex;
  flex-direction: row;
`;

export default ProjectItem;
