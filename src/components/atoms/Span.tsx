import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/themeContext';
import { colors } from '../../styles/colors';

/**
 * Interface
 */
interface SpanProps {
  children: string;
  onClick?: () => void;
  color?: string;
  isSelected?: boolean;
}

/**
 * Span
 * Immutable props - check SpanProps for more details.
 * @returns
 */
const Span = ({ children, onClick, isSelected, color }: SpanProps) => {
  /**
   * Hooks
   */
  const { theme } = useContext(ThemeContext);

  return (
    <StyledSpan theme={theme} isSelected={isSelected} color={color} onClick={onClick}>
      {children}
    </StyledSpan>
  );
};

/**
 * Styled components
 */
export const StyledSpan = styled.span<{
  theme: string;
  isSelected?: boolean;
  color?: string;
  onClick?: () => void;
}>`
  &:hover {
    // only if there is a click event on the span
    ${({ onClick }) => onClick && `cursor: pointer;`}
  }
  align-items: center;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 2px;
  width: fit-content;
  color: ${(props) => props.color} !important;
  ${({ isSelected, theme }) => isSelected && `background: ${colors[theme as keyof typeof colors].accentBackground};`}
`;

export default Span;
