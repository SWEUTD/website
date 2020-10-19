const firebase = require("firebase/app");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKey,
  authDomain: "swe-utd-portal.firebaseapp.com",
  databaseURL: "https://swe-utd-portal.firebaseio.com",
  projectId: "swe-utd-portal",
  storageBucket: "swe-utd-portal.appspot.com",
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export default db;
