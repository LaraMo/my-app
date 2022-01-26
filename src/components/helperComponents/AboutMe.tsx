import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import me from "../../assets/lara.jpeg";
import { facts, specialties } from "../../const/const";
import { ThemeContext } from "../../context/theme";
import { colors } from "../../styles/colors";
import Span from "../atoms/Span";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
const AboutMe = () => {
  const { isDark } = useContext(ThemeContext)
  const { t } = useTranslation();
  return (
    <Div>
      <Intro>
        <RoundImage width="200px" height="200px" src={me} />
        <Text>{t("aboutMe.desc")}</Text>
      </Intro>

      <Text  bold style={{background: isDark? colors.darkPrimary : colors.primary, position: "absolute", marginLeft:"10px", padding: "0 4px"}}>{t("aboutMe.facts")}</Text>
        <Hr />
      <Facts>
        {facts.map((fact, key) => {
          return (
            <Fact key={key}>
              <Title>{`${key + 1}.`}</Title>
              <Text>{t([fact])}</Text>
            </Fact>
          );
        })}
      </Facts>
        <Text  bold style={{background: isDark? colors.darkPrimary : colors.primary, position: "absolute", marginLeft:"10px", padding: "0 4px"}}>{t("aboutMe.skillSet")}</Text>
        <Hr />
      <Specialties>
        {specialties.map((specialty, key) => {
          return <Span key={key}>{specialty}</Span>;
        })}
      </Specialties>
    </Div>
  );
};

const Div = styled.div`
  padding: 20px;
`;
const Intro = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
const Fact = styled.div`
  display: flex;
  align-items: center;
`;

const Facts = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
`;
const RoundImage = styled.img`
  border-radius: 50%;
  padding-right: 20px;
`;

const Specialties = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px 0;
`;

const Hr = styled.hr `
  margin: 10px 0;
`
export default AboutMe;
