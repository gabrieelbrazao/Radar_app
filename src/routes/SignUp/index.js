import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpOptions from "../../pages/signUpOptions";
import SignUpSuccess from "../../pages/signUpSuccess";
import SignUpPro from "../../pages/signUpPro";

const Tab = createStackNavigator();

export default function SignUp() {
  return (
    <Tab.Navigator headerMode="none" initialRouteName="SignUpOptions">
      <Tab.Screen name="SignUpOptions" component={SignUpOptions} />

      <Tab.Screen name="SignUpPro" component={SignUpPro} />

      <Tab.Screen name="SignUpSuccess" component={SignUpSuccess} />
    </Tab.Navigator>
  );
}
