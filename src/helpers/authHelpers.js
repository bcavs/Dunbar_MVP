import firebase from "firebase";
import 'firebase/firestore';

export async function login(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (e) {
    console.log("Error: ", e);
  }
}

/**
 * Registers a user in Firebase 
 * @param {Object} user -- the user object
 * @param {String} user.firstName -- first name of the user object
 * @param {String} user.lastName -- last name of the user object
 * @param {String} user.email -- email of the user object
 * @param {String} user.password -- password of the user object
 */
export async function register({ email, password, firstName, lastName }) {
  //TODO Check that the user object is structured correctly before creating it in Firebase
  try {
    await 
    firebase.auth()
      .createUserWithEmailAndPassword(email,password)
      .then( (response) => {
        //Get the uid Firebase assigned the new user
        const uid = response.user.uid
        //Create the user object to be saved in Firestore
        const userData = {
          id: uid,
          email: email,
          firstName: firstName,
          lastName: lastName,
        }

        //Get the firestore reference of the "users" collection
        const usersRef = firebase.firestore().collection("users")
        console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
        console.log("Adding this user object to the Firestore: ", userData)
        console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")

        //Add the user to the "users" collection with the auto-generated uid as the key
        usersRef
          .doc(uid)
          .set(userData)
          .then(() => console.log("User has been added to Firebase"))
          .catch(error => alert(error))
        }
      )
      .catch(error => 
        alert(error)
      );
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

export async function confirmVerificationCode(
  verificationId,
  verificationCode
) {
  try {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      verificationCode
    );
    await firebase.auth().signInWithCredential(credential);
  } catch (err) {
    console.error(err);
  }
}