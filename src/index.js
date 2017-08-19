import React from 'react';
import ReactDOM from 'react-dom';
import App from './app_comp/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
//import { BrowserRouter as Router, Route, Redirect } from 'react-router';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { firebaseApp } from './firebase/firebase';

//var database = firebaseApp.database();

//check user state
firebaseApp.auth().onAuthStateChanged(user => {
    if (user) { 
        //user signed in/up
        console.log("User has signed in or up");
    } else {
        console.log("User has signed out");
    }
});

ReactDOM.render(

    <App />,
    document.getElementById('root')
);
registerServiceWorker();
