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
  SafeAreaView,
} from "react-native";
import { default as HeroImage } from "../../assets/images/svgs/dnbr-login-shadow";
import { default as GoogleIcon } from "../../assets/images/svgs/google-icon";
import {
  GoogleButton,
  FacebookButton,
  EmailButton,
} from "../components/AuthButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  imageContainer: {
    flex: 7,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  heroImage: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 4,
    alignItems: "center",
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    marginTop: 25,
    flex: 1,
  },
});

export default function AuthHomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer]}>
        {/* <Image
          style={[styles.heroImage]}
          source={require("../../assets/friend_circles.png")}
        /> */}
        <HeroImage style={[styles.heroImage]} />
      </View>
      <View style={[styles.contentContainer]}>
        <View style={styles.buttonContainer}>
          {/* <CustomButton
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
          /> */}
          <GoogleButton onPress={() => console.log("Google Sign in")} />
          <FacebookButton onPress={() => console.log("Facebook Sign in")} />
          <View
            style={{
              height: 30,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderWidth: 1,
                borderColor: "#dfdfdf",
                width: "35%",
                height: 1,
              }}
            />
            <Text style={{ marginHorizontal: 7, color: "#272727" }}>or</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#dfdfdf",
                width: "35%",
                height: 1,
              }}
            />
          </View>
          <EmailButton onPress={() => props.navigation.navigate("Login")} />
        </View>
        <Pressable
          style={{ marginTop: 25, marginBottom: 14 }}
          onPress={() => props.navigation.navigate("SignUp")}
        >
          <Text>
            <Text>Don't have an account?</Text>{" "}
            <Text style={{ fontWeight: "bold" }}>Create one!</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
