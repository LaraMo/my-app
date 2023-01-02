import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Card from '../molecules/Card';
import Title from '../atoms/Title';
import { projects, workplaces, education, headings } from '../../utils/const';
import AboutMe from './AboutMeSection';
import { ThemeContext } from '../../context/themeContext';
import { colors } from '../../styles/colors';
import { sharedSectionStyle, sharedShadowStyle } from '../../styles/shared';

/**
 * Content Section
 * @returns
 */
const ContentSection = () => {
  /**
   * Hooks
   */
  const [visibleSection, setVisibleSection] = useState('aboutMe');
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  /**
   * Section ref
   */
  const sectionIds = ['aboutMe', 'projects', 'workplaces', 'education'];

  /**
   * Content of the page
   */
  const contents = [
    <AboutMe />,
    projects.map((project, key) => {
      return <Card key={key} {...project} />;
    }),
    workplaces.map((workplace, key) => {
      return <Card key={key} {...workplace} />;
    }),
    education.map((education, key) => {
      return <Card key={key} {...education} />;
    }),
  ];
  /**
   * Scroll to section by given id
   * @param {string} id
   */
  const handleClickNavItem = (id: string) => {
    const element = document.getElementById(id);
    // element?.scrollIntoView({
    //   top: element?.offsetTop,
    //   behavior: 'smooth',
    // });
    window.scrollTo({
      top: element?.offsetTop,
      behavior: 'smooth',
    });
    setVisibleSection(id);
  };
  return (
    <>
      <Nav theme={theme} id="nav">
        {headings.map((heading, key) => {
          return (
            <NavItem
              key={key}
              onClick={() => handleClickNavItem(heading.id)}
              theme={theme}
              isSelected={visibleSection === heading.id}
            >
              {t([heading.name])}
            </NavItem>
          );
        })}
      </Nav>
      <SectionContainer>
        {contents.map((content, key) => {
          return (
            <Section theme={theme} id={sectionIds[key]}>
              <Title style={{ fontFamily: 'Cookie', fontSize: '8vh' }}>{t(`${sectionIds[key]}.title`)}</Title>
              <Div background={colors[theme].background}>{content}</Div>
            </Section>
          );
        })}
      </SectionContainer>
    </>
  );
};

/**
 * Styled Components
 */
const SectionContainer = styled.div`
  gap: 30px;
`;

const Section = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  @media only screen and (max-width: 500px) {
    height: unset;
    padding: 10px;
  }
  &:nth-child(even) {
    > div {
      background: ${(props) => colors[props.theme as keyof typeof colors].accentBackground};
      @media only screen and (max-width: 750px) {
        background: unset;
      }
    }
`;
const Nav = styled.div<{ theme: string }>`
  ${sharedShadowStyle};
  background: ${(props) => colors[props.theme as keyof typeof colors].background};
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: sticky;
  top: 0;
  z-index: 1;
  > span {
    width: 100%;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;
const Div = styled.div<{ background: string }>`
  ${sharedShadowStyle};
  background: ${(props) => props.background};
  width: 650px;
  margin: 0 15px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 20px;
  @media only screen and (max-width: 500px) {
    margin-top: 0;
    padding: 0 20px;
  }
`;

const NavItem = styled.div<{ isSelected: boolean; theme: string }>`
  ${sharedSectionStyle};
  text-align: center;
  color: ${(props) => colors[props.theme as keyof typeof colors].text};
  &:hover {
    background: ${(props) => colors[props.theme as keyof typeof colors].accentBackground};
    cursor: pointer;
  }
  ${({ isSelected, theme }) => isSelected && `background: ${colors[theme as keyof typeof colors].accentBackground};`}
`;

export default ContentSection;
