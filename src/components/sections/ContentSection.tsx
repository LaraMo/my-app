/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Card from '../molecules/Card';
import Title from '../atoms/Title';
import { projects, workplaces, education } from '../../utils/const';
import AboutMe from './AboutMeSection';
import { ThemeContext } from '../../context/themeContext';
import { colors } from '../../styles/colors';
import { sharedShadowStyle } from '../../styles/shared';

/**
 * Content Section
 * @returns
 */
const ContentSection = () => {
  /**
   * Hooks
   */
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

  return (
    <>
      {contents.map((content, key) => {
        return (
          <Section key={key} background={colors[theme].background} theme={theme} id={sectionIds[key]}>
            <Title style={{ fontFamily: 'Cookie', fontSize: '8vh' }}>{t(`${sectionIds[key]}.title`)}</Title>
            <Div>{content}</Div>
          </Section>
        );
      })}
    </>
  );
};

/**
 * Styled Components
 */

const Section = styled.section<{ background: string }>`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 30px;
  @media only screen and (max-width: 750px) {
    height: unset; // components will take their natural height
    padding: 10px;
  }
  // the about me section will have a max width
  &:first-child {
    > div {
      background: ${(props) => props.background};
      ${sharedShadowStyle};
      max-width: 650px;
    }
  }
  &:nth-child(3) {
    > div {
      max-width: 950px;
    }
  }
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 15px;

  padding: 20px;
  @media only screen and (max-width: 750px) {
    margin-top: 0;
    padding: 0 20px;
  }
`;

export default ContentSection;
