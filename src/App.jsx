import BackgroundHeader from "./Asset/background-header.jpg";
import LinkedIn from "./Asset/linkedin_1.svg";
import Sms from "./Asset/sms_1.svg";
import Github from "./Asset/github_1.svg";
import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import { nanoid } from "nanoid";
import Projects from "./Projects.jsx";
import ProjectItem from "./Projects.jsx";

export default function App() {
  const MyComponent = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(
          BIRDS({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 600.0,
            minWidth: 300.0,
            scale: 1.0,
            colorMode: "lerp",
            scaleMobile: 1.0,
            backgroundColor: 0x120820,
            backgroundAlpha: 1,
            color1: 0x120820,
            color2: 0xffe5cf,
          })
        );
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }, [vantaEffect]);
    return (
      <div ref={myRef}>
        <AboutMeHeading>What I Bring</AboutMeHeading>
        <AboutMePara>
          <p>Problem Solving</p>
          <p>Work Ethic</p>
          <p>Vision</p>
        </AboutMePara>
      </div>
    );
  };

  const AboutMeHeading = styled.h2`
    color: rgba(255, 229, 207, 1);
    margin: 0;
    font-size: 4em;
    padding-top: 4rem;
    text-align: center;
  `;
  const AboutMePara = styled.p`
    color: rgba(255, 229, 207, 1);
    text-align: center;
    font-size: 2em;
  `;

  const ProjectData = [
    {
      title: "I am number 1",
      description: "finish the portfolio",
      figma: "Link",
      invision: "Link",
      github: "Link",
      website: "Link",
      artifacts: "Link",
      heroImg: BackgroundHeader,
      id: "one",
    },
    {
      title: "I am number 2",
      description: "finish the portfolio",
      figma: "Link",
      invision: "Link",
      github: "Link",
      website: "Link",
      artifacts: "Link",
      heroImg: BackgroundHeader,
      id: "two",
    },
    {
      title: "I am index 3",
      description: "finish the portfolio",
      figma: "Link",
      invision: "Link",
      github: "https://jonpynes.com/",
      website: "Link",
      artifacts: "Link",
      heroImg: BackgroundHeader,
      id: "three",
    },
  ];

  return (
    <>
      <HeaderBackgroundCSS>
        <HeaderContainerCSS>
          <section>
            {/* Social connect logos */}
            <IconAlignmentCSS>
              <IconForEachCSS>
                <a href="https://www.linkedin.com/in/jonpynes" target="_blank">
                  <img src={LinkedIn} alt="LinkedIn" />
                </a>
              </IconForEachCSS>
              <IconForEachCSS>
                <a href="sms:4027304258">
                  <img
                    src={Sms}
                    alt="Text SMS"
                    class="contact-logo-sms-image"
                  />
                </a>
              </IconForEachCSS>
              <IconForEachCSS>
                <a href="https://github.com/JonathanPynes" target="_blank">
                  <img
                    src={Github}
                    alt="GitHub"
                    class="contact-logo-github-image"
                  />
                </a>
              </IconForEachCSS>
            </IconAlignmentCSS>
          </section>
        </HeaderContainerCSS>
      </HeaderBackgroundCSS>
      <MyComponent></MyComponent>
      <ProjectItem projects={ProjectData} />
      <IframeContainer>
        <Iframe
          class="video-iframe"
          src="https://www.youtube.com/embed/x4an-O8e_oU?rel=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Iframe>
      </IframeContainer>
    </>
  );
}

// const MyComponentCSS = styled.div`
//   display: flex;
//   align-items: center;
// `;

const HeaderBackgroundCSS = styled.section`
  background-image: url(${BackgroundHeader});
  display: block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
`;

const HeaderContainerCSS = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
`;

const IconAlignmentCSS = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0.5rem;
  align-items: flex-end;
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
`;

const IconForEachCSS = styled.a`
  margin: 1rem;
`;

const IframeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: rgba(18, 8, 32, 1);
`;

//this Iframe is fubar - fix later when doing responsive
const Iframe = styled.iframe`
  width: 100vw;
  height: 100vh;
  border: none;
  align-content: center;
  align-self: center;

  @media (min-width: 768px) {
    height: 80%;
    width: 80%;
    object-fit: contain;
  }
`;
