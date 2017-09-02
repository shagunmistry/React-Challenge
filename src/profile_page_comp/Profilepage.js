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
        this.signInStatusChange = this.signInStatusChange.bind(this);
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
    signInStatusChange() {
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

                //  document.getElementById("userNameID").innerHTML = document.getElementById("userNameID").innerHTML + " " + referThis.state.userName;

            } else {
                window.alert("User has not logged in");
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

        var aboutInputData = "", defaultBackgroundPic = "";
        databaseRef.ref('users/' + userState.userUID).set({
            username: userState.userName,
            email: userState.userEmail,
            profile_picture: userState.userPicture,
            background_picture: defaultBackgroundPic
        });
        databaseRef.ref('users/' + userState.userUID + '/about_section/').set({
            aboutInput: aboutInputData
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
            var backgroundPic = snapshot.val().background_picture;
            /*document.getElementById("profilePic").src = profilePic;
            document.getElementById('imgTop').src = backgroundPic; */
        });
    }

    //Fill in the about Section and Social Media Links
    fillAboutSection(userid) {
        databaseRef.ref('/users/' + userid + '/about_section/').on('value', function (snapshot) {
            var aboutInput = snapshot.val().aboutInput;
            /* document.getElementById('aboutSec').innerText = aboutInput; */
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
                                    <img className="card-img-top" id="img_top" src="http://i.dailymail.co.uk/i/pix/2015/09/21/16/2C96F60E00000578-0-image-a-126_1442848442984.jpg" alt="Profile Picture" />
                                    <div className="card-block" >
                                        <h4 className="card-title" id="nameTitle"> James Bond</h4>
                                        <p id="userLocationField">Greenville, SC, USA</p>
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
                                                A fictional British Secret Service agent created in 1953
                                                by writer Ian Fleming, who featured him in twelve
                                                novels and two short-story collections.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <CardContainer categoryName="Trending" />
                        </div>
                        <ModalContainer />
                    </div >
                );
            }
        }

    }
}

export default Profilepage;