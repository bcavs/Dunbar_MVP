import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "../screens/authScreens/SignUpScreen";
import LoginScreen from "../screens/authScreens/LoginScreen";
import AuthHomeScreen from "../screens/authScreens/AuthHomeScreen";

const Stack = createStackNavigator();

export default function AuthStack() {
  let initialRoute;
  if (__DEV__) {
    console.log("AuthStack.js === You are currently in dev mode");
    initialRoute = "AuthStack";
  } else {
    initialRoute = "AuthStack";
  }
  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        //Allows the swipe back gesture to work on Android
        gestureEnabled: true,
        gestureDirection: "horizontal",
      }}
    >
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
