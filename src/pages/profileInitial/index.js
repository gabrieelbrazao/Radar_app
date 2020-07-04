import React from "react";
import Header from "../../components/Header";
import Icon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import {
  Background,
  DataView,
  BackgoundAvatar,
  NameUser,
  MenuView,
  EditAvatar,
  MenuItem,
  MenuItemIcon,
  MenuItemText,
  MenuItemProceed,
  MenuItemTitle,
  MenuItemDescription,
  MenuItemTitleText,
  MenuItemDescriptionText,
} from "./style";

export default function ProfileInitial({ navigation }) {
  return (
    <>
      <Header navigation={navigation} />
      <Background>
        <DataView>
          <BackgoundAvatar>
            <Icon name="account" color="#a4b0be" size={60} />
            <EditAvatar>
              <Icon name="pencil" color="#935390" size={25} />
            </EditAvatar>
          </BackgoundAvatar>
          <NameUser>Gabriel Brazão</NameUser>
        </DataView>

        <MenuView>
          <MenuItem onPress={() => navigation.navigate("ProfilePersonalData")}>
            <MenuItemIcon>
              <Icon name="account-edit" color="#935390" size={35} />
            </MenuItemIcon>
            <MenuItemText>
              <MenuItemTitle>
                <MenuItemTitleText>DADOS PESSOAIS</MenuItemTitleText>
              </MenuItemTitle>
              <MenuItemDescription>
                <MenuItemDescriptionText>
                  Altere seus dados pessoais
                </MenuItemDescriptionText>
              </MenuItemDescription>
            </MenuItemText>
            <MenuItemProceed>
              <Icon name="chevron-right" color="#2f3542" size={40} />
            </MenuItemProceed>
          </MenuItem>

          <MenuItem>
            <MenuItemIcon>
              <Icon name="briefcase-check" color="#935390" size={35} />
            </MenuItemIcon>
            <MenuItemText>
              <MenuItemTitle>
                <MenuItemTitleText>ESPECIALIDADES</MenuItemTitleText>
              </MenuItemTitle>
              <MenuItemDescription>
                <MenuItemDescriptionText>
                  Gerencie suas especialidades
                </MenuItemDescriptionText>
              </MenuItemDescription>
            </MenuItemText>
            <MenuItemProceed>
              <Icon name="chevron-right" color="#2f3542" size={40} />
            </MenuItemProceed>
          </MenuItem>

          <MenuItem>
            <MenuItemIcon>
              <Icon name="pencil-lock" color="#935390" size={35} />
            </MenuItemIcon>
            <MenuItemText>
              <MenuItemTitle>
                <MenuItemTitleText>ALTERAR SENHA</MenuItemTitleText>
              </MenuItemTitle>
              <MenuItemDescription>
                <MenuItemDescriptionText>
                  Altere sua senha
                </MenuItemDescriptionText>
              </MenuItemDescription>
            </MenuItemText>
            <MenuItemProceed>
              <Icon name="chevron-right" color="#2f3542" size={40} />
            </MenuItemProceed>
          </MenuItem>
        </MenuView>
      </Background>
    </>
  );
}
