import React from "react";
import { globalStyle } from "../../global/style";
import {
  Background,
  Title,
  Description,
  AnimationView,
  Animation,
  ConfirmButton,
} from "./style";

export default function SignUpSuccess({ navigation }) {
  return (
    <Background>
      <AnimationView>
        <Animation
          source={require("../../assets/success_effect.json")}
          autoPlay
          loop={false}
          colorFilters={[
            {
              keypath: "fa-check",
              color: "#ecf0f1",
            },
            {
              keypath: "circle-base",
              color: "#935390",
            },
          ]}
          resizeMode="cover"
        />
      </AnimationView>

      <Title>CONTA CRIADA COM SUCESSO</Title>

      <Description>Agora, vá em iniciar para prosseguir</Description>

      <ConfirmButton
        style={globalStyle.Shadow}
        onPress={() => navigation.navigate("Drawer")}
      >
        INICIAR
      </ConfirmButton>
    </Background>
  );
}
