import react from "React";
import styled from "styled-components";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
import { colors } from "../../styles/colors";
type Props = {
  title: string;
  img: string;
  desc: string;
  link: string;
  startDate: string;
  endDate?: string;
  emoji?: string;
};
const Card = (props: Props) => {
  const { title, img, desc, link, startDate, endDate, emoji } = props;
  return (
    <Div isEmoji={emoji}>
      <img width="200px" height="200px" src={img} />
      {emoji && (
        <p
          style={{
            fontSize: 100,
            fontWeight: "bold",
            width: "200px",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {emoji}
        </p>
      )}

      <Content>
        <Title>{title}</Title>
        <P>{desc}</P>
        <Dates>{`${startDate} - ${endDate ?? "Present"}`}</Dates>
        <a href={link}>View</a>
      </Content>
    </Div>
  );
};

const Div = styled.div<{ isEmoji?: string }>`
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > img {
      display: ${(props) => (props.isEmoji ? "none" : "unset")};
    }
  }
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin-bottom: 10px;
  position: relative;
  //meaning there was an emoji passed down
  ${({ isEmoji }) =>
    isEmoji &&
    `
      > img {
  position: absolute;
  transition: opacity 1s;
  opacity: 0;
  }
  `}
  &:hover {
    > img {
      opacity: 1;
    }
  }
`;
const P = styled(Text)`
  max-width: 450px;
`;
const Dates = styled(Text)`
  color: ${(_) => colors.accentText};
`;
const Content = styled.div`
  padding-left: 20px;
  flex: 3;
  @media only screen and (max-width: 600px) {
    padding: 0px;
    text-align: center;
  }
`;

export default Card;
