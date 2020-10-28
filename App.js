import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Providers from "./src/navigation";
import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBE6WoqKloQieY4Oay2wKx9h6DilSHmdTE",
  authDomain: "dunbar-mvp.firebaseapp.com",
  databaseURL: "https://dunbar-mvp.firebaseio.com",
  projectId: "dunbar-mvp",
  storageBucket: "dunbar-mvp.appspot.com",
  messagingSenderId: "176680631031",
  appId: "1:176680631031:web:78d4d2cac8a324dfbf71f2",
  measurementId: "G-VB8CBCQ4LQ",
};
if (firebase.apps.length == 0) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
    };
  }
  render() {
    return <Providers />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
