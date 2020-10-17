// SignUpScreen.js

import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
const handleLogin = () => {
  // TODO: Firebase stuff...
  console.log("handle login");
};
export default function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      {errorMessage && <Text style={{ color: "red" }}>{errorMessage}</Text>}
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
      <Button title="Login" onPress={() => handleLogin()} />
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
