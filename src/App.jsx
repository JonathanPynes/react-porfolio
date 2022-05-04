import BackgroundHeader from "./Asset/background-header.jpg";
import SideBarContent from "./Components/SideBar";
import Nav from "./Components/Nav";
import MainContent from "./Components/Main";
import styled from "styled-components/macro";
import React, { useState, useEffect, useRef } from "react";


export default function App() {

  return (
    <>
      <Container>
      <NavBar><Nav /></NavBar>
 <Main><MainContent /></Main>
 <SideBar><SideBarContent /></SideBar>
 <ContentBox>
     <Content1>Content1</Content1>
     <Content2>Content2</Content2>
     <Content3>Content3</Content3>
 </ContentBox>
 <Footer>Footer</Footer>
      </Container>
    </>
  );
}


const Container = styled.div`
  display: grid;
  height: 100vh;
  color: white;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr 0.2fr;
grid-template-areas:
    "nav nav nav nav"
    "sidebar main main main"
    "sidebar content content content"
    "sidebar content content content"
    "footer footer footer footer";
text-align: flex-start;
grid-gap: 0.25rem;

@media (max-width: 768px) {
  grid-template-rows: "";
  grid-template-columns: 1fr;
  overflow-x: hidden;
  grid-template-areas:
    "nav"
    "main"
    "sidebar"
    "content"
    "content"
    "content" 
    "footer";
}

`;

const NavBar = styled.nav`
  background: transparent;
  filter: blur;
  border-style: solid;
  border-color: black;
  grid-area: nav;
  padding: 0.35rem;
`;
const Main = styled.main`
background: transparent;
border-style: solid;
  border-color: black;
  grid-area: main;
  padding: 0.35rem;
`;
const SideBar = styled.div`
background: transparent;
border-style: solid;
  border-color: black;
  grid-area: sidebar;
  padding: 0.35rem;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
  }
`;
const Content1 = styled.div`
background: transparent;
border-style: solid;
  border-color: black;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;
const Content2 = styled(Content1)``;
const Content3 = styled(Content1)``;
const Footer = styled.footer`
background: transparent;
border-style: solid;
  border-color: black;
  grid-area: footer;
  padding: 0.25rem;
  
  @media (max-width: 768px) {
    height: 4rem;
  }
`;



