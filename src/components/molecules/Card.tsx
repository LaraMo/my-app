import React, { useContext } from "react";
import styled from "styled-components";
import { Link2 } from "react-feather";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
import { colors } from "../../styles/colors";
import { useTranslation } from "react-i18next";
import Link from "../atoms/Link";
import { ThemeContext } from "../../context/theme";
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
  const { isDark } = useContext(ThemeContext)
  const { t } = useTranslation();
  return (
    <Div isEmoji={emoji}>
      <img alt="logo" width="180px" height="180px" src={img} />
      {emoji && (
        <p
          style={{
            fontSize: 100,
            fontWeight: "bold",
            width: "180px",
            height: "180px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {emoji}
        </p>
      )}

      <Content>
        <Title>{t([title])}</Title>
        <TextContainer>
        <Desc>{t([desc])}</Desc>
        <Text size="15px" color={isDark? colors.darkDateAccent: colors.lightDateAccent}>{`${startDate} - ${endDate ?? t("common.present")}`}</Text>
        <Link href={link}>
          <LinkContent>
            <Link2 />
            {t("common.view")}
          </LinkContent>
        </Link>
        </TextContainer>
      </Content>
    </Div>
  );
};

const Div = styled.div<{ isEmoji?: string }>`
  @media only screen and (max-width: 500px) {
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
const Desc = styled(Text)`
  max-width: 450px;
`;

const Content = styled.div`
  padding-left: 20px;
  flex: 3;
  @media only screen and (max-width: 500px) {
    padding: 0px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TextContainer = styled.div `
  padding-top: 8px;
  >* {
    padding-bottom: 8px;
  }
  @media only screen and (max-width: 500px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const LinkContent = styled.div`
  display: flex;
  align-items: center;
  > svg {
    padding-right: 5px;
  }
`;

export default Card;
