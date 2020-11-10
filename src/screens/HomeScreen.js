// HomeScreen.js
import React, { useContext } from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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
      <Text>Map will go here</Text>
      <CustomButton
        press={() => logout()}
        text="Logout"
        primaryButton
        buttonStyle={{ paddingHorizontal: 25, flex: null }}
      />
    </View>
  );
}
