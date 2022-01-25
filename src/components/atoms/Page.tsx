import React, { ReactNode, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/theme";
import { colors } from "../../styles/colors";

type IProps = {
  children: ReactNode;
};
const Page = (props: IProps) => {
  const { isDark } = useContext(ThemeContext);
  const { children } = props;
  return <Container isDark={isDark}>{children}</Container>;
};

const Container = styled.div<{ isDark: boolean }>`
  background: ${(props) =>
    props.isDark ? colors.darkBackground : colors.lightBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export default Page;
