import React, { useState } from "react";
import { Checkbox } from "react-native-paper";
import { globalStyle } from "../../global/style";

import {
  Form,
  Input,
  CheckboxView,
  CheckboxTitle,
  CheckboxLine,
  CheckboxLabel,
  CheckboxPrimary,
  ProceedButton,
  TextClient,
  ViewClient,
  TextPrimaryClient,
  ViewButton,
} from "./style";

export default function SignUpStep2(props) {
  const [terms, setTerms] = useState(false);

  return (
    <>
      <Form>
        <Input label="E-mail" />

        <Input label="Senha" />

        <Input label="Confirmar senha" />

        <CheckboxView>
          <CheckboxTitle>TERMOS DE USO</CheckboxTitle>

          <CheckboxLine>
            <Checkbox
              onPress={() => setTerms(!terms)}
              status={terms ? "checked" : "unchecked"}
              color="#935390"
            />

            <CheckboxLabel>Li e aceito os </CheckboxLabel>

            <CheckboxPrimary>termos de uso.</CheckboxPrimary>
          </CheckboxLine>
        </CheckboxView>
      </Form>

      <ViewButton>
        <ProceedButton
          style={globalStyle.Shadow}
          onPress={() => props.navigation.navigate("SignUpSuccess")}
        >
          CONCLUIR
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
