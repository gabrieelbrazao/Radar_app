import styled from "styled-components";
import { ProgressBar } from "react-native-paper";
import { StyleSheet, Dimensions } from "react-native";

export const Body = styled.View`
  background-color: #ecf0f1;
  flex: 1;
`;

export const style = StyleSheet.create({
  background: {
    paddingHorizontal: 30,
    paddingTop: 60,
    paddingBottom: 30,
    minHeight: Dimensions.get("window").height - 60,
  },
});

export const ViewTitle = styled.View``;

export const Title = styled.Text`
  color: #293845;
  font-size: 20px;
`;

export const Description = styled.Text`
  color: #7a8a97;
  font-size: 16px;
`;

export const ViewProgress = styled.View`
  margin-top: 8%;
`;

export const StyledProgressBar = styled(ProgressBar)`
  height: 5px;
  border-radius: 2.5px;
`;

export const TextProgress = styled.Text`
  color: #7a8a97;
  font-size: 12px;
  align-self: flex-end;
`;
