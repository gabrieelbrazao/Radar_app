import React from "react";
import Icon from "react-native-vector-icons/dist/MaterialIcons";
import Profile from "../../assets/profile.svg";
import { useDispatch } from "react-redux";
import {
  Background,
  BackgroundImage,
  TitleChoose,
  TextChoose,
  BackgroundIcon,
  TitleOption,
  TextOption,
  StyledDivider,
  TextDivider,
  ViewDivider,
  TextViewDivider,
  ProChoice,
  ClientChoice,
  ViewChoose,
} from "./style";

export default function SignUpOptions({ navigation }) {
  const dispatch = useDispatch();

  return (
    <Background>
      <BackgroundImage>
        <Profile width="100%" height="100%" />
      </BackgroundImage>

      <ViewChoose>
        <TitleChoose>Escolha seu perfil</TitleChoose>
        <TextChoose>
          Selecione uma das opções abaixo e aproveite o app
        </TextChoose>
      </ViewChoose>

      <ProChoice
        onPress={() => {
          dispatch({ type: "FIRST" });
          navigation.navigate("SignUpPro");
        }}
      >
        <BackgroundIcon>
          <Icon name="work" color="#935390" size={30} />
        </BackgroundIcon>

        <TitleOption>PROFISSIONAL</TitleOption>

        <TextOption>Trabalhe conosco!</TextOption>
      </ProChoice>

      <ViewDivider>
        <TextViewDivider>
          <TextDivider>OU</TextDivider>
        </TextViewDivider>

        <StyledDivider />
      </ViewDivider>

      <ClientChoice onPress={() => console.log("Cliente")}>
        <BackgroundIcon>
          <Icon name="person" color="#935390" size={30} />
        </BackgroundIcon>

        <TitleOption>CLIENTE</TitleOption>

        <TextOption>Consiga serviços incríveis!</TextOption>
      </ClientChoice>
    </Background>
  );
}
