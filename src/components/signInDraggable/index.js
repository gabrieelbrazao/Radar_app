import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Background } from "./style";

export default function SignInDraggable() {
  return (
    <Background>
      <Icon name="drag-handle" size={30} color="gray" />
    </Background>
  );
}
