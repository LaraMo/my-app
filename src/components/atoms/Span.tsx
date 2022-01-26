import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/theme";
import { colors } from "../../styles/colors";

type Props = {
  children: string;
  onClick?: () => void;
  background?: string;
  color?: string;
  noBorder?: boolean;
  width?: string;
  isSelected?: boolean;
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
  } = props;
  return (
    <StyledSpan
      isDark={isDark}
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
  onClick?: () => void;
}>`
  padding: 10px;
  margin: 2px;
  text-align: center;
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
  @media only screen and (min-width: 500px) {
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
