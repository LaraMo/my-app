import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/theme";
import { colors } from "../../styles/colors";

type Props = {
  children: string;
  onClick?: any; //todo,
  background?: string;
  color?: string;
  noBorder?: boolean;
  width?: string;
  isSelected?: boolean;
  id?: string;
};
const Span = (props: Props) => {
  const { isDark } = useContext(ThemeContext);
  const {
    children,
    onClick,
    background,
    color,
    noBorder,
    width,
    isSelected,
    id,
  } = props;
  return (
    <StyledSpan
      isDark={isDark}
      id={id}
      isSelected={isSelected}
      background={background}
      noBorder={noBorder}
      width={width}
      color={color}
      onClick={onClick}
    >
      {children}
    </StyledSpan>
  );
};

const StyledSpan = styled.span<{
  isDark: boolean;
  color?: string;
  background?: string;
  noBorder?: boolean;
  width?: string;
  isSelected?: boolean;
  onClick?: any;
}>`
  padding: 10px;
  background: ${(props) =>
    props.background
      ? props.background
      : props.isDark
      ? colors.darkAccentBackground
      : colors.lightAccentBackground};
  color: ${(props) =>
    props.color
      ? props.color
      : props.isDark
      ? colors.darkSpanText
      : colors.lightSpanText};
  margin: 2px;
  text-align: center;
  @media only screen and (min-width: 860px) {
    width: ${(props) => props.width};
  }
  ${({ isSelected, isDark }) =>
    isSelected &&
    ` font-weight: bold;
      border: 1px solid ${isDark ? `lightgray` : "black"};
  `}
  &:hover {
    ${({ onClick }) =>
      onClick &&
      ` cursor: pointer;
  `}
  }
`;

export default Span;
