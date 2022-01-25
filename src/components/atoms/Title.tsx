import React from "react";
import Text from "./Text";

type IProps = {
  children: string;
  color?: string;
  style?: any;
};
const Title = (props: IProps) => {
  const { color, children, style } = props;
  return (
    <Text style={style} color={color} bold size="5vh">
      {children}
    </Text>
  );
};
export default Title;
