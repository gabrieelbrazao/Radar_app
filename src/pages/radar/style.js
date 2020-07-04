import styled from "styled-components";
import { IconButton } from "react-native-paper";

export const Menu = styled(IconButton).attrs(() => ({
  icon: "menu",
  size: 40,
  color: "#293845",
}))`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Bottom = styled.View`
  height: 100px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: white;
  border-top-color: #bdc3c7;
  border-top-width: 2px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TouchableOpacity`
  width: 70%;
  height: 40px;
  border: 2px solid #bdc3c7;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InputText = styled.Text`
  font-size: 18px;
  color: #bdc3c7;
  margin-bottom: 3px;
  margin-left: 7px;
`;
