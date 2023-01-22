import React, { useContext } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { BsFillSunFill, BsMoonFill, BsFillTreeFill } from 'react-icons/bs';
import { GiRabbitHead } from 'react-icons/gi';
import { ThemeContext } from '../../context/themeContext';
import Span from '../atoms/Span';
import Title from '../atoms/Title';
import { colors } from '../../styles/colors';
import ThemeIcon from '../atoms/ThemeIcon';
import Superwoman from '../atoms/Superwoman';
import Snow from '../atoms/Snow';
import { themeList } from '../../utils/const';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Interface
 */
interface HeaderProps {
  lang: string;
  handleChangeLanguage: (lang: string) => void;
}
/**
 * Header
 * Immutable props - check HeaderProps for more details.
 * @returns
 */
const Header = ({ lang, handleChangeLanguage }: HeaderProps) => {
  /**
   * Hooks
   */
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <Parallax theme={theme}>
      <Container>
        {theme === themeList.CHRISTMAS && <Snow />}
        <RightSide>
          <Title
            style={{
              color: colors[theme].text,
              fontFamily: 'Cookie',
              fontSize: '8vh',
              transform: 'rotate(-10deg)',
              width: '200px',
            }}
            color={colors[theme].accentText}
          >
            {t('welcome.hello')}
          </Title>
          <Langs>
            <Span color={colors[theme].text} onClick={() => handleChangeLanguage('en')} isSelected={lang === 'en'}>
              EN
            </Span>
            <Span color={colors[theme].text} onClick={() => handleChangeLanguage('fr')} isSelected={lang === 'fr'}>
              FR
            </Span>
          </Langs>
          <IconContainer theme={theme}>
            <ThemeIcon themeValue="light" svg={<BsFillSunFill />} />
            <ThemeIcon themeValue="dark" svg={<BsMoonFill />} />
            <ThemeIcon themeValue="christmas" svg={<BsFillTreeFill />} />
            <ThemeIcon themeValue="easter" svg={<GiRabbitHead />} />
          </IconContainer>
        </RightSide>
        <ScrollAnimation animateOnce animateIn="animate__fadeInRight">
          <Superwoman />
        </ScrollAnimation>
        <ToastContainer />
      </Container>
    </Parallax>
  );
};

/**
 * Styled Components
 */
const Parallax = styled.div<{ theme: string }>`
  background: ${(props) => colors[props.theme as keyof typeof colors].parallax};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
  margin-bottom: 30px;
  width: 100%;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 0 20px;
  @media only screen and (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;

const RightSide = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const Langs = styled.div`
  display: flex;
  margin: 20px;
`;

const IconContainer = styled.div<{ theme: string }>`
  display: flex;
  z-index: 10;
  > span {
    > svg {
      fill: ${(props) => colors[props.theme as keyof typeof colors].text};
      height: 20px;
      width: 20px;
    }
  }
`;
export default Header;
