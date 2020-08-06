import firebase from "firebase";
import "firebase/auth"
import "firebase/database"
var firebaseConfig = {
  apiKey: "AIzaSyBlWoLE-QGKELysbNZrt3mqdO5QNK91RLg",
  authDomain: "crud-firebase-b9b4f.firebaseapp.com",
  databaseURL: "https://crud-firebase-b9b4f.firebaseio.com",
  projectId: "crud-firebase-b9b4f",
  storageBucket: "crud-firebase-b9b4f.appspot.com",
  messagingSenderId: "569161158910",
  appId: "1:569161158910:web:d6da8a9af918031e04d5af",
};

const Firebase = firebase.initializeApp(firebaseConfig)
export default Firebase
