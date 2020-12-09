import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Typography, Colors } from "../styles";
import { default as FacebookIcon } from "../../assets/images/svgs/facebook-icon";
import { default as GoogleIcon } from "../../assets/images/svgs/google-icon";
import { default as EmailIcon } from "../../assets/images/svgs/email-icon";

// Dunbar app buttons
/**
 * PROPS
 * @param text | Button text
 * @param press | onPress function
 * @param buttonStyle | Style the button container object
 * @param textStyle | Style the text inside the button
 *
 * @param primaryButton | Make a primary button (Orange BG w/ white text)
 * @param secondaryButton | Make a primary button (Light gray BG w/ black text)
 */

export function GoogleButton(props) {
  return (
    <View style={[styles.buttonContainer]}>
      <Pressable style={[styles.button]} onPress={props.onPress}>
        <View style={[styles.iconContainer]}>
          <GoogleIcon style={[styles.googleIcon]} />
        </View>
        <Text style={{ fontWeight: "bold" }}>Continue with Google</Text>
      </Pressable>
    </View>
  );
}

export function FacebookButton(props) {
  return (
    <View style={[styles.buttonContainer]}>
      <Pressable
        style={[styles.button, styles.facebookbg]}
        onPress={props.onPress}
      >
        <View style={[styles.iconContainer]}>
          <FacebookIcon style={[styles.facebookIcon]} />
        </View>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Continue with Facebook
        </Text>
      </Pressable>
    </View>
  );
}

export function EmailButton(props) {
  return (
    <View style={[styles.buttonContainer]}>
      <Pressable
        style={[styles.button, { backgroundColor: "#f05e23", borderWidth: 0 }]}
        onPress={props.onPress}
      >
        <View style={[styles.iconContainer]}>
          <EmailIcon style={[styles.emailIcon]} />
        </View>
        <Text style={{ fontWeight: "bold", color: "white" }}>
          Login with Email
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    // backgroundColor: "red",
    width: "100%",
    height: 50,
    justifyContent: "center",
    marginVertical: 10,
    alignItems: "center",
    paddingHorizontal: 40,
  },
  button: {
    backgroundColor: "white",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderRadius: 50,
    borderColor: "#DFDFDF",
    borderWidth: 1,
    flexDirection: "row",
  },
  iconContainer: {
    // backgroundColor: "purple",
    height: 50,
    width: 50,
    position: "absolute",
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  googleIcon: {
    width: 30,
    height: 30,
  },
  facebookbg: {
    backgroundColor: "#1877F2",
  },
  facebookIcon: {
    // backgroundColor: "red",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
