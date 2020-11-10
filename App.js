import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Routes from "./src/navigation/Routes";
import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBmtRVYO6uevEKUD4I-Svsf5XEeGLNpXKo",
  authDomain: "dunbar-social.firebaseapp.com",
  databaseURL: "https://dunbar-social.firebaseio.com",
  projectId: "dunbar-social",
  storageBucket: "dunbar-social.appspot.com",
  messagingSenderId: "143270588738",
  appId: "1:143270588738:web:398987080540fe787d18db",
  measurementId: "G-B5YLY1CY95",
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
    return <Routes />;
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
