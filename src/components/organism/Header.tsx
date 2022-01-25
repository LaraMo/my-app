import React, { useContext } from "react";
import { Moon, Sun } from "react-feather";
import styled from "styled-components";
import face from "../../assets/face.png";
import faceDark from "../../assets/faceDark.png";
import { ThemeContext } from "../../context/theme";
import Title from "../atoms/Title";
import ToggleButton from "../atoms/ToggleButton";

const Header = () => {
  const { isDark, setTheme } = useContext(ThemeContext);

  return (
    <Parallax isDark={isDark}>
      <Container>
        <div>
          <Center>
            <Title color="palevioletred" specialFont>
              Hello!
            </Title>
            <Title>It's Lara Mo</Title>
          </Center>
          <ToggleButton
            label={"Dark Mode"}
            state={isDark}
            setState={setTheme}
            iconChecked={<Moon size={20} color="white" />}
            iconUnchecked={<Sun size={20} color="gold" />}
          />
        </div>
        <Img src={isDark ? faceDark : face} alt="logo of a girl spinning" />
      </Container>
    </Parallax>
  );
};

const Parallax = styled.div<{ isDark: boolean }>`

  /* The image used */
  background: linear-gradient(
    0deg,
    rgba(241, 241, 241, 0) 2%,
    rgba(241, 241, 241, 1) 40%,
    rgba(241, 241, 241, 1) 46%,
    rgba(242, 228, 234, 1) 57%,
    rgba(250, 161, 196, 0.68531162464986) 98%,
    rgba(255, 191, 216, 0.8421743697478992) 100%,
    rgba(241, 241, 241, 1) 100%
  );
  min-height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  ${({ isDark }) =>
    isDark &&
    `
    background-image: linear-gradient(
    to right top,
    #5c7aea,
    #5c7aea,
    #5c7aea,
    #5c7aea,
    #5c7aea,
    #5771de,
    #5169d3,
    #4c60c7,
    #3f4dad,
    #323b95,
    #242a7c,
    #151965
  );
  }
  `}
}

`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Img = styled.img`
  height: 50vmin;
  @media (prefers-reduced-motion: no-preference) {
    animation: girl infinite 6s linear;
  }

  @keyframes girl {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
export default Header;
