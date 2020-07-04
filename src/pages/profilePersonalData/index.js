import React, { useState, useRef } from "react";
import Header from "../../components/Header";
import { RadioButton } from "react-native-paper";
import { ScrollView } from "react-native";
import { globalStyle } from "../../global/style";
import {
  Body,
  ViewTitle,
  Title,
  Description,
  Input,
  RadioView,
  RadioTitle,
  RadioGroup,
  RadioLabel,
  SaveButton,
  style,
} from "./style";

export default function ProfilePersonalData({ navigation }) {
  const [sex, setSex] = useState("M");
  const female = useRef();
  const male = useRef();

  return (
    <>
      <Header navigation={navigation} />
      <Body>
        <ScrollView contentContainerStyle={style.background}>
          <ViewTitle>
            <Title>Dados pessoais</Title>
            <Description>Preencha os campos abaixo para concluir</Description>
          </ViewTitle>

          <Input label="Primeiro nome" mode="outlined" />
          <Input label="Último nome" />
          <Input label="CNPJ" />

          <RadioTitle>SEXO</RadioTitle>
          <RadioView>
            <RadioGroup>
              <RadioButton
                status={sex === "M" ? "checked" : "unchecked"}
                onPress={() => {
                  setSex("M");
                }}
                color="#935390"
                ref={male}
              />

              <RadioLabel onPress={() => setSex("M")}>Masculino</RadioLabel>
            </RadioGroup>

            <RadioGroup>
              <RadioButton
                status={sex === "F" ? "checked" : "unchecked"}
                onPress={() => {
                  setSex("F");
                }}
                color="#935390"
                ref={female}
              />

              <RadioLabel onPress={() => setSex("F")}>Feminino</RadioLabel>
            </RadioGroup>
          </RadioView>

          <SaveButton style={globalStyle.Shadow}>SALVAR</SaveButton>
        </ScrollView>
      </Body>
    </>
  );
}
