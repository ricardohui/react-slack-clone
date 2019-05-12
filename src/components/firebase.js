import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
const config = {
  apiKey: "AIzaSyDBt3nr1Cg0mKfm0Iw-bNw5wdk1TXHdnPQ",
  authDomain: "slack-clone-6183c.firebaseapp.com",
  databaseURL: "https://slack-clone-6183c.firebaseio.com",
  projectId: "slack-clone-6183c",
  storageBucket: "slack-clone-6183c.appspot.com",
  messagingSenderId: "691626578316",
  appId: "1:691626578316:web:7a9e8fcf89c24930"
};

firebase.initializeApp(config);

export default firebase;
