import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlQ2ADkZjHS2wJwW4ql2MmuL-QpLdUmdE",
  authDomain: "signal-clone-b7445.firebaseapp.com",
  projectId: "signal-clone-b7445",
  storageBucket: "signal-clone-b7445.appspot.com",
  messagingSenderId: "1088954738377",
  appId: "1:1088954738377:web:f968541941db3366b40f18",
  measurementId: "G-CFCMK5WEVP",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { auth, db };
