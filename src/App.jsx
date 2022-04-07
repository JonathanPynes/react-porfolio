import BackgroundHeader from "./Asset/background-header.jpg";
import SideBarContent from "./Components/SideBar";
import Nav from "./Components/Nav";
import styled from "styled-components/macro";
import React, { useState, useEffect, useRef } from "react";


export default function App() {

  return (
    <>
      <BackgroundCSS>
      <Container>
      <NavBar><Nav /></NavBar>
 <Main>Main</Main>
 <SideBar><SideBarContent /></SideBar>
 <ContentBox>
     <Content1>Content1</Content1>
     <Content2>Content2</Content2>
     <Content3>Content3</Content3>
 </ContentBox>
 <Footer>Footer</Footer>
      </Container>
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
  width: 100%;
`;

const Container = styled.div`
  display: grid;
  height: 100vh;
  color: white;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
grid-template-areas:
    "nav nav nav nav"
    "sidebar main main main"
    "sidebar content content content"
    "sidebar footer footer footer";
text-align: center;
grid-gap: 0.25rem;
`;

const NavBar = styled.nav`
  background: transparent;
  filter: blur;
  border-style: solid;
  border-color: black;
  grid-area: nav;
  padding: 0.25rem;
`;
const Main = styled.main`
background: transparent;
border-style: solid;
  border-color: black;
  grid-area: main;
  padding: 0.25rem;
`;
const SideBar = styled.div`
background: transparent;
border-style: solid;
  border-color: black;
  grid-area: sidebar;
  padding: 0.25rem;
`;

const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
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
`;



