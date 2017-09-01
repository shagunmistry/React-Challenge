/**
 * Page where User can edit their user profile.
 * Features: Upload new Profile Pic. Upload new Background Wallpaper. Edit social media links, etc.
 */
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { firebaseApp } from '../firebase/Firebase';


//Other firebaseApp for storing Videos and Files.

var defStorageRef = firebaseApp.storage().ref();
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
        this.changeBackPic = this.changeBackPic.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);

    }

    /**
     * Validate the form and update the data in the database.
     */
    submitChanges() {
        var referThis = this;
        var aboutInput = document.getElementById('aboutInput').value;
        var facebookLink = document.getElementById('facebookLinkInput').value;
        var twitterLink = document.getElementById('twitterLinkInput').value;
        var linkedinLink = document.getElementById('linkedInLinkInput').value;

        /**write to the Firebase database if any of the input fields have information in them  */
        if (aboutInput != "") {
            firebaseApp.database().ref('users/' + referThis.userUID).child('about_section').set({
                aboutInput
            });
        }
        /**
        * all the social media links are stored under users/uid/social_medi_links
        */
        if ((facebookLink != "") || (twitterLink != "") || (linkedinLink != "")) {
            firebaseApp.database().ref('users/' + referThis.userUID).child('social_media_links').set({
                facebook: facebookLink,
                twitter: twitterLink,
                linkedin: linkedinLink
            });
        }
        window.location.replace('http://www.beztbaba.com/profilepage');
    }

    /**
     * Upload new Background picture.
     */
    changeBackPic(acceptedFiles, rejectedFiles) {
        var referThis = this;
        if (rejectedFiles == undefined && acceptedFiles[0] == undefined) {
            window.alert("Please choose a valid video file!");
        } else {
            //use the state to store the pic URL first and then setState -> upload that to firebase.
            var filesToBeSent = this.state.filesToBeSent;
            filesToBeSent.push(acceptedFiles[0]);
            this.setState({ filesToBeSent });

            //set up the variables for imageReference to the new profile pic.
            var imageRef = defStorageRef.child('users/' + referThis.userUID + '/background_images/' + this.state.filesToBeSent[0].name);
            //use put the file in the reference then upload it to firebase. 
            var uploadTask = imageRef.put(this.state.filesToBeSent[0]);
            uploadTask.on('state_changed', function (snapshot) {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                switch (snapshot.state) {
                    case firebaseApp.storage.TaskState.PAUSED: // or 'paused'
                        //console.log('Upload is paused');
                        break;
                    case firebaseApp.storage.TaskState.RUNNING: // or 'running'
                        //console.log('Upload is running');
                        //console.log(imageRef.fullPath);
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
                updates['/users/' + referThis.userUID + '/background_picture'] = downloadURL;
                firebaseApp.database().ref().update(
                    updates
                );
            });
            this.emptyArray();
        }
    }

    /**
     * Upload a new Profile picture. Store in Storage and the download URL goes to the Firebase Database. 
     */
    changePic(acceptedFiles, rejectedFiles) {
        if (rejectedFiles == undefined && acceptedFiles[0] == undefined) {
            window.alert("Please choose a valid video file!");
        } else {
            // console.log("Accepted File: " + acceptedFiles[0].type)
            //var objectURL = URL.createObjectURL(acceptedFiles[0]);

            //use the state to store the pic URL first and then setState -> upload that to firebase.
            var filesToBeSent = this.state.filesToBeSent;
            filesToBeSent.push(acceptedFiles[0]);
            this.setState({ filesToBeSent });

            //set up the variables for imageReference to the new profile pic.
            var imageRef = defStorageRef.child('users/' + this.state.userUID + '/images/' + this.state.filesToBeSent[0].name);
            //use put the file in the reference then upload it to firebase. 
            var uploadTask = imageRef.put(this.state.filesToBeSent[0]);
            uploadTask.on('state_changed', function (snapshot) {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                switch (snapshot.state) {
                    case firebaseApp.storage.TaskState.PAUSED: // or 'paused'
                        break;
                    case firebaseApp.storage.TaskState.RUNNING: // or 'running'
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
                updates['/users/' + this.state.userUID + '/profile_picture'] = downloadURL;
                firebaseApp.database().ref().update(
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
                firebaseApp.database().ref('/users/' + user.uid).on('value', function (snapshot) {
                    var profilePic = snapshot.val().profile_picture;
                    var backgroundPic = snapshot.val().background_picture;
                    document.getElementById("profilePicture").src = profilePic;
                    document.getElementById('backgroundPicture').src = backgroundPic;
                });
                //get the user about section information;
                firebaseApp.database().ref('/users/' + this.state.userUID + '/about_section/').on('value', function (snapshot) {
                    console.log("About Input: " + snapshot.val());
                    var aboutInput;
                    if (referThis.props.firstTime) {
                        aboutInput = "";
                    } else {
                        var aboutInput = snapshot.val().aboutInput;
                    }

                });
                //get the user social_media_links information;
                firebaseApp.database().ref('/users/' + this.state.userUID + '/social_media_links/').on('value', function (snapshot) {
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
                <div className="card-header"> Edit Profile</div>
                <div className="card-block" id="EditProfileCard">
                    <div className="row">
                        <div className="col-md-6">
                            <img alt="ProfilePic" id="profilePicture" />
                            <Dropzone id="picUploadZone" type="file" onDrop={(files) => this.changePic(files)} accept="image/*" multiple={false}>
                                <div>Upload Picture</div>
                            </Dropzone>
                            <img alt="ProfileBackgroundPic" id="backgroundPicture" />
                            <Dropzone id="backPicUploadZone" type="file" onDrop={(files) => this.changeBackPic(files)} accept="image/*" multiple={false}>
                                <div>Upload Background Picture</div>
                            </Dropzone>
                        </div>
                        <div className="col-md-6">
                            <strong><div className="card-title" id="userName"></div></strong>
                        </div>
                    </div>
                    <form>
                        <label>About</label>
                        <textarea id="aboutInput" className="form-control" type="text" placeholder="Say something about yourself and your content" rows="5"
                            required="true" />
                        <br />
                        <label id="facebookInput">Facebook Link</label>
                        <input type="url" className="form-control" id="facebookLinkInput" placeholder="https://www.facebook.com/username" />
                        <br />
                        <label id="linkedinInput">LinkedIn Link</label>
                        <input type="url" className="form-control" id="linkedInLinkInput" placeholder="https://www.linkedin.com/username" />
                        <br />
                        <label id="twitterInput">Twitter Link</label>
                        <input type="url" className="form-control" id="twitterLinkInput" placeholder="https://www.twitter.com/username" />
                        <br />
                        <button type="submit" className="btn btn-danger btn-4" id="saveButton" onClick={() => this.submitChanges()}>Save Changes</button>
                        <button className="btn btn-danger btn-4" id="cancelButton" onClick={() => window.location.replace('localhost:3000/ProfilePage')}>Cancel</button>
                    </form>
                </div>
            </div>
        )

    }
}
export default EditProfile; 