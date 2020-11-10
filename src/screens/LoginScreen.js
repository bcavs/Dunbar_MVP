// SignUpScreen.js

import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { login } from "../helpers/authHelpers";
import { AntDesign } from "@expo/vector-icons";
import { Spacing, Typography, Colors } from "../styles";

export default function LoginScreen(props) {
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
      borderColor: "gray",
      borderWidth: 1,
      marginTop: 8,
    },
    backButtonContainer: {
      height: 75,
      justifyContent: "center",
      alignItems: "flex-start",
      width: "100%",
    },
  });

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <View style={[Spacing.global_horizontal_padding, styles.container]}>
      <View style={styles.backButtonContainer}>
        <Pressable onPress={() => props.navigation.goBack()}>
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
          style={{
            textAlign: "left",
            alignSelf: "flex-start",
          }}
        >
          Welcome back
        </Text>
        <Text
          style={{
            textAlign: "left",
            alignSelf: "flex-start",
          }}
        >
          Log in to continue!
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={(values) => {
            login(values.email, values.password);
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            isValid,
            touched,
          }) => {
            return (
              <>
                <TextInput
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  autoCapitalize="none"
                  style={styles.textInput}
                />
                {errors.email && touched.email && (
                  <Text style={{ color: "red" }}>{errors.email}</Text>
                )}
                <TextInput
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  secureTextEntry
                  autoCapitalize="none"
                  style={styles.textInput}
                />
                {errors.password && touched.password && (
                  <Text style={{ color: "red" }}>{errors.password}</Text>
                )}
                <Button
                  title="Login"
                  // onPress={() => login(email, password)}
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
              </>
            );
          }}
        </Formik>
      </View>
      <View>
        <Button
          title="Don't have an account? Signup"
          onPress={() => props.navigation.navigate("SignUp")}
        />
      </View>
    </View>
  );
}

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email address is required"),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});
