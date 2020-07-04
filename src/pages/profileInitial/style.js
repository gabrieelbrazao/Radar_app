import styled from "styled-components";

export const Background = styled.View`
  background-color: #ecf0f1;
  flex: 1;
  margin-top: 60px;
  flex-direction: column;
  justify-content: space-around;
`;

export const DataView = styled.View`
  height: 35%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const BackgoundAvatar = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: #dfe6ed;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const EditAvatar = styled.TouchableOpacity`
  background-color: #ced6e0;
  height: 35px;
  width: 35px;
  border-radius: 17.5px;
  position: absolute;
  right: 0;
  bottom: 5px;
  justify-content: center;
  align-items: center;
`;

export const NameUser = styled.Text`
  font-size: 25px;
  color: #2f3542;
  font-weight: bold;
`;

export const MenuView = styled.ScrollView`
  height: 65%;
  width: 100%;
  margin-bottom: 30px;
`;

export const MenuItem = styled.TouchableOpacity`
  padding: 0 30px;
  height: 70px;
  flex-direction: row;
  margin-top: 20px;
`;

export const MenuItemIcon = styled.View`
  flex: 0.15;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
`;

export const MenuItemText = styled.View`
  flex: 0.7;
  padding: 0 10px;
`;

export const MenuItemTitle = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const MenuItemTitleText = styled.Text`
  color: #2f3542;
  font-size: 18px;
  font-weight: bold;
`;

export const MenuItemDescription = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

export const MenuItemDescriptionText = styled.Text`
  color: #a4b0be;
  font-size: 13px;
`;

export const MenuItemProceed = styled.View`
  flex: 0.15;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
`;
