// SignUpScreen.js

import React, { useState, useContext } from "react";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import { Colors, Typography } from "../styles";
import { register } from "../helpers/authHelpers";

export default function SignUpScreen({ navigation }) {
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <View style={styles.container}>
      <Text style={[Typography.heading, headerStyle]}>Sign Up</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpValidationSchema}
        onSubmit={(values) => register(values.email, values.password)}
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
                <Text style={Colors.error}>{errors.email}</Text>
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
              <Pressable
                onPress={handleSubmit}
                disabled={!isValid}
                style={[Colors.background_primary]}
              >
                <Text>Sign Up</Text>
              </Pressable>
              <Pressable
                title="Already have an account? Login"
                onPress={() => navigation.navigate("Login")}
              >
                <Text>Already have an account? Login</Text>
              </Pressable>
            </>
          );
        }}
      </Formik>
    </View>
  );
}

const headerStyle = { color: "blue" };

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

const signUpValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email address is required"),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});
