import { css } from 'styled-components';
import { SharedTextStyleProps } from '../utils/types';
import { colors } from './colors';

/**
 * sharedTextStyle
 * @param SharedTextStyleProps
 * @returns
 */
export const sharedTextStyle = ({ theme, color, size, isBold }: SharedTextStyleProps) => css`
  color: ${color ?? colors[theme].text};
  font-weight: ${isBold ? 'bold' : 'normal'};
  font-size: ${size ?? '17px'};
`;

/**
 * sharedSectionStyle
 * @returns
 */
export const sharedSectionStyle = () => css`
  border-radius: 10px;
  padding: 20px;
`;

/**
 * sharedShadowStyle
 * @returns
 */
export const sharedShadowStyle = () => css`
  // todo make this theme supported
  box-shadow: hsla(0, 0%, 0%, 0.2) -1rem 13px 27px -5px, hsla(0, 0%, 0%, 0.2) 0px 8px 16px -8px;
`;
