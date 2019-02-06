import * as firebase from "firebase";
var config = {
  apiKey: "AIzaSyBYOTnoEp3VUzGFBb1pancBus-bJt5DjnY",
  authDomain: "socioapp-e1362.firebaseapp.com",
  databaseURL: "https://socioapp-e1362.firebaseio.com",
  projectId: "socioapp-e1362",
  storageBucket: "socioapp-e1362.appspot.com",
  messagingSenderId: "893891613780"
};

firebase.initializeApp(config);
const database = firebase.database();
export { database };
