import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import me from "../../assets/lara.jpeg";
import { facts, specialties } from "../../const/const";
import Span from "../atoms/Span";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <Div>
      <Intro>
        <RoundImage width="200px" height="200px" src={me} />
        <Text>{t("aboutMe.desc")}</Text>
      </Intro>

      <hr />
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
      <hr />
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
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
const Fact = styled(Intro)``;

const Facts = styled.div`
  display: flex;
  flex-direction: column;
`;
const RoundImage = styled.img`
  border-radius: 50%;
  padding-right: 20px;
`;

const Specialties = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export default AboutMe;
