import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import AuthHomeScreen from "../screens/AuthHomeScreen";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="AuthHome">
      <Stack.Screen
        name="AuthHome"
        component={AuthHomeScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}
