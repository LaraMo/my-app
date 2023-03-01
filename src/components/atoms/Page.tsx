import React, { ReactNode, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/themeContext';
import { colors } from '../../styles/colors';

/**
 * Interface
 */
interface PageProps {
  children: ReactNode;
}

/**
 * Page
 * Immutable props - check PageProps for more details.
 * @returns
 */
const Page = ({ children }: PageProps) => {
  /**
   * Hooks
   */
  const { theme } = useContext(ThemeContext);

  return <Container theme={theme}>{children}</Container>;
};

/**
 * Styled Components
 */
const Container = styled.div<{ theme: 'light' | 'dark' | 'christmas' | 'easter' }>`
  align-items: center;
  background: ${(props) =>
    props.theme === 'dark' ? 'transparent' : colors[props.theme as keyof typeof colors].background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100 %;
`;

export default Page;
