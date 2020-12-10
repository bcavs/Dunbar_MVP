// FriendsScreen.js
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DunbarButton from "../components/DunbarButton";
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
      <Text>Friends list will go here</Text>
      <DunbarButton
        text="Logout"
        primary
        onPress={() => logout()}
        buttonWidth="50%"
        containerBackgroundColor="transparent"
      />
    </View>
  );
}
