import styled from "styled-components";
import { TextInput, Button } from "react-native-paper";

export const Form = styled.View`
  justify-content: space-around;
`;

export const Input = styled(TextInput)`
  background-color: transparent;
  margin: 2% 0;
`;

export const CheckboxView = styled.View`
  margin-top: 12%;
`;

export const CheckboxTitle = styled.Text`
  font-size: 15px;
  color: #293845;
`;

export const CheckboxLine = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const CheckboxLabel = styled.Text`
  color: #7a8a97;
`;

export const CheckboxPrimary = styled.Text`
  color: #935390;
  font-weight: bold;
  text-decoration: underline;
`;

export const ViewButton = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-left: 30px;
`;

export const ProceedButton = styled(Button).attrs(() => ({
  mode: "contained",
}))`
  height: 50px;
  justify-content: center;
  margin-top: 12%;
  border-radius: 30px;
`;

export const ViewClient = styled.View`
  margin-top: 8%;
  flex-direction: row;
  justify-content: center;
`;

export const TextClient = styled.Text`
  color: #7a8a97;
`;

export const TextPrimaryClient = styled.Text`
  color: #935390;
  font-weight: bold;
  text-decoration: underline;
`;
