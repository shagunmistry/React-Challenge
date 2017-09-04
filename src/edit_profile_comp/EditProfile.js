/**
 * Page where User can edit their user profile.
 * Features: Upload new Profile Pic. Upload new Background Wallpaper. Edit social media links, etc.
 */
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { firebaseApp } from '../firebase/Firebase';
var firebase = require('firebase');


//Other firebaseApp for storing Videos and Files.

var defStorageRef = firebaseApp.storage().ref(), databaseRef = firebaseApp.database();
var downloadURL = "";


class EditProfile extends Component {
    constructor(props) {
        super(props);
        //used for the picture and about section.
        this.state = {
            userUID: "",
            userName: "",
            userEmail: "",
            userPicture: "",
            userAbout: "",
            userFacebook: "",
            userLinkedin: "",
            userTwitter: "",
            filesToBeSent: []
        };

        this.emptyArray = this.emptyArray.bind(this);
        this.submitChanges = this.submitChanges.bind(this);
        this.changePic = this.changePic.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.cancelChanges = this.cancelChanges.bind(this);
    }
    /**
     * Cancel the Changes in the Edit Form 
     */
    cancelChanges() {
        document.getElementById('card_header').innerText = "Canceling Changes";
        window.location.replace('http://localhost:3000/ProfileCheck');
    }

    /**
     * Validate the form and update the data in the database.
     */
    submitChanges() {
        var aboutInput = document.getElementById('aboutInput').value;
        var locationIn = document.getElementById('locationInput').value;
        var facebookLink = document.getElementById('facebookLinkInput').value;
        var linkedLink = document.getElementById('linkedInLinkInput').value;
        var twitterLink = document.getElementById('twitterLinkInput').value;
        console.log("Here are all the input values: " + aboutInput + '\n' + locationIn
            + '\n' + facebookLink + '\n' + linkedLink + '\n' + twitterLink);

        //Write to the About section and if there is an error, give out an error. 

        databaseRef.ref('users/' + this.state.userUID + '/about_section/').set({
            aboutInput: aboutInput,
            locationInp: locationIn
        }).then({
            function(success) {
                //window.alert("Success Writing the location and about Input");
            }, function(error) {
                window.alert(error.message);
            }
        });
        //write the social media links to the Database.
        databaseRef.ref('users/' + this.state.userUID + '/social_media_links/').set({
            facebook: facebookLink,
            linkedin: linkedLink,
            twitter: twitterLink
        }).then({ //I don't think this works, by the way. It's somehow set up wrong.    
            function(success) {
                // window.alert("Success writing social media links");
            }, function(error) {
                window.alert(error.message);
            }
        });
        window.location.replace("http://localhost:3000/Profilecheck");

    }


    /**
     * Upload a new Profile picture. Store in Storage and the download URL goes to the Firebase Database. 
     */
    changePic(acceptedFiles, rejectedFiles) {
        var referThis = this;
        if (rejectedFiles == undefined && acceptedFiles[0] == undefined) {
            window.alert("Please choose a valid IMAGE file!");
        } else {
            // console.log("Accepted File: " + acceptedFiles[0].type)
            //var objectURL = URL.createObjectURL(acceptedFiles[0]);

            //use the state to store the pic URL first and then setState -> upload that to firebase.
            var filesToBeSent = this.state.filesToBeSent;
            filesToBeSent.push(acceptedFiles[0]);
            this.setState({ filesToBeSent });

            //set up the variables for imageReference to the new profile pic.
            var imageRef = defStorageRef.child('users/' + referThis.state.userUID + '/images/' + this.state.filesToBeSent[0].name);
            //use put the file in the reference then upload it to firebase. 
            var uploadTask = imageRef.put(referThis.state.filesToBeSent[0]);
            uploadTask.on('state_changed', function (snapshot) {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        break;
                }
            }, function (error) {
                window.alert("Upload Unsuccessfull. Please try again later! " + error.message);
            }, function () {
                // Handle successful uploads on complete
                downloadURL = uploadTask.snapshot.downloadURL;
                /**
                 * upload the download URL link to firebase Database so it's always updated with the latest picture taken.
                 */
                var updates = {};
                updates['/users/' + referThis.state.userUID + '/profile_picture'] = downloadURL;
                databaseRef.ref().update(
                    updates
                );
            });
            this.emptyArray();
        }
    }

    /**
     * empty out the array of files that are uploaded to stop memory leaks
     */
    emptyArray() {
        //Empty out the array after submission.
        var filesToBeSent = this.state.filesToBeSent;
        filesToBeSent.length = 0;
        this.setState({ filesToBeSent });
    }

    /**
     * Component Will Mount --> Load all the user Information that's already in the database and show it on the Edit Page. 
     */
    componentWillMount() {
        var referThis = this;
        firebaseApp.auth().onAuthStateChanged(function (user) {
            if (user) {
                //user is logged in
                referThis.setState({
                    userUID: user.uid,
                    userName: user.displayName,
                    userEmail: user.email,
                    userPicture: user.photoURL
                })

                //get the user profile pic url;
                databaseRef.ref('/users/' + user.uid).on('value', function (snapshot) {
                    var profilePic = snapshot.val().profile_picture;
                    document.getElementById("profilePicture").src = profilePic;
                });

                //Get the "About Section" data of the User.
                databaseRef.ref('/users/' + referThis.state.userUID + '/about_section/').on('value', function (snapshot) {
                    console.log("About Input: " + snapshot.val().aboutInput);
                    var aboutInput = snapshot.val().aboutInput;
                    var locationInput = snapshot.val().locationInp;
                    document.getElementById("aboutInput").value = aboutInput;
                    document.getElementById('locationInput').value = locationInput;
                });

                //get the user social_media_links information;
                databaseRef.ref('/users/' + referThis.state.userUID + '/social_media_links/').on('value', function (snapshot) {
                    var fbLink = snapshot.val().facebook;
                    var twLink = snapshot.val().twitter;
                    var inLink = snapshot.val().linkedin;
                    document.getElementById('facebookLinkInput').value = fbLink;
                    document.getElementById('twitterLinkInput').value = twLink;
                    document.getElementById('linkedInLinkInput').value = inLink;
                });

                document.getElementById('userName').innerHTML = user.displayName;
            } else {
                //user not logged in
                //same as replacing the current location in current window. 
                window.alert("Please log in");
                window.location.replace("http://www.beztbaba.com/Profilecheck");
            }
        });
    }

    /**
     * RENDER METHOD 
     */
    render() {
        function initApp() {

        }

        //load the initApp that checks user status on page load
        window.addEventListener('load', function () {
            initApp()
        });
        return (
            <div className="card editAboutCard">
                <div className="card-header" id="card_header"> Edit Profile</div>
                <div className="card-block" id="EditProfileCard">
                    <div className="row">
                        <div className="col-md-6">
                            <strong><h3 id="userName"></h3></strong>
                            <img alt="ProfilePic" id="profilePicture" />
                        </div>
                        <div className="col-md-6">
                            <Dropzone id="picUploadZone" type="file" onDrop={(files) => this.changePic(files)} accept="image/*" multiple={false}>
                                <div>Upload New Picture</div>
                            </Dropzone>
                        </div>
                    </div>
                    <form>
                        <label>About</label>
                        <textarea id="aboutInput" className="form-control" type="text" placeholder="Say something about yourself and your content" rows="5"
                            required="true" />
                        <br />
                        <label>Where are you from</label>
                        <textarea id="locationInput" className="form-control" type="text" placeholder="{City, } State, Country" rows="1"
                            required="true" />
                        <label id="facebookInput">Facebook Link</label>
                        <input type="url" className="form-control" id="facebookLinkInput" placeholder="https://www.facebook.com/username" />
                        <br />
                        <label id="linkedinInput">LinkedIn Link</label>
                        <input type="url" className="form-control" id="linkedInLinkInput" placeholder="https://www.linkedin.com/username" />
                        <br />
                        <label id="twitterInput">Twitter Link</label>
                        <input type="url" className="form-control" id="twitterLinkInput" placeholder="https://www.twitter.com/username" />
                        <br />
                        <button type="button" className="btn btn-danger btn-4" id="saveButton" onClick={() => this.submitChanges()}>Save Changes</button>
                        <button type="button" className="btn btn-link" id="cancelButton" onClick={() => this.cancelChanges()}>Cancel</button>
                    </form>
                </div>
            </div >
        )

    }
}
export default EditProfile; 