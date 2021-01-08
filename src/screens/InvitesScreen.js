// InvitesScreen.js
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
export default function InvitesScreen() {
  return (
    <View style={styles.container}>
      <Text>This is your invites screen</Text>
      <DunbarButton
        text="Logout"
        primary
        onPress={() => logout()}
        buttonWidth="50%"
        buttonHeight="40px"
        containerBackgroundColor="transparent"
      />
    </View>
  );
}