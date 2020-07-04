import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useDispatch } from "react-redux";
import DrawerContent from "../../components/drawerContent";
import Radar from "../../pages/radar";

const DrawerNav = createDrawerNavigator();

export default function Drawer({ navigation }) {
  const dispatch = useDispatch();

  dispatch({ type: "ADD_MAIN_NAVIGATION", navigation });

  return (
    <DrawerNav.Navigator
      drawerContent={(props) => <DrawerContent props={props} />}
      initialRouteName="Radar"
    >
      <DrawerNav.Screen name="Radar" component={Radar} />
    </DrawerNav.Navigator>
  );
}
