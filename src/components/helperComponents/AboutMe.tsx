import react from "React";
import styled from "styled-components";
import me from "../../assets/lara.jpeg";
import { facts, specialties } from "../../const";
import Span from "../atoms/Span";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
import { colors } from "../../styles/colors";
const AboutMe = () => {
  return (
    <Div>
      <Intro>
        <RoundImage width="200px" height="200px" src={me} />
        <Text>
          Hey👋 My name is Lara and I am a web( 🖥️ ) and mobile( 📱 ) developer.
        </Text>
      </Intro>

      <hr />
      <Facts>
        {facts.map((fact, index) => {
          return (
            <Fact>
              <Title>{`${index + 1}.`}</Title>
              <Text>{fact}</Text>
            </Fact>
          );
        })}
      </Facts>
      <hr />
      <Specialties>
        {specialties.map((specialty) => {
          return <Span>{specialty ?? ""}</Span>;
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
