import styled from "styled-components";
import { StyleSheet, Dimensions } from "react-native";
import { TextInput, Button } from "react-native-paper";

export const Body = styled.View`
  background-color: #ecf0f1;
  flex: 1;
`;

export const style = StyleSheet.create({
  background: {
    paddingHorizontal: 30,
    paddingTop: 60,
    paddingBottom: 120,
    minHeight: Dimensions.get("window").height - 24,
  },
});

export const ViewTitle = styled.View`
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  color: #293845;
  font-size: 22px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: #7a8a97;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Input = styled(TextInput).attrs(() => ({
  mode: "outlined",
}))`
  background-color: #ecf0f1;
  margin: 10px 0;
`;

export const RadioView = styled.View``;

export const RadioTitle = styled.Text`
  color: #293845;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
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

export const SaveButton = styled(Button).attrs(() => ({
  mode: "contained",
}))`
  height: 50px;
  justify-content: center;
  border-radius: 30px;
  position: absolute;
  bottom: 30px;
  width: 100%;
  align-self: center;
`;
