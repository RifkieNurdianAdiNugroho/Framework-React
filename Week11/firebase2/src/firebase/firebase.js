import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3v5SUjJwhHaCG-UzFRPjnoRbClBknMdI",
  authDomain: "fir-rifkie.firebaseapp.com",
  projectId: "fir-rifkie",
  storageBucket: "fir-rifkie.appspot.com",
  messagingSenderId: "48225544177",
  appId: "1:48225544177:web:1114bd61313d6e20a58650"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;