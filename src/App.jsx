import logo from "./logo.svg";
import BackgroundHeader from "./Asset/background-header.jpg";
import LinkedIn from "./Asset/linkedin_1.svg";
import Sms from "./Asset/sms_1.svg";
import Github from "./Asset/github_1.svg";
import styled from "styled-components";

function App() {
  return (
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
                <img src={Sms} alt="Text SMS" class="contact-logo-sms-image" />
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
  );
}

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
  position: absolute;
  top: 0;
  right: 0;
`;

const IconForEachCSS = styled.a`
  margin: 1rem;
`;

export default App;
