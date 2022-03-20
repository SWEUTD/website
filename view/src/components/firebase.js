import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "swe-utd-portal.firebaseapp.com",
  databaseURL: "https://swe-utd-portal.firebaseio.com",
  projectId: "swe-utd-portal",
  storageBucket: "swe-utd-portal.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();
export const auth = firebase.auth();
