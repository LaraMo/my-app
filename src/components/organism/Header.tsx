import i18next from "i18next";
import React, { useContext, useEffect } from "react";
import { Moon, Sun } from "react-feather";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import face from "../../assets/face.png";
import faceDark from "../../assets/faceDark.png";
import { ThemeContext } from "../../context/theme";
import { colors } from "../../styles/colors";
import Span from "../atoms/Span";
import Title from "../atoms/Title";
import ToggleButton from "../atoms/ToggleButton";

const Header = () => {
  const { isDark, setTheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  useEffect(() => {
    let temp = localStorage.getItem("lang")??"en";
    i18next.changeLanguage(temp);
  },[])
  return (
    <Parallax isDark={isDark}>
      <Container>
          <Center>
            <Title style={{fontFamily: "Cookie", fontSize: "8vh", transform: "rotate(-10deg)"}} color={isDark? colors.darkAccentText: colors.lightAccentText}>{t("welcome.hello")}</Title>
            <Title>{t("welcome.itsMe")}</Title>         
          <Langs>
          <Span 
          onClick={()=> {localStorage.setItem("lang", "en"); i18next.changeLanguage("en")}}
          isSelected={localStorage.getItem("lang") === "en"}>EN</Span> 
           <Span 
          onClick={()=> {localStorage.setItem("lang", "fr"); i18next.changeLanguage("fr")}}
          isSelected={localStorage.getItem("lang") === "fr"}>FR</Span>

          </Langs>
          <ToggleButton
            state={isDark}
            setState={setTheme}
            uncheckedIcon={<Moon color="white" />}
            checkedIcon={<Sun color="black" />}
          />
                    </Center>

        
        <Img src={isDark ? faceDark : face} alt="logo of a girl spinning" />
      </Container>
    </Parallax>
  );
};

const Parallax = styled.div<{ isDark: boolean }>`
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
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  ${({ isDark }) =>
    isDark &&
    `
    background: linear-gradient(0deg, rgba(3,27,83,1) 17%, rgba(18,47,118,1) 32%, rgba(32,67,153,1) 60%, rgba(42,81,177,1) 92%);
  }
  `}
}
  `

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  @media only screen and (max-width: 860px) {
    flex-direction: column-reverse;
  }
`;

const Langs = styled.div `
  margin: 20px;
`

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
