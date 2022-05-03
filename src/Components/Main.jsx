import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components/macro";

export default function MainContent() {


  return (
    <MainContentCSS>
    <h2>About:</h2>
    <p>
I enjoy creative endeavors such as painting, drones, photography, entrepreneurship, and experience engineering.   
Vienna is my oldest at 3 and my son Dominick is 9 months.
AI, AR, Blockchain, and Web 3.0 are the most interesting frontiers to develop on.
</p>
    </MainContentCSS>
  )
}

const MainContentCSS = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 1rem;
font-family: Poppins;
line-height: 2rem;
  h2 {
    font-size: 2.8rem;
    margin: 0;
    padding: 2.4rem 1rem;
  }
  p {
    font-size: 1.8rem;
    line-height: 2.4rem;
    margin: 0;
    padding: 1rem;
  }
`