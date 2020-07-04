import React, { useState, useRef } from "react";
import { HelperText } from "react-native-paper";
import validate from "validate.js";
import { globalStyle } from "../../global/style";
import {
  SignInButton,
  SignUpButton,
  ForgotPassText,
  Input,
  Title,
  Form,
  HelperView,
} from "./style";

export default function SignInForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const triedLogin = useRef(false);

  function validateEmail(value = email) {
    const constraints = {
      email: {
        presence: {
          allowEmpty: false,
          message: "Digite seu e-mail",
        },

        email: { message: "E-mail inválido" },
      },
    };

    const res = validate({ email: value }, constraints, {
      fullMessages: false,
    });

    setEmailError(res);

    return res;
  }

  function validatePassword(value = password) {
    const constraints = {
      password: {
        presence: {
          allowEmpty: false,
          message: "Digite sua senha",
        },
      },
    };

    const res = validate({ password: value }, constraints, {
      fullMessages: false,
    });

    setPasswordError(res);

    return res;
  }

  const handleSignIn = () => {
    triedLogin.current = true;

    let res = validateEmail() + validatePassword();

    if (res) return;

    console.log("Logado!");
  };

  return (
    <Form>
      <Title>Bem-vindo</Title>

      <Input
        label="E-mail"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={(value) => {
          setEmail(value);
          triedLogin.current && validateEmail(value);
        }}
        error={emailError}
      />

      <HelperView>
        <HelperText type="error" visible={emailError} padding="none">
          {emailError?.email[0]}
        </HelperText>
      </HelperView>

      <Input
        label="Senha"
        autoCapitalize="none"
        secureTextEntry={true}
        value={password}
        onChangeText={(value) => {
          setPassword(value);
          triedLogin.current && validatePassword(value);
        }}
        error={passwordError}
      />

      <HelperView>
        <HelperText type="error" visible={passwordError} padding="none">
          {passwordError?.password[0]}
        </HelperText>
      </HelperView>

      <SignInButton onPress={handleSignIn}>Entrar</SignInButton>

      <ForgotPassText
        mode="outlined"
        onPress={() => props.navigation.navigate("ForgotPassword")}
      >
        Esqueceu sua senha?
      </ForgotPassText>

      <SignUpButton
        mode="contained"
        onPress={() => props.navigation.navigate("SignUp")}
        style={globalStyle.Shadow}
      >
        Cadastrar-se
      </SignUpButton>
    </Form>
  );
}
