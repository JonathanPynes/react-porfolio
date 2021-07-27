import BackgroundHeader from "./Asset/background-header.jpg";
import LinkedIn from "./Asset/linkedin_1.svg";
import Sms from "./Asset/sms_1.svg";
import Github from "./Asset/github_1.svg";
import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";

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
          minHeight: 450.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x120820,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <div ref={myRef}>Foreground content goes here</div>;
};

function App() {
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
    </>
  );
}

const MyComponentCSS = styled.section`
  height: 100vh;
`;

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

export default App;
