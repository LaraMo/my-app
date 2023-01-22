import React, { useContext } from 'react';
import styled from 'styled-components';
import { BsLink } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import Text from '../atoms/Text';
import Title from '../atoms/Title';
import { colors } from '../../styles/colors';
import Link from '../atoms/Link';
import { ThemeContext } from '../../context/themeContext';
import { sharedShadowStyle } from '../../styles/shared';

/**
 * Interface
 */
interface CardProps {
  title: string;
  img: string;
  desc: string;
  link: string;
  startDate: string;
  endDate?: string;
  emoji?: string;
}
/**
 * Card
 * Immutable props - check CardProps for more details.
 * @returns
 */
const Card = ({ title, img, desc, link, startDate, endDate, emoji }: CardProps) => {
  /**
   * Hooks
   */
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <Div theme={theme} className="card" emoji={emoji}>
      <img alt="logo" width="120px" height="120px" src={img} />
      <Emoji>{emoji}</Emoji>
      <Content>
        <Title>{t([title])}</Title>
        <TextContainer>
          <Desc theme={theme}>{t([desc])}</Desc>
          <Text size="15px" color={colors[theme].dateAccent}>{`${startDate} - ${endDate ?? t('common.present')}`}</Text>
          <Link href={link}>
            <LinkContent>
              <BsLink />
              {t('common.view')}
            </LinkContent>
          </Link>
        </TextContainer>
      </Content>
    </Div>
  );
};

/**
 * Styled Components
 */
const Div = styled.div<{ emoji?: string; theme: string }>`
  ${sharedShadowStyle}
  align-items: center;
  background: ${(props) => colors[props.theme as keyof typeof colors].cardBackground};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  pointer-events: auto;
  transition: all 150ms ease-in-out;
  transform: scale(1);
  padding: 1.5rem;
  width: 200px;
  &:nth-child(even) {
    transform: translateY(8px);
  }

  &:nth-child(n) {
    transform: rotate(-5deg);
  }
  &:hover {
    transform: scale(1.15);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  @media only screen and (max-width: 500px) {
    margin-bottom: 5px;
  }

  ${({ emoji }) =>
    emoji &&
    ` 
    > img {
      position: absolute;
      transition: opacity 1s;
      opacity: 0;
    }
  `}
  &:hover {
    > img {
      opacity: 1;
    }
  }
`;

const Desc = styled(Text)`
  max-width: 450px;
`;

const Content = styled.div`
  flex: 3;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0;
  text-align: center;
`;

const TextContainer = styled.div`
  display: grid;
  gap: 8px;
`;

const LinkContent = styled.div`
  > svg {
    padding-right: 5px;
  }
`;

const Emoji = styled.div`
  align-items: center;
  display: flex;
  height: 120px;
  justify-content: center;
  font-size: 100px;
  font-weight: bold;
  width: 120px;
`;

export default Card;
