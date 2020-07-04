import React from "react";
import Icon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import {
  Header,
  BackgoundAvatar,
  NameUser,
  EmailUser,
  NavigationText,
  Background,
  Body,
  NavigationDivider,
  StyledDrawerItemList,
  Footer,
  Exit,
  ExitDivider,
  ExitView,
  StyledDrawerContentScrollView,
} from "./style";

export default function DrawerContent({ props }) {
  const state = useSelector((state) => state);

  props.state.routes.forEach((val, index) => {
    props.descriptors[val.key].options.drawerIcon = ({ color, focused }) => {
      switch (index) {
        case 0:
          return (
            <Icon
              name={focused ? "home" : "home-outline"}
              color={color}
              size={30}
            />
          );
      }
    };

    switch (index) {
      case 0:
        props.descriptors[val.key].options.drawerLabel = "Página inicial";
    }
  });

  return (
    <Background>
      <Header
        onPress={() => {
          state.DRAWER_NAVIGATION.closeDrawer();
          state.MAIN_NAVIGATION.navigate("Profile");
        }}
      >
        <BackgoundAvatar>
          <Icon name="account" color="#a4b0be" size={40} />
        </BackgoundAvatar>

        <NameUser>Gabriel Brazão</NameUser>

        <EmailUser>gabrieelbrazao@gmail.com</EmailUser>
      </Header>

      <Body>
        <NavigationText>NAVEGAÇÃO</NavigationText>

        <NavigationDivider />

        <StyledDrawerContentScrollView>
          <StyledDrawerItemList {...props} />
        </StyledDrawerContentScrollView>
      </Body>

      <ExitDivider />

      <Footer>
        <ExitView onPress={() => console.log("Sair")}>
          <Exit>SAIR</Exit>
        </ExitView>
      </Footer>
    </Background>
  );
}
