/**
 * Profile Page showing the informaiton on the user. Will lead to a login screen if not logged in 
 */
import React, { Component } from 'react';
import ModalContainer from '../cards/ModalContainer';
import CardContainer from '../cards//CardContainer';
import { firebaseApp } from '../firebase/Firebase';
import EditProfile from '../edit_profile_comp/EditProfile';

var databaseRef = firebaseApp.database();

class Profilepage extends Component {
    //props recieved are: USERID
    constructor(props) {
        super(props);
        this.state = {
            userUID: "",
            userName: "",
            userEmail: "",
            userPicture: "",
            userExists: false,
            firstTimeSignIn: false
        };
        this.logOut = this.logOut.bind(this);
        this.editProfie = this.editProfie.bind(this);
        this.loadInformation = this.loadInformation.bind(this);
        this.writeUserData = this.writeUserData.bind(this);
        this.setPicUrls = this.setPicUrls.bind(this);
        this.fillAboutSection = this.fillAboutSection.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);

    }


    componentWillMount() {
        //Assign the props to the state first. 
        this.setState({
            userUID: this.props.userid
        })
        this.loadInformation();

    }

    /**
     * Signout the user and lead them back to the home page. 
     */
    logOut() {
        firebaseApp.auth().signOut().then(function () {
            window.location.replace("http://localhost:3000/");
        }).catch(function (error) {
            window.alert("There was an error, please try again later");
            window.location.reload();
        });
    }

    /**
     * edit Profile page where you can change your picture and about status
     */
    editProfie() {
        window.location.replace('http://localhost:3000/EditProfile');
    }

    /**
     * Load the user's information based on whether or not they are first-time users
     */
    loadInformation() {
        console.log("Load Information Method");
        var referThis = this;
        //Check whether or not user is still signed in.
        firebaseApp.auth().onAuthStateChanged(function (user) {
            if (user) {
                //User is signed in so get all their information. 
                referThis.setState({
                    userUID: user.uid,
                    userName: user.displayName,
                    userEmail: user.email,
                    userPicture: user.photoURL
                })

                /* Check if the user already exists under the users/ node in the database. 
                * If they do, then continue loading information. If not, guide them to the 
                * EditProfile Page where they can enter in their information. 
                */
                console.log("Inside the Firsebase Function");
                databaseRef.ref('users/').child(user.uid).on('value', function (snapshot) {
                    if (snapshot.val() !== null) {
                        referThis.setState({
                            userExists: true
                        });
                    }

                    //If the user exits, then the refill the sections, if not ask to fill it in. 
                    if (referThis.state.userExists) {

                        //Set the Profile Pic and Background Pics from the URLs in the Firebase Dtabase
                        referThis.setPicUrls(referThis.state.userUID);

                        /**
                        * Fill in the About section.
                        */
                        referThis.fillAboutSection(referThis.state.userUID);


                    } else {
                        /**
                         * First time signing in to the website so write new user data. 
                         */
                        referThis.writeUserData(referThis.state);
                        referThis.setState({
                            firstTimeSignIn: true
                        });
                    }
                });

                document.getElementById("nameTitle").innerText = referThis.state.userName;

            } else {
                console.log("User has not logged in");
                //user not logged in
                //same as replacing the current location in current window. 
                window.location.replace("http://localhost:3000/Profilecheck");
            }
        });
    }

    /*
    * WRITE USER DATA when the person signs in for the first time.
    */
    writeUserData(userState) {
        console.log("This is the user's first time so write some to database");
        var aboutInputData = "", locationInput = "South Carolina, USA";

        //Write to the Database their usename, email, prof_pic, and back_pic. 
        //The .then return whether or not it was successful. 
        databaseRef.ref('users/' + userState.userUID).set({
            username: userState.userName,
            email: userState.userEmail,
            profile_picture: userState.userPicture,
        }).then(function (success) {
            console.log("Success writing to the Database");
        }, function (error) {
            console.log("There is an error writing to database: " + error.message);
        });

        //Write to the About section and if there is an error, give out an error. 
        databaseRef.ref('users/' + userState.userUID + '/about_section/').set({
            aboutInput: aboutInputData,
            locationInp: locationInput
        }).then({
            function(success) {
                console.log("Success Writing the location and about Input");
            }, function(error) {
                console.log(error.message);
            }
        });
        databaseRef.ref('users/' + userState.userUID + '/social_media_links/').set({
            facebook: " ",
            twitter: " ",
            linkedIn: " "
        });

    }


    /**
     * Helper Methods to read all the Profile Information in the Database.  
     */
    //read in the current profile information once.
    setPicUrls(userID) {
        var profilePic, backgroundPic;
        databaseRef.ref('/users/' + userID).on('value', function (snapshot) {
            var profilePic = snapshot.val().profile_picture;
            document.getElementById('img_top').src = profilePic;
        });
    }

    //Fill in the about Section and Social Media Links
    fillAboutSection(userid) {
        databaseRef.ref('/users/' + userid + '/about_section/').on('value', function (snapshot) {
            if (snapshot.val() == null) {
                console.log("Please fill out your Profile Information First");
                window.location.replace('http://localhost:3000/Editprofile');
            }
            var aboutInput = snapshot.val().aboutInput;
            var locationField = snapshot.val().locationInp;
            document.getElementById('aboutMeParagraph').innerText = aboutInput;
            document.getElementById('userLocationField').innerText = locationField;
        });
        databaseRef.ref('/users/' + userid + '/social_media_links/').on('value', function (snapshot) {
            var facebook = snapshot.val().facebook;
            var twitter = snapshot.val().twitter;
            var linkedin = snapshot.val().linkedin;
            /* document.getElementById('facebookIcon').href = facebook;
             document.getElementById('twitterIcon').href = twitter;
             document.getElementById('linkedinIcon').href = linkedin; */
        });
    }

    render() {

        function initApp() {

        }

        //load the initApp that checks user status on page load
        window.addEventListener('load', function () {
            initApp()
        });


        {
            if (this.state.firstTimeSignIn) {
                return <EditProfile userid={this.state.userUID} firstTime={this.state.firstTimeSignIn} />
            } else {
                return (
                    <div>
                        <div className="profileContainer" >
                            <div className="profileSidebar">
                                <div className="card profileSideCard">
                                    <img className="card-img-top" id="img_top" src="" alt="Profile Picture" />
                                    <div className="card-block" >
                                        <h4 className="card-title" id="nameTitle"></h4>
                                        <p id="userLocationField"></p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <button type="button" className="btn btn-danger btn-4"><p id="followerNumer">1234</p>Followers</button>
                                            </div>
                                            <div className="col-md-6">
                                                <button type="button" className="btn btn-danger btn-4"><p id="challengeNumber">1234</p>Challenges</button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <button id="aboutMe" type="button" className="btn btn-info btn-4" data-toggle="collapse" data-target="#aboutMeSection">About </button>                                            </div>
                                            <div className="col-md-6">
                                                <button id="editButton" type="button" className="btn btn-info btn-4" onClick={() => this.editProfie()}>Edit Profile </button>
                                            </div>
                                        </div>
                                        <div className="collapse" id="aboutMeSection">
                                            <p id="aboutMeParagraph">
                                            </p>
                                        </div>
                                        <button id="logOutButton" type="button" className="btn btn-link" onClick={() => this.logOut()}>Log Out</button>
                                    </div>
                                </div>
                            </div>
                            <CardContainer />
                        </div>
                        <ModalContainer />
                    </div >
                );
            }
        }

    }
}

export default Profilepage;