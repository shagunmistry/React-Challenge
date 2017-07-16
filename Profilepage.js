import React, { Component } from 'react';
import ModalContainer from './ModalContainer';
import CardContainer from './CardContainer';
import { firebaseApp } from './firebase';


var firebase = require('firebase');
var firebaseui = require('firebaseui');
var userProfile, database;
var userInfo = {
    name: "",
    email: "",
    photoUrl: "",
    userID: "",
    exists: ""
};

var defStorageRef = firebaseApp.storage().ref(), databaseRef = firebaseApp.database();

class Profilepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userUID: "",
            userName: "",
            userEmail: "",
            userPicture: ""
        };
        this.logChange = this.logChange.bind(this);
        this.editProfie = this.editProfie.bind(this);
    }
    database = firebase.database();

    //cant set this.setstate inside render();
    //this.setState({ userUID: userInfo.userID, userName: userInfo.name, userEmail: userInfo.email, userPicure: userInfo.photoUrl });

    logChange() {
        firebase.auth().signOut().then(function () {
            window.location.replace("http://localhost:3000/");
            console.log("user is signed out");
        }).catch(function (error) {
            console.log("Sign Out Error: ", error);
        });
    }
    /**
     * edit Profile page where you can change your picture and about status
     */
    editProfie() {
        window.location.replace('http://localhost:3000/EditProfile');
    }

    render() {

        function initApp() {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {

                    userProfile = user;
                    userInfo.name = user.displayName;
                    userInfo.email = user.email;
                    userInfo.photoUrl = user.photoURL;
                    userInfo.userID = user.uid;

                    databaseRef.ref('users/').child(user.uid).on('value', function (snapshot) {
                        userInfo.exists = (snapshot.val() !== null);

                        //If the user exits, then the refill the sections, if not ask to fill it in. 
                        if (userInfo.exists) {
                            //This means user exists.
                            //get the user profile pic url;
                            databaseRef.ref('/users/' + userInfo.userID).on('value', function (snapshot) {
                                var profilePic = snapshot.val().profile_picture;
                                var backgroundPic = snapshot.val().background_picture;
                                document.getElementById("profilePic").src = profilePic;
                                document.getElementById('imgTop').src = backgroundPic;
                            });
                            /**
                            * Fill in the About section.
                            */
                            databaseRef.ref('/users/' + userInfo.userID + '/about_section/').on('value', function (snapshot) {
                                var aboutInput = snapshot.val().aboutInput;
                                //window.alert(aboutInput);
                                document.getElementById('aboutSec').innerText = aboutInput;
                            });
                            databaseRef.ref('/users/' + userInfo.userID + '/social_media_links/').on('value', function (snapshot) {
                                var facebook = snapshot.val().facebook;
                                var twitter = snapshot.val().twitter;
                                var linkedin = snapshot.val().linkedin;
                                document.getElementById('facebookIcon').href = facebook;
                                document.getElementById('twitterIcon').href = twitter;
                                document.getElementById('linkedinIcon').href = linkedin;

                            });

                        } else {
                            /**
                             * First time signing in to the website so write new user data. 
                             */
                            writeUserData(user.uid, user.displayName, user.email, userInfo.photoUrl);
                            var i = 0;
                            do {
                                i++;
                                document.getElementById('aboutSec').innerText = (userInfo.exists);
                            } while (!userInfo.exists)
                            window.location.replace('http://localhost:3000/EditProfile');
                        }


                        /**
                         * Have a state where if the person visiting the profile is a guest then change all the functions of all the buttons on page
                         * If not, rever them back to normal.
                         */

                        //Check if the person visitin the Profilepage is the one logged in or a guest
                        var currentURL = window.location.href;
                        console.log(currentURL.substring(34, currentURL.length));
                        if (currentURL.substring(33, currentURL.length) == user.uid) {
                            document.getElementById('editButton').style.display = 'none';
                        }
                    });

                    document.getElementById("userNameID").innerHTML = document.getElementById("userNameID").innerHTML + " " + userInfo.name;

                } else {
                    //user not logged in
                    //same as replacing the current location in current window. 
                    window.location.replace("http://localhost:3000/Profilecheck");
                }
                /**
                * Fill in the Video Section
                
                var postsRef = databaseRef.ref('videos/');
                postsRef.on('child_added', function (data) {
                    showVideo(data.key, data.val().userid, data.val().videoTitle, data.val().videoURL, data.val().videoDesc, data.val().likes, data.val().challenges);
                });
                */
            });
        }

        /**
         * Show the list of videos pulled from the database.
         
        function showVideo(dataKey, userid, videoTitle, videoURL, videoDesc, likes, challenges) {
            console.log(videoTitle);
            if((userInfo.userID) === userid){
                //enableVideoEdits();

            }
        }
        */

        /**
         * WRITE USER DATA when the person signs in for the first time.
         * UserID, userNAME, userEMAIL, profilepicURL, backgroundURL
         */
        function writeUserData(userID, name, email, picURL) {
            var aboutInput = "", defaultBackgroundPic = "https://firebasestorage.googleapis.com/v0/b/challengemetest-ea2e0.appspot.com/o/chessKing.jpeg?alt=media&token=53fea36b-d54a-41bb-9a03-92be2fc80544";
            databaseRef.ref('users/' + userID).set({
                username: name,
                email: email,
                profile_picture: picURL,
                background_picture: defaultBackgroundPic
            });
            databaseRef.ref('users/' + userID + '/about_section/').set({
                aboutInput
            });
            databaseRef.ref('users/' + userID + '/social_media_links/').set({
                facebook: " ",
                twitter: " ",
                linkedIn: " "
            });

        }
        //read in the current profile information once.
        function readUserData(userID) {
            databaseRef.ref('/users/' + userInfo.userID).once('value').then(function (snapshot) {
                var profilePicURL = snapshot.val().profile_picture;
            });
        }

        //load the initApp that checks user status on page load
        window.addEventListener('load', function () {
            initApp()
        });


        return (
            <div>
                <div className="container profileContainer" >
                    <div className="card profileCard" >
                        <img className="card-img-top" id="imgTop" src="https://firebasestorage.googleapis.com/v0/b/challengemetest-ea2e0.appspot.com/o/chessKing.jpeg?alt=media&token=53fea36b-d54a-41bb-9a03-92be2fc80544" alt="Profile Background Pics" />
                        <div className="card-block cardBlock" >
                            <h4 className="card-title cardTitle" >
                                <div className="row ">
                                    <div className="col-sm-1 picSocial" >
                                        <img id="profilePic" />
                                        <a href="#" id="twitterIcon"><i className="fa fa-twitter"></i>  </a>
                                        <a href="#" id="linkedinIcon"><i className="fa fa-linkedin"></i>  </a>
                                        <a href="#" id="facebookIcon"><i className="fa fa-facebook"></i>  </a>
                                    </div>
                                    <div className="col-sm-11 userRow">
                                        <ul className="list-group">
                                            <li className="list-group-item" id="userNameID"><i className="fa fa-user"></i></li>
                                            <li className="list-group-item userButton logOut">
                                                <button type="button" onClick={() => this.logChange()} className="btn btn-danger btn-4"><i className="fa fa-shield"></i> | Log Out</button>
                                            </li>
                                            <li className="list-group-item userButton">
                                                <button type="button" className="btn btn-danger btn-4"><i className="fa fa-users"></i> | Followers</button>
                                            </li>
                                            <li className="list-group-item userButton">
                                                <button type="button" className="btn btn-danger btn-4"><i className="fa fa-shield"></i> | Challenges</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </h4>
                            <div className="card-text">
                                <strong>About section</strong>
                                <button type="button" id="editButton" className="btn btn-danger btn-4" onClick={() => this.editProfie()}><i className="fa fa-pencil"></i> | Edit Profile</button>
                                <ul className="list-group">
                                    <li className="list-group-item aboutSection" id="aboutSec">
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <CardContainer categoryName="Trending" />
                    <CardContainer categoryName="Latest" />
                </div>
                <ModalContainer />
            </div>
        );
    }
}

export default Profilepage;