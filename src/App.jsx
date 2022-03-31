import BackgroundHeader from "./Asset/background-header.jpg";
import Header from "./Components/Header";
import styled from "styled-components/macro";
import React, { useState, useEffect, useRef } from "react";


export default function App() {

  return (
    <>
      <BackgroundCSS>
          
            <Header />
          
      </BackgroundCSS>
    </>
  );
}


const BackgroundCSS = styled.section`
  background-image: linear-gradient(
    rgba(0, 0, 75, 0.85), 
    rgba(50, 15, 150, 0.85),
    rgba(100, 30, 175, 0.85),
    rgba(150, 45, 200, 0.85)
  ), url(${BackgroundHeader});
  display: block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh; 
`;






