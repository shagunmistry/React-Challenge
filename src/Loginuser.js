import React, { Component } from 'react';


var firebase = require('firebase');
var firebaseui = require('firebaseui');

var userProfile, checkLog;
var userInfo = {
    name: "",
    email: "",
    photoUrl: "",
    uid: ""
};
class Loginuser extends Component {


    render() {
        
        // FirebaseUI config.
        var uiConfig = {
            signInSuccessUrl: 'http://localhost:3000/:userid',
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ],
            // Terms of service url. -- DO NOT FORGET TO ADD THIS LATER
            tosUrl: '<--Smething--->'
        };

        // Initialize the FirebaseUI Widget using Firebase.
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig);

        function initApp() {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    //user signed in  
                    userProfile = user;
                    userInfo.name = user.displayName;
                    userInfo.email = user.email;
                    userInfo.photoUrl = user.photoURL;
                    checkLog = true;
                    window.location.replace('http://localhost:3000/Profilepage/'+user.uid);
                } else {
                    //user is signed out
                }
            }, function (error) {
                console.log("User not signed in");
            });
        };
        //this is fired when before the page is fully rendered.
        window.addEventListener('load', function () {
            initApp()
        });

        return (
        <div id="loginP">
            <div className="loginSection">
                <div className="card loginCard" width="40rem" >
                    <div className="card-block">
                        <h4 className="card-title"><strong>ChallengeMe</strong></h4>
                        <hr />
                        <p className="card-text">
                            ChallengeMe is <strong>a place where people can showcase their skills and get challenged by others.</strong> The goal is to have fun while improving yourself.
                    </p>
                    </div>
                </div>
                <div className="card loginCard text-center" >
                    <div className="card-block">
                        <form className="form-signin" id="validationForm">
                            <h2 className="form-signin-heading text-center">Login</h2>
                            <hr />
                            <div id="firebaseui-auth-container"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Loginuser;