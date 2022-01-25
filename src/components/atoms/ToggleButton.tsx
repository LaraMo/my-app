import React, { ReactNode } from "react";
import Toggle from "react-toggle";
import styled from "styled-components";
import Text from "./Text";

type IProps = {
  state: boolean;
  iconChecked: ReactNode;
  iconUnchecked: ReactNode;
  setState: any; //todo
  label: string;
};
const ToggleButton = (props: IProps) => {
  const { state, iconChecked, iconUnchecked, setState, label } = props;
  return (
    <Div>
      <Text>{label}</Text>
      <Toggle
        defaultChecked={state}
        icons={{
          checked: iconChecked,
          unchecked: iconUnchecked,
        }}
        onChange={setState}
      />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
`;

export default ToggleButton;
