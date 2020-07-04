import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";

export const Form = styled.View`
  background-color: #ecf0f1;
  align-items: center;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 25px;
  width: 80%;
  margin-top: 9%;
`;

export const Input = styled(TextInput)`
  margin-top: 5px;
  width: 80%;
  background-color: #ecf0f1;
`;

export const HelperView = styled.View`
  padding-top: 5px;
  padding-right: 10px;
  align-items: flex-end;
  width: 80%;
`;

export const SignInButton = styled(Button)`
  border-width: 2px;
  border-color: #935390;
  border-radius: 30px;
  width: 80%;
  margin-top: 20px;
  height: 50px;
  justify-content: center;
`;

export const SignUpButton = styled(Button)`
  width: 80%;
  margin-top: 30px;
  height: 50px;
  border-radius: 30px;
  justify-content: center;
`;

export const ForgotPassText = styled.Text`
  margin-top: 10px;
  font-weight: bold;
  color: gray;
`;
