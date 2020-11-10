// AuthHomeScreen.js
import React, { useContext } from "react";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Button,
  StatusBar,
  Image,
} from "react-native";
import { color } from "react-native-reanimated";
import CustomButton from "../components/CustomButton";
import { Typography, Colors } from "../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  imageContainer: {
    flex: 3,
    // backgroundColor: "red",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  heroImage: {
    flex: 1,
    resizeMode: "contain",
  },
  contentContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 25,
  },
});

export default function AuthHomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer]}>
        <Image
          style={[styles.heroImage]}
          source={require("../assets/images/friend_circles.png")}
        />
      </View>
      <View style={[styles.contentContainer]}>
        <Text style={[Typography.heading, { marginVertical: 10 }]}>Dunbar</Text>
        <Text style={[Typography.subheading, Colors.text_darkgray]}>
          Brief information about Dunbar
        </Text>
        <View style={styles.buttonContainer}>
          <CustomButton
            press={() => props.navigation.navigate("Login")}
            text={"Login"}
            textStyle={{ color: "black" }}
            secondaryButton
            bold
          />
          <CustomButton
            press={() => props.navigation.navigate("SignUp")}
            text={"Sign up"}
            primaryButton
            bold
          />
        </View>
      </View>
    </View>
  );
}
