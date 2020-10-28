// SignUpScreen.js

import React, { useState, useContext } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { AuthContext } from "../navigation/AuthProvider";

export default function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, errorMessage } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Text style={{ color: "red" }}>err: {errorMessage}</Text>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
      <TextInput
        secureTextEntry
        placeholder="Password"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={(password) => setPassword(password)}
        value={password}
      />
      <Button title="Login" onPress={() => login(email, password)} />
      <Button
        title="Don't have an account? Signup"
        onPress={() => props.navigation.navigate("SignUp")}
      />
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
