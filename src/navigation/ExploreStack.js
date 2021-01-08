import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ExploreScreen from "../screens/ExploreScreen";
import InvitesScreen from "../screens/InvitesScreen";

const Stack = createStackNavigator();

export default function ExploreStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Invite"
        component={InvitesScreen}
      />
    </Stack.Navigator>
  );
}