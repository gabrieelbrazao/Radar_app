import React from "react";
import Icon from "react-native-vector-icons/dist/MaterialIcons";
import { HeaderView, BackText, Background } from "./style";

export default function Header(props) {
  return (
    <Background>
      <HeaderView onPress={() => props.navigation.goBack()}>
        <Icon name="chevron-left" size={40} color="#7a8a97" />
        <BackText>Voltar</BackText>
      </HeaderView>
    </Background>
  );
}
