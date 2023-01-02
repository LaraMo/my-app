import React, { ReactNode, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/themeContext';
import { colors } from '../../styles/colors';
import { sharedTextStyle } from '../../styles/shared';

/**
 * Interface
 */
interface LinkProps {
  children: ReactNode;
  href: string;
}

/**
 * Link
 * Immutable props - check LinkProps for more details.
 * @param props
 * @returns
 */
const Link = ({ children, href }: LinkProps) => {
  /**
   * Hooks
   */
  const { theme } = useContext(ThemeContext);

  return (
    <StyledLink color={colors[theme].accentText} target="_blank" href={href} theme={theme}>
      {children}
    </StyledLink>
  );
};

/**
 * Styled Components
 */
const StyledLink = styled.a<{
  theme: boolean;
  color?: string;
}>`
  ${sharedTextStyle};
  color: ${(props) => props.color};
  text-decoration: none;
  &:hover {
    color: ${(props) => colors[props.theme as keyof typeof colors].spanText};
  }
  &:visited {
    color: ${(props) => props.color};
  }
`;
export default Link;
