import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../pages/singIn";
import ForgotPassword from "../pages/forgotPassword";
import SignUp from "./SignUp";
import Drawer from "./Drawer";
import Profile from "./Profile";

const Tab = createStackNavigator();

export default function Routes() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator headerMode="none" initialRouteName="SignIn">
          <Tab.Screen name="SignIn" component={SignIn} />
          <Tab.Screen name="SignUp" component={SignUp} />
          <Tab.Screen name="ForgotPassword" component={ForgotPassword} />
          <Tab.Screen name="Drawer" component={Drawer} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
