import styled from "styled-components";
import { TextInput, Button } from "react-native-paper";

export const Form = styled.View``;

export const Input = styled(TextInput)`
  background-color: transparent;
  margin: 2% 0;
`;

export const RadioView = styled.View`
  margin-top: 5%;
`;

export const RadioTitle = styled.Text`
  font-size: 15px;
  color: #293845;
`;

export const RadioGroup = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: -10px;
`;

export const RadioLabel = styled.Text`
  font-size: 15px;
  color: gray;
`;

export const ViewButton = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-left: 30px;
`;

export const ProceedButton = styled(Button).attrs((props) => ({
  mode: "contained",
}))`
  height: 50px;
  justify-content: center;
  margin-top: 30px;
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
