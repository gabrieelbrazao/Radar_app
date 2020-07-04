import styled from "styled-components";
import LottieView from "lottie-react-native";
import { Button } from "react-native-paper";

export const Background = styled.View`
  flex: 1;
  background-color: #ecf0f1;
  align-items: center;
`;

export const Animation = styled(LottieView)`
  height: 100%;
`;

export const AnimationView = styled.View`
  width: 100%;
  height: 40%;
  margin-top: 10%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #293845;
  font-size: 20px;
`;

export const Description = styled.Text`
  color: #7a8a97;
  font-size: 16px;
`;

export const ConfirmButton = styled(Button).attrs(() => ({
  mode: "contained",
}))`
  height: 50px;
  width: 80%;
  justify-content: center;
  position: absolute;
  border-radius: 30px;
  bottom: 40px;
`;
