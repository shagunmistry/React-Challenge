import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyAOBKSXv6rYX5HJE1DAuOB1QzVx4i9JN98",
    authDomain: "challengemetwo.firebaseapp.com",
    databaseURL: "https://challengemetwo.firebaseio.com",
    projectId: "challengemetwo",
    storageBucket: "challengemetwo.appspot.com",
    messagingSenderId: "1005898599286"
};

export var otherFirebase = firebase.initializeApp(config, "other")