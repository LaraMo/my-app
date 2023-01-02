import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import me from '../../assets/lara.jpeg';
import { facts, specialties } from '../../utils/const';
import { ThemeContext } from '../../context/themeContext';
import Span from '../atoms/Span';
import Text from '../atoms/Text';
import Title from '../atoms/Title';
import { colors } from '../../styles/colors';

/**
 * AboutMe Section
 */
const AboutMeSection = () => {
  /**
   * Hooks
   */
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  /**
   * Consts
   */

  const textStyle = {
    fontFamily: 'Cookie',
    fontSize: '4vh',
    color: colors[theme as keyof typeof colors].text,
  };

  return (
    <Div>
      <Intro>
        <RoundImage width="200px" height="200px" src={me} />
        <Text>{t('aboutMe.desc')}</Text>
      </Intro>
      <div>
        <Text isBold style={textStyle}>
          {t('aboutMe.facts')}
        </Text>
        <Facts>
          {facts.map((fact, key) => {
            return (
              <Fact key={key}>
                <Title>{`${key + 1}.`}</Title>
                <Text>{t([fact])}</Text>
              </Fact>
            );
          })}
        </Facts>
      </div>
      <div>
        <Text isBold style={textStyle}>
          {t('aboutMe.skillSet')}
        </Text>
        <Specialties>
          {specialties.map((specialty, key) => {
            return (
              <Span color={colors[theme].accentText} key={key}>
                {specialty}
              </Span>
            );
          })}
        </Specialties>
      </div>
    </Div>
  );
};

/**
 * Styled Components
 */
const Div = styled.div`
  display: grid;
  gap: 10px;
`;
const Intro = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
const Fact = styled.div`
  display: flex;
  align-items: center;
`;

const Facts = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;
const RoundImage = styled.img`
  border-radius: 50%;
  padding-right: 20px;
`;

const Specialties = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default AboutMeSection;
