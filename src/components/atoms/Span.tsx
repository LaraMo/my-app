import React from "react";
import styled from "styled-components";

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
  color?: string;
  background?: string;
  noBorder?: boolean;
  width?: string;
  isSelected?: boolean;
  onClick?: any;
}>`
  padding: 10px;
  border: 1px solid ${(props) => (props.noBorder ? "transparent" : "#ffd3d3")};
  background: ${(props) => props.background ?? "#ffd3d3"};
  color: ${(props) => props.color ?? "rgb(110, 70, 219)"};
  margin: 2px;
  @media only screen and (min-width: 600px) {
    width: ${(props) => props.width};
  }
  text-align: center;
  ${({ isSelected }) =>
    isSelected &&
    ` font-weight: bold;
      border: 1px solid lightgray;
  `}
  &:hover {
    ${({ onClick }) =>
      onClick &&
      ` cursor: pointer;
  `}
  }
`;

export default Span;
