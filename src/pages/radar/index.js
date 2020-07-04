import React from "react";
import MapView from "react-native-maps";
import { useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/dist/MaterialIcons";
import { Bottom, Input, InputText, Menu } from "./style";

export default function Radar({ navigation }) {
  const dispatch = useDispatch();

  dispatch({ type: "ADD_DRAWER_NAVIGATION", navigation });

  return (
    <>
      <MapView
        showsCompass={false}
        style={{ width: "100%", height: "100%" }}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      ></MapView>

      <Menu onPress={() => navigation.openDrawer()} />

      <Bottom>
        <Input onPress={() => console.log("Pesquisar")}>
          <Icon name="search" color="#bdc3c7" size={25} />
          <InputText>Pesquisar</InputText>
        </Input>
      </Bottom>
    </>
  );
}
