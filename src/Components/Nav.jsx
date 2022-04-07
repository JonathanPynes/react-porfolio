import LinkedIn from "../Asset/linkedin_1.svg";
import Github from "../Asset/github_1.svg";
import styled from "styled-components/macro";
import React, { useState, useEffect, useRef } from "react";

export default function Header() {

  const socialMedia = [
    {
      link: "https://www.linkedin.com/in/jonpynes",
      src: LinkedIn,
      alt: "LinkedIn"
    },
    {
      link: "https://github.com/JonathanPynes",
      src: Github,
      alt: "Github"
    },
  ]



  return (
    <>
    <HeaderCSS>
        <div>
          <h1>Jon Pynes</h1>
        </div>
            {/* Social logos */}
            <IconAlignmentCSS>
              { socialMedia.map((soc) => {
                return (
              <a href={soc.link} target="_blank" rel="noreferrer">
                  <img src={soc.src} alt={soc.alt} />
                </a>
              )})}
            </IconAlignmentCSS>
     </HeaderCSS>
    </>
  );
}

const HeaderCSS = styled.nav`
display: flex;
justify-content: space-between;
position: sticky;
align-items: center;

 h1 {
   margin: 0 3rem 0 3rem;
   color: rgb(255,229,207);
   font-size: 3rem;
 }
`
const IconAlignmentCSS = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3rem;
  align-items: flex-end;
  
 
  a {
  transition: background-color 690ms;
  margin: 1rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  &:hover {
    background-color: rgba(120, 45, 200, 1);
    border-radius: 50%;
  }
}
`;
