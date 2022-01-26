import React, { useContext } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import moment from "moment";
import Text from "../atoms/Text";
import { ThemeContext } from "../../context/theme";
import { socialMedia } from "../../const/const";
const Footer = () => {
  const { isDark } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <Container>
    <div>
        {socialMedia.map((x, key) => {
          return (
            <Link key={key} href={x.siteUrl}>
              <img
                alt="footerImg"
                width="50px"
                height="50px"
                key={key}
                src={x.imgUrl}
              />
            </Link>
          );
        })}
      </div>
      <Text>
        {t("footer.title", {
          icon: isDark ? "🤍" : "💜",
          year: moment().year(),
        })}
      </Text>
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
      animation: shake 1.3s infinite;
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
