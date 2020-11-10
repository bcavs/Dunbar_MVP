import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import FriendsScreen from "../screens/FriendsScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Explore"
        component={HomeScreen}
        options={{ header: () => null }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{ header: () => null }}
      />
    </Tab.Navigator>
  );
}

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeTabNavigator}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}
