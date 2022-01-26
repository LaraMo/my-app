import React from "react";
import Switch from "react-switch";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import Text from "./Text";

type IProps = {
  state: boolean;
  setState: any; //todo
  label?: string;
  uncheckedIcon: any; //todo
  checkedIcon: any; //todo
};
const ToggleButton = (props: IProps) => {
  const { state, uncheckedIcon, checkedIcon, setState, label } = props;
  return (
    <Div>
      {label && <Text>{label}</Text>}
      <Switch
        onChange={setState}
        checked={state}
        offHandleColor={colors.lightAccentBackground}
        onHandleColor={colors.darkAccentBackground}
        offColor={colors.darkAccentBackground}
        onColor={colors.lightAccentBackground}
        checkedIcon={checkedIcon}
        uncheckedIcon={uncheckedIcon}
      />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
`;

export default ToggleButton;
