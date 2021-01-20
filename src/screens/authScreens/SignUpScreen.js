// SignUpScreen.js

import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Button,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import * as yup from "yup";

import { Formik } from "formik";
import { Colors, Typography, Spacing } from "../../styles";
import { register, confirmVerificationCode } from "../../helpers/authHelpers";
import {
  AntDesign,
  EvilIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import CustomInput from "../../components/CustomInput";
import DunbarButton from "../../components/DunbarButton";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import firebase from "firebase";

export default function SignUpScreen({ navigation }) {
  const initialValues = {
    email: "",
    phone:"",
    isEmail: true,
    password: "",
    passwordConfirm: "",
    firstName: "",
    lastName: "",
  };

  const recaptchaVerifier = React.useRef(null);
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();
  const firebaseConfig = firebase.app().options;
  return (
    <View style={[Spacing.global_horizontal_padding, styles.container]}>
      <View style={styles.backButtonContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={32} color={Colors.gray3} />
        </Pressable>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <Text
          style={[
            Typography.heading,
            {
              textAlign: "left",
              alignSelf: "flex-start",
              marginBottom: 10,
            },
          ]}
        >
          Hi there!
        </Text>
        <Text
          style={[
            Colors.text_darkgray,
            {
              textAlign: "left",
              alignSelf: "flex-start",
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 25,
            },
          ]}
        >
          Fill out the form below to join!
        </Text>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
          attemptInvisibleVerification={true}
        />
        {verificationId ? (
          <View>
            <Text style={{ marginTop: 20 }}>Enter Verification code</Text>
            <TextInput
              style={{ marginVertical: 10, fontSize: 17 }}
              editable={!!verificationId}
              placeholder="123456"
              onChangeText={setVerificationCode}
            />
            <Button
              title="Confirm Verification Code"
              disabled={!verificationId}
              onPress={() =>
                confirmVerificationCode(verificationId, verificationCode)
              }
            />
          </View>
        ) : (
          <Formik
            initialValues={initialValues}
            validationSchema={signUpValidationSchema}
            validateOnChange={true}
            validateOnBlur={true}
            onSubmit={(values) => {
              Keyboard.dismiss();
              console.log("Signup Screen user values: ", values);
             
                //TODO validate all values that need to be passed into the register function
                register(values);
              
            }}
          >
            {({
              errors,
              touched,
              values,
              handleChange,
              handleSubmit,
              setFieldTouched,
              setFieldValue,
            }) => {
              return (
                <>
                  <CustomInput
                    leftIcon={
                      <MaterialCommunityIcons
                        name="cellphone-iphone"
                        size={24}
                        color={Colors.primary}
                      />
                    }
                    keyboardType="email-address"
                    touched={touched.email}
                    value={values.email}
                    error={errors.email}
                    name="email"
                    placeholder="Email"
                    handleChange={handleChange("email")}
                    setFieldTouched={setFieldTouched}
                    autoCapitalize="none"
                  />
                  <CustomInput
                    leftIcon={
                      <MaterialCommunityIcons
                        name="account-outline"
                        size={24}
                        color={Colors.primary}
                      />
                    }
                    value={values.firstName}
                    name="firstName"
                    placeholder="First Name"
                    handleChange={handleChange("firstName")}
                    //   handleBlur={handleBlur("firstName")}
                    setFieldTouched={setFieldTouched}
                    autoCapitalize="words"
                  />
                  <CustomInput
                    leftIcon={
                      <MaterialCommunityIcons
                        name="account-outline"
                        size={24}
                        color={Colors.primary}
                      />
                    }
                    value={values.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    handleChange={handleChange("lastName")}
                    //   handleBlur={handleBlur("lastName")}
                    setFieldTouched={setFieldTouched}
                    autoCapitalize="words"
                  />
                  <CustomInput
                    leftIcon={
                      <EvilIcons name="lock" size={35} color={Colors.primary} />
                    }
                    value={values.password}
                    name="password"
                    placeholder="Password"
                    handleChange={handleChange("password")}
                    touched={touched.password}
                    error={errors.password}
                    //   handleBlur={handleBlur("password")}
                    setFieldTouched={setFieldTouched}
                    secureTextEntry
                    autoCapitalize="none"
                  />
                  <CustomInput
                    leftIcon={
                      <EvilIcons name="lock" size={35} color={Colors.primary} />
                    }
                    value={values.passwordConfirm}
                    touched={touched.passwordConfirm}
                    error={errors.passwordConfirm}
                    name="passwordConfirm"
                    placeholder="Confirm Password"
                    handleChange={handleChange("passwordConfirm")}
                    setFieldTouched={setFieldTouched}
                    secureTextEntry
                    autoCapitalize="none"
                  />
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <DunbarButton
                      text="Sign up"
                      primary
                      onPress={() => handleSubmit()}
                    />
                  </View>
                </>
              );
            }}
          </Formik>
        )}
        <FirebaseRecaptchaBanner />
      </View>
      <Pressable
        style={{ marginTop: 25, marginBottom: 14 }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text>
          <Text>Already have an account?</Text>{" "}
          <Text style={{ fontWeight: "bold" }}>Log in!</Text>
        </Text>
      </Pressable>
    </View>
  );
}

const signUpValidationSchema = yup.object().shape({
  email: yup.string()
      .email("Please enter a valid email address")
      .required("This field is required"),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  textInput: {
    height: 40,
    width: "100%",
    // flex: 1,
    height: 45,
    // borderColor: "gray",
    // borderWidth: 1,
    // marginTop: 8,
    marginLeft: 5,
    fontSize: 16,
  },
  backButtonContainer: {
    height: 75,
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    // borderColor: "#fff",
    // height: 40,
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 25,
  },
});
