import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_API_KEY,
  databaseURL: process.env.REACT_APP_API_KEY,
  projectId: process.env.REACT_APP_API_KEY,
  storageBucket: process.env.REACT_APP_API_KEY,
  messagingSenderId: process.env.REACT_APP_API_KEY,
  appId: process.env.REACT_APP_API_KEY,
};
console.log(firebaseConfig);
const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;
