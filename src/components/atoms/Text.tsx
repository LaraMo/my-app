import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/theme";
import { colors } from "../../styles/colors";

type IProps = {
  children: string;
  color?: string;
  size?: string; //todo: make size
  bold?: boolean;
  style?: any;
};
const Text = (props: IProps) => {
  const { color, size, children, bold, style } = props;
  const { isDark } = useContext(ThemeContext);
  return (
    <Div style={style} isDark={isDark} bold={bold} color={color} size={size}>
      {children}
    </Div>
  );
};

const Div = styled.p<{
  isDark: boolean;
  color?: string;
  size?: string;
  bold?: boolean;
}>`
  color: ${(props) =>
    props.color
      ? props.color
      : props.isDark
      ? colors.lightText
      : colors.darkText};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-size: ${(props) => (props.size ? props.size : "16px")};
  font-family: "Outfit", sans-serif;
`;
export default Text;
