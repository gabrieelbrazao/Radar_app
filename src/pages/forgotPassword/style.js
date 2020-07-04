import styled from "styled-components";
import { TextInput, Button } from "react-native-paper";
import { StyleSheet, Dimensions } from "react-native";

export const Body = styled.View`
  background-color: #ecf0f1;
  flex: 1;
`;

export const style = StyleSheet.create({
  background: {
    paddingHorizontal: 30,
    paddingTop: 60,
    minHeight: Dimensions.get("window").height - 24,
  },
});

export const TitleView = styled.View`
  margin-top: 2%;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #293845;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #7a8a97;
  margin-top: 10px;
`;

export const Input = styled(TextInput)`
  background-color: transparent;
  margin-top: 5%;
`;

export const StyledButton = styled(Button).attrs(() => ({
  mode: "contained",
}))`
  height: 50px;
  width: 100%;
  justify-content: center;
  position: absolute;
  border-radius: 30px;
  bottom: 30px;
  align-self: center;
`;
