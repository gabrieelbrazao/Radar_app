import styled from "styled-components";
import { Divider } from "react-native-paper";
import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

export const Background = styled.View`
  background-color: white;
  flex: 1;
`;

export const Header = styled.TouchableOpacity`
  background-color: #f7f9fa;
  padding: 20px 10px;
`;

export const BackgoundAvatar = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 40px;
  background-color: #ced6e0;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const NameUser = styled.Text`
  font-size: 25px;
  color: #2f3542;
  font-weight: bold;
`;

export const EmailUser = styled.Text`
  font-size: 15px;
  color: #ced6e0;
  font-weight: bold;
`;

export const Body = styled.View`
  padding: 0 10px;
  flex: 1;
`;

export const NavigationText = styled.Text`
  font-size: 18px;
  color: #2f3542;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const NavigationDivider = styled(Divider)`
  color: #f7f9fa;
  height: 2px;
  margin-bottom: 10px;
`;

export const StyledDrawerContentScrollView = styled(DrawerContentScrollView)``;

export const StyledDrawerItemList = styled(DrawerItemList).attrs(() => ({
  activeBackgroundColor: "rgba(147, 83, 144, 0.2)",
  activeTintColor: "#935390",
  inactiveTintColor: "#a4b0be",
  labelStyle: { fontWeight: "bold", marginLeft: -15, fontSize: 16 },
}))``;

export const ExitDivider = styled(Divider)`
  color: #f7f9fa;
  height: 2px;
  margin: 0 10px;
`;

export const Footer = styled.View`
  height: 10%;
  width: 100%;
  align-items: center;
`;

export const ExitView = styled.TouchableOpacity``;

export const Exit = styled.Text`
  color: #c0392b;
  font-size: 16px;
  margin-top: 8px;
`;
