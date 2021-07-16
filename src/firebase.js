import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDbGRgIJLNpHHhy_8CWloqL5YrZjxTEMHU",
  authDomain: "react-crud-9b20e.firebaseapp.com",
  databaseURL:
    "https://react-crud-9b20e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-crud-9b20e",
  storageBucket: "react-crud-9b20e.appspot.com",
  messagingSenderId: "439319509508",
  appId: "1:439319509508:web:a05cf67b19959772789351",
};
// Initialize Firebase
var firebaseDb = firebase.initializeApp(firebaseConfig);

export default firebaseDb.database().ref();
