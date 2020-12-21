import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDNbGo8nPDeZiyTEYux4mft9XXeHFmTBFo",
  authDomain: "crown-db-9755c.firebaseapp.com",
  projectId: "crown-db-9755c",
  storageBucket: "crown-db-9755c.appspot.com",
  messagingSenderId: "312473783363",
  appId: "1:312473783363:web:5cea92e4320cba71b6d8f6",
  measurementId: "G-9TG7PBT60T",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
