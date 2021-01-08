import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ExploreStack from "./ExploreStack";

import FriendsScreen from "../screens/FriendsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import InvitesScreen from "../screens/InvitesScreen";

import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Explore"
        component={ExploreStack}
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

export default function AppStack() {
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