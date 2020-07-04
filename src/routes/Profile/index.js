import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileInitial from "../../pages/profileInitial";
import ProfilePersonalData from "../../pages/profilePersonalData";

const Tab = createStackNavigator();

export default function Profile() {
  return (
    <Tab.Navigator headerMode="none" initialRouteName="ProfileInitial">
      <Tab.Screen name="ProfileInitial" component={ProfileInitial} />
      <Tab.Screen name="ProfilePersonalData" component={ProfilePersonalData} />
    </Tab.Navigator>
  );
}
