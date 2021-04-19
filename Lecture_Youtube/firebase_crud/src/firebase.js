import firebase from "firebase/app";
import "firebase/database";
import dotenv from "dotenv";
dotenv.config();

var firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MSGSENDERID,
  appId: process.env.REACT_APP_APPID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let realTimeDB = firebase.database().ref();
export default realTimeDB;
