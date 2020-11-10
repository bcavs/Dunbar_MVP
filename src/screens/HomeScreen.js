// HomeScreen.js
import React, { useContext } from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { logout } from "../helpers/authHelpers";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <Text>Hi {user && user}!</Text> */}
      <TouchableOpacity onPress={() => logout()}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
