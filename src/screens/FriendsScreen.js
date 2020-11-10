// FriendsScreen.js
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
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
      <CustomButton
        press={() => logout()}
        text="Logout"
        primaryButton
        buttonStyle={{ paddingHorizontal: 25, flex: null }}
      />
    </View>
  );
}
