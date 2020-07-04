import React from "react";
import { KeyboardAvoidingView, Text, View, Image } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import SignInForm from "../../components/signInForm";
import SignInDraggable from "../../components/signInDraggable";
import style from "./style";

export default function SignIn({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={style.background}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
      enabled={Platform.OS === "ios" ? true : false}
    >
      <View style={style.logo}>
        <Text>LOGO</Text>
      </View>

      <BottomSheet
        snapPoints={["100%", "75%", "50%"]}
        renderContent={() => <SignInForm navigation={navigation} />}
        renderHeader={() => <SignInDraggable />}
        initialSnap={1}
      />
    </KeyboardAvoidingView>
  );
}
