import SideBarContent from "./Components/SideBar";
import Nav from "./Components/Nav";
import MainContent from "./Components/Main";
import styled from "styled-components/macro";
import ContentOne from "./Components/ContentOne";
import useFetchBitcoin from "./API/useFetchBitcoin";
import React, { useState, useEffect, useRef } from "react";
import UC from "./Asset/underConstruction.jpeg"

export default function App() {

  return (
    <>
    <Container UC={UC}>
      <Flex>
      <span role="img" aria-label="wave">👋</span> 
      <h1>Currently Under Re-Construction</h1>
      <span role="img" aria-label="wave">🛠</span>
      </Flex>
     </Container>
    </>
  );
}

const Container = styled.div`
background-color: rgba(55, 55, 55, 0.8);
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`


const Flex = styled.div`
display: flex;
  span{
  font-size: 70px;
}
   h1{
     color: #EFEFEF;
     padding: 7px 0 0 10px;
   }
`


