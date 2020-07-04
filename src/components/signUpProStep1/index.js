import React, { useState, useRef } from "react";
import { RadioButton } from "react-native-paper";
import { globalStyle } from "../../global/style";
import { useDispatch } from "react-redux";
import {
  Form,
  Input,
  RadioView,
  RadioTitle,
  RadioGroup,
  RadioLabel,
  ViewButton,
  ProceedButton,
  ViewClient,
  TextClient,
  TextPrimaryClient,
} from "./style";

export default function SingUpProStep1(props) {
  const dispatch = useDispatch();
  const [sex, setSex] = useState("M");
  const female = useRef();
  const male = useRef();

  return (
    <>
      <Form>
        <Input label="Primeiro nome" />

        <Input label="Último nome" />

        <RadioView>
          <RadioTitle>SEXO</RadioTitle>
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

        <Input label="CNPJ" />
      </Form>

      <ViewButton>
        <ProceedButton
          style={globalStyle.Shadow}
          onPress={() => dispatch({ type: "SECOND" })}
        >
          AVANÇAR
        </ProceedButton>

        <ViewClient>
          <TextClient>É um cliente? </TextClient>
          <TextPrimaryClient onPress={() => props.navigation.popToTop()}>
            Entre aqui!
          </TextPrimaryClient>
        </ViewClient>
      </ViewButton>
    </>
  );
}
