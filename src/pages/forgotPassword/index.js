import React from "react";
import { ScrollView } from "react-native";
import Image from "../../assets/forgot_password.svg";
import Header from "../../components/Header";
import { globalStyle } from "../../global/style";
import {
  Body,
  style,
  Title,
  Description,
  Input,
  StyledButton,
  TitleView,
} from "./style";

export default function ForgotPassword({ navigation }) {
  return (
    <>
      <Header navigation={navigation} />
      <Body>
        <ScrollView contentContainerStyle={style.background}>
          <Image width="100%" height="40%" />

          <TitleView>
            <Title>Recuperação de senha</Title>
            <Description>
              Preencha com seu e-mail para recuperar sua senha.
            </Description>
          </TitleView>

          <Input label="E-mail" />

          <StyledButton style={globalStyle.Shadow}>RECUPERAR</StyledButton>
        </ScrollView>
      </Body>
    </>
  );
}
