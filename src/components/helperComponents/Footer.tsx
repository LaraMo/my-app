import React, { useContext } from "react";
import moment from "moment";
import Text from "../atoms/Text";
import { ThemeContext } from "../../context/theme";
import { socialMedia } from "../../const";
import styled from "styled-components";
const Footer = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <Container>
      <div>
        {socialMedia.map((x, key) => {
          return (
            <Link href={x.siteUrl}>
              <img width="50px" height="50px" key={key} src={x.imgUrl} />
            </Link>
          );
        })}
      </div>

      <Text>{`${isDark ? "🤍" : "💜"} My by LaraMo ©${moment().year()}`}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
`;

const Link = styled.a`
  margin: 15px;
  &:hover {
    cursor: pointer;
    > img {
      /* Start the shake animation and make the animation last for 0.5 seconds */
      animation: shake 1.3s;

      /* When the animation is finished, start again */
      animation-iteration-count: infinite;

      @keyframes shake {
        0% {
          transform: translate(1px, 1px) rotate(0deg);
        }
        10% {
          transform: translate(-1px, -2px) rotate(-1deg);
        }
        20% {
          transform: translate(-3px, 0px) rotate(1deg);
        }
        30% {
          transform: translate(3px, 2px) rotate(0deg);
        }
        40% {
          transform: translate(1px, -1px) rotate(1deg);
        }
        50% {
          transform: translate(-1px, 2px) rotate(-1deg);
        }
        60% {
          transform: translate(-3px, 1px) rotate(0deg);
        }
        70% {
          transform: translate(3px, 1px) rotate(-1deg);
        }
        80% {
          transform: translate(-1px, -1px) rotate(1deg);
        }
        90% {
          transform: translate(1px, 2px) rotate(0deg);
        }
        100% {
          transform: translate(1px, -2px) rotate(-1deg);
        }
      }
    }
  }
`;
export default Footer;
