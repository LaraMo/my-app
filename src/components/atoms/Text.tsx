import { cp } from "fs/promises";
import React, { ReactNode, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/theme";
import { colors } from "../../styles/colors";

type IProps = {
  children: string;
  color?: string;
  size?: string; //todo: make size
  bold?: boolean;
  specialFont?: boolean;
};
const Text = (props: IProps) => {
  const { color, size, children, bold } = props;
  const { isDark, setTheme } = useContext(ThemeContext);
  return (
    <Div isDark={isDark} color={color} size={size}>
      {children}
    </Div>
  );
};

const Div = styled.p<{
  isDark: boolean;
  color?: string;
  size?: string;
  bold?: boolean;
  specialFont?: boolean;
}>`
  color: ${(props) =>
    props.color
      ? props.color
      : props.isDark
      ? colors.textLight
      : colors.textDark};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  /* font-family: ${(props) => (props.specialFont ? "Open Sans" : "Cookie")}; */
  font-size: 16px;
  margin: 0;
  padding: 0;
  font-family: "Outfit", sans-serif;
`;
export default Text;
