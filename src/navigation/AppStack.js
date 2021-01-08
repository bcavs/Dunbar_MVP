import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExploreScreen from "../screens/ExploreScreen";
import FriendsScreen from "../screens/FriendsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import InvitesScreen from "../screens/InvitesScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          /**
           *  Setup icons for tabs 
           * **Note: focused states are the same as unfocused 
           *         -- would like to change this in the future to have outlines on unforcused and filled on focused 
           *  */
          if (route.name === 'Explore') {
            iconName = focused
              ? 'ios-compass'
              : 'ios-compass';
          }
          else if (route.name === 'Friends') {
            iconName = focused ? 'ios-people' : 'ios-people';
          }
          else if (route.name === 'Me') {
            iconName = focused ? 'ios-person' : 'ios-person';
          }
          else if (route.name === 'Invites') {
            iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor:"#000",
          paddingTop:20,
          paddingBottom:20,
          height:75
        }
      }}

    >
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ header: () => null }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{ header: () => null }}
      />
      <Tab.Screen
        name="Invites"
        component={InvitesScreen}
        options={{ header: () => null }}
      />
      <Tab.Screen
        name="Me"
        component={ProfileScreen}
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