//@ts-nocheck
import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/themeContext';
import { sharedTextStyle } from '../../styles/shared';
/**
 * Interface
 */
interface TextProps {
  children: string;
  color?: string;
  size?: string;
  isBold?: boolean;
  style?: unknown;
}

/**
 * Text
 * Immutable props - check TextProps for more details.
 * @returns
 */
const Text = ({ color, size, children, isBold, style }: TextProps) => {
  /**
   * Hooks
   */
  const { theme } = useContext(ThemeContext);

  return (
    <StyledText style={style} theme={theme} isBold={isBold} color={color} size={size}>
      {children}
    </StyledText>
  );
};

/**
 * Styled Components
 */
const StyledText = styled.p<{
  theme: string;
  color?: string;
  size?: string;
  isBold?: boolean;
}>`
  ${sharedTextStyle}
`;
export default Text;
