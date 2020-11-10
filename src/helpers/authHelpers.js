import firebase from "firebase";

export async function login(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (e) {
    console.log("Error: ", e);
  }
}

export async function register(email, password) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  } catch (e) {
    console.log("Error: ", e);
    // setErrorMessage(e);
  }
}

export async function logout() {
  try {
    await firebase.auth().signOut();
  } catch (e) {
    console.error(e);
    // setErrorMessage(e);
  }
}
