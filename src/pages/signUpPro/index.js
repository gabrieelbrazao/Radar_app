import React from "react";
import Header from "../../components/Header";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import SignUpProStep1 from "../../components/signUpProStep1";
import SignUpProStep2 from "../../components/signUpProStep2";
import {
  Body,
  Title,
  Description,
  TextProgress,
  ViewProgress,
  ViewTitle,
  StyledProgressBar,
  style,
} from "./style";

export default function SignUpStep1({ navigation }) {
  const state = useSelector((state) => state);

  return (
    <>
      <Header navigation={navigation} />
      <Body>
        <ScrollView contentContainerStyle={style.background}>
          <ViewTitle>
            <Title>Profissional</Title>
            <Description>Preencha os campos abaixo para concluir</Description>
          </ViewTitle>

          <ViewProgress>
            <StyledProgressBar progress={state.STEP / 2} color="#935390" />
            <TextProgress>{state.STEP} de 2</TextProgress>
          </ViewProgress>

          {state.STEP == 1 && <SignUpProStep1 navigation={navigation} />}

          {state.STEP == 2 && <SignUpProStep2 navigation={navigation} />}
        </ScrollView>
      </Body>
    </>
  );
}
