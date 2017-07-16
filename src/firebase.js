import firebase from 'firebase';

//DO NOT FORGET TO CHANGE rules TO != from === after EVERYTHING IS DONE
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCqHzPnyxPc5o5Gr9cbcak1-RBo7SOkl-s",
    authDomain: "challengemetest-ea2e0.firebaseapp.com",
    databaseURL: "https://challengemetest-ea2e0.firebaseio.com",
    projectId: "challengemetest-ea2e0",
    storageBucket: "challengemetest-ea2e0.appspot.com",
    messagingSenderId: "272138859539"
  };
  export var firebaseApp = firebase.initializeApp(config);
