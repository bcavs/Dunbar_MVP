import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Typography, Colors } from "../styles";

export default function CustomButton(props) {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        height: 100,
        width: 150,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Pin INformation</Text>
      <Text>{props.pinInformation.title}</Text>
      <Text>{props.pinInformation.longitude}</Text>
      <Text>{props.pinInformation.latitude}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
