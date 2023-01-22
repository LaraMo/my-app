import React from 'react';
import Text from './Text';

/**
 * Interface
 */
interface TitleProps {
  children: string;
  color?: string;
  style?: unknown;
}
/**
 * Immutable props - check TitleProps for more details.
 * @returns
 */
const Title = ({ color, children, style }: TitleProps) => {
  return (
    <Text style={style} color={color} isBold size="3vh">
      {children}
    </Text>
  );
};
export default Title;
