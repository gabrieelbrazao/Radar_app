import styled from "styled-components/native";
import { Title, Text, Divider } from "react-native-paper";

export const Background = styled.View`
  background-color: #ecf0f1;
  flex: 1;
  padding: 30px 30px;
  flex-direction: column;
  justify-content: space-around;
`;

export const BackgroundImage = styled.View`
  height: 33%;
`;

export const BackgroundIcon = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #dfe3e8;
  align-items: center;
  justify-content: center;
`;

export const TitleOption = styled(Title)`
  font-size: 18px;
  color: #293845;
`;

export const TextOption = styled(Text)`
  font-size: 14px;
  color: #7a8a97;
`;

export const ViewChoose = styled.View``;

export const TitleChoose = styled(Title)`
  font-size: 20px;
  margin-top: 20px;
  color: #293845;
`;

export const TextChoose = styled(Text)`
  font-size: 16px;
  color: #7a8a97;
`;

export const ViewDivider = styled.View`
  position: relative;
  justify-content: center;
  margin: 20px 0;
`;

export const StyledDivider = styled(Divider)`
  height: 2px;
  color: #7a8a97;
`;

export const TextDivider = styled(Text)`
  color: gray;
  color: #7a8a97;
`;

export const TextViewDivider = styled.View`
  position: absolute;
  align-self: center;
  z-index: 1;
  background-color: #ecf0f1;
  padding: 0 10px;
`;

export const ProChoice = styled.TouchableOpacity`
  align-items: center;
  margin-top: 30px;
`;

export const ClientChoice = styled.TouchableOpacity`
  align-items: center;
`;
