import React, { ReactNode, useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { StyledSpan } from './Span';

/**
 * Interface
 */
interface ThemeIconProps {
  themeValue: 'light' | 'dark' | 'christmas' | 'easter'; // represents the theme for current svg
  svg: ReactNode;
}

/**
 * Theme Icon
 * Immutable props - check IconProps for more details.
 * @param props
 * @returns
 */
const ThemeIcon = ({ svg, themeValue }: ThemeIconProps) => {
  /**
   * Hooks
   */
  const { theme, handleSetTheme } = useContext(ThemeContext);

  return (
    <StyledSpan theme={theme} onClick={() => handleSetTheme(themeValue)} isSelected={themeValue === theme}>
      {svg}
    </StyledSpan>
  );
};
export default ThemeIcon;
