import React, { ReactNode, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/theme";

type IProps = {
  children: string;
  color?: string;
  size?: string; //todo: make size
  bold?: boolean;
  specialFont?: boolean;
};
const Text = (props: IProps) => {
  const { color, size, children } = props;
  const { isDark } = useContext(ThemeContext);
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
    props.color ? props.color : props.isDark ? "white" : "black"};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-family: ${(props) => (props.specialFont ? "Open Sans" : "Cookie")};
  font-size: ${(props) => (props.specialFont ? "16px" : "5em")};
`;
export default Text;
