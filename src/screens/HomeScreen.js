// HomeScreen.js
import React from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default function HomeScreen() {
  const currentUser = "user";
  return (
    <View style={styles.container}>
      <Text>Hi {currentUser && currentUser}!</Text>
    </View>
  );
}
