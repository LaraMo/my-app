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
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
