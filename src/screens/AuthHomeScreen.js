// AuthHomeScreen.js
import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { default as HeroImage } from "../../assets/images/svgs/dnbr-login-shadow";
import { GoogleIcon, FacebookIcon, EmailIcon } from "../../assets/images/svgs";
import DunbarButton from "../components/DunbarButton";
import { Colors } from "../styles";

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
    paddingHorizontal: 30,
    flex: 1,
  },
});

export default function AuthHomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer]}>
        <HeroImage style={[styles.heroImage]} />
      </View>
      <View style={[styles.contentContainer]}>
        <View style={styles.buttonContainer}>
          <DunbarButton
            text="Continue with Google"
            fontWeight="bold"
            leftIcon={<GoogleIcon />}
            onPress={() => console.log("Login with Google")}
          />
          <DunbarButton
            text="Continue with Facebook"
            fontWeight="bold"
            leftIcon={<FacebookIcon />}
            buttonBackgroundColor={Colors.facebook}
            buttonBorderColor={Colors.facebook}
            textColor="white"
            onPress={() => console.log("Login with Facebook")}
          />

          <Divider />

          <DunbarButton
            text="Log in with Email"
            fontWeight="bold"
            leftIcon={<EmailIcon />}
            onPress={() => props.navigation.navigate("Login")}
            primary
          />
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

//Simple component for dividing the social buttons from the email login button
function Divider() {
  return (
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
          flex: 1,
          height: 1,
        }}
      />
      <Text style={{ marginHorizontal: 7, color: "#272727" }}>or</Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#dfdfdf",
          flex: 1,
          height: 1,
        }}
      />
    </View>
  );
}
