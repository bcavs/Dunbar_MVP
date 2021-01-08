import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import firebase from "firebase";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import LoadingScreen from "../screens/LoadingScreen";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";

export default function Routes() {
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState("");

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    setLoading(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (firebase.auth().currentUser) {
    // setUser(firebase.auth().currentUser);
    // console.log("Current User: ", firebase.auth().currentUser);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        {user ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
