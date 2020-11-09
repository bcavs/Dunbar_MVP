// SignUpScreen.js

import React, { useState, useContext } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { AuthContext } from "../navigation/AuthProvider";
import { Formik } from "formik";
import * as yup from "yup";

export default function LoginScreen(props) {
  const { login } = useContext(AuthContext);

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
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
              <Button
                title="Don't have an account? Signup"
                onPress={() => props.navigation.navigate("SignUp")}
              />
            </>
          );
        }}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8,
  },
});

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
