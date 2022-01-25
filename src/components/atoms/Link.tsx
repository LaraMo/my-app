import React, { ReactNode, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/theme";
import { colors } from "../../styles/colors";

type IProps = {
  children: ReactNode;
  href: string;
  style?: any;
};
const Link = (props: IProps) => {
  const { style, children, href } = props;
  const { isDark } = useContext(ThemeContext);
  return (
    <StyledLink href={href} isDark={isDark} style={style}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled.a<{
  isDark: boolean;
  color?: string;
  size?: string;
}>`
  color: ${(props) =>
    props.isDark ? colors.darkAccentText : colors.lightAccentText};
  font-size: 16px;
  text-decoration: none;
  font-family: "Outfit", sans-serif;
  &:hover {
    color: ${(props) =>
      props.isDark ? colors.darkSpanText : colors.lightSpanText};
  }
  &:visited {
    color: ${(props) =>
      props.isDark ? colors.darkAccentText : colors.lightAccentText};
  }
`;
export default Link;
