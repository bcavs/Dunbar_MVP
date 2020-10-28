import React, { createContext, useState } from "react";
import firebase from "firebase";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        errorMessage,
        setErrorMessage,
        login: async (email, password) => {
          try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log("Error: ", e);
          }
        },
        register: async (email, password) => {
          try {
            await firebase
              .auth()
              .createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log("Error: ", e);
            // setErrorMessage(e);
          }
        },
        logout: async () => {
          try {
            await firebase.auth().signOut();
          } catch (e) {
            console.error(e);
            // setErrorMessage(e);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
