/**
 * Allows the user to upload their Skill video if they are logged in. If not, lead to Login screen .
 */
/**************************DON'T FORGET TO ADD THE PROFILE PIC INFORMATION*****************/
import React, { Component } from 'react';
import * as firebase from 'firebase';
//Default firebase App 
import { firebaseApp } from '../firebase/firebase';
//import ReactFileReader from 'react-file-reader';
import Dropzone from 'react-dropzone';

var defStorageRef = firebaseApp.storage().ref(), databaseRef = firebaseApp.database();
var userUID = "";


class UploadVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filesToBeSent: [],
            videoURL: "",
            downloadProgress: 0
        }
        // this.handleChange = this.handleChange.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.emptyArray = this.emptyArray.bind(this);
        this.submitChallenge = this.submitChallenge.bind(this);
        this.randomString = this.randomString.bind(this);
    }

    /**
     * ONDROP() - checks whether or not the chosen file is acceptable and then uploads it to Firebase Storage. 
     * @param {*} acceptedFiles 
     * @param {*} rejectedFiles 
     */
    onDrop(acceptedFiles, rejectedFiles) {
        if (rejectedFiles == undefined && acceptedFiles[0] == undefined) {
            window.alert("Please choose a valid video file!");
            window.location.replace('http://localhost:3000/UploadVideo');
        } else {
            console.log("Accepted File: " + acceptedFiles[0].type)
            //assign the state.array to filesToBeSent var then push this file into it and then assign it back to state.
            var filesToBeSent = this.state.filesToBeSent;
            //Create an Object URL from th Video. 
            var objectURL = URL.createObjectURL(acceptedFiles[0]);
            console.log("Video URL: " + objectURL);

            filesToBeSent.push(acceptedFiles[0]);
            this.setState({ filesToBeSent });
        }
    }


    /**
     * Empty out the array used for storage 
     */
    emptyArray() {
        //Empty out the array after submission.
        var filesToBeSent = this.state.filesToBeSent;
        filesToBeSent.length = 0;
        this.setState({ filesToBeSent });
        console.log("Files Array: " + this.state.filesToBeSent);
    }

    /**
    * Create a random string of 5 characters to place at the end of database path.
    */
    randomString() {
        var text = "";
        var rand = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++) {
            text += rand.charAt(Math.floor(Math.random() * rand.length));
        }
        return text;

    }


    /**
     * Sumbit the whole challenge by uploading to storage as well as writing values to database 
     */
    submitChallenge() {
        //get the TITLE, DESCRIPTION, and CATEGORY
        var title = document.getElementById('videoTitle').value;
        var description = document.getElementById('challengeDescription').value;
        //get the radio button chosen
        var category;
        var e = document.getElementById('categoryPicker');
        category = e.options[e.selectedIndex].text;

        //name of the file uploaded.
        var randString = title + '_' + this.randomString();

        //set up the Ref to STORAGE for the video that is to be uploaded
        var videoRef = defStorageRef.child('users/' + userUID + '/uploaded_videos/' + randString);

        //upload task is where it actually gets uploaded and if not, it will throw an error. 
        var uploadTask = videoRef.put(this.state.filesToBeSent[0]);
        uploadTask.on('state_changed', function (snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    console.log(videoRef.fullPath);
                    break;
            }
            console.log('Upload is ' + progress + '% done');
            document.getElementById('submitButton').innerText = Math.ceil(progress) + "%";
        }, function (error) {
            window.alert("Upload Unsuccessfull. Please try again later! " + error.message);
            window.location.replace('http:localhost:3000/ProfilePage');
            //empty out array after everything is done. 
            this.emptyArray();
        }, function () {
            // Handle successful uploads on complete
            var downloadURL = uploadTask.snapshot.downloadURL;
            /**
             * Upload the uploaded video information to the Firebase DATABASE.
             */
            var personalPageUpload = databaseRef.ref('videos/' + userUID + '/uploaded_videos/').push();
            personalPageUpload.set({
                videoURL: downloadURL,
                videoTitle: title,
                videoDesc: description,
                videoCategory: category,
                likes: 0,
                dislikes: 0,
                challenges: 0
            });

            /**
             * In order to keep all the video lists on web updated, under the 'POSTS' node, push out links to all the videos uploaded by user.
             * This way, it's easier to sort them by time updated and other features.
             */
            var newVideoRef = databaseRef.ref('posts/').push();
            newVideoRef.set({
                videoURL: downloadURL,
                videoTitle: title,
                videoDesc: description,
                videoCategory: category,
                likes: 0,
                dislikes: 0,
                challenges: 0,
                userid: userUID
            });

            window.location.replace('http://localhost:3000/');
        });

        //empty out array after everything is done. 
        this.emptyArray();

    }

    render() {

        function initApp() {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    //user has signed in so get their User UID string
                    userUID = user.uid;
                    console.log("User UID: " + userUID);
                } else {
                    //user not logged in.
                    window.alert("Please sign in first in order to upload a video");
                    window.location.replace("http://localhost:3000/ProfileCheck");

                }
            });
        }
        //load the initApp that checks user status on page load
        window.addEventListener('load', function () {
            initApp()
        });


        return (
            <div className="card uploadCard">
                <div className="card-block uploadBlock">
                    <form>
                        <h2 className="form-signin-heading text-center">Upload Video</h2>
                        <hr />
                        <div className="form-group" id="afterVideo">
                            <h4>Title</h4>
                            <input type="text" className="form-control" id="videoTitle" placeholder="Video Title" required />
                            <br />

                            <label>File input</label>
                            <Dropzone id="dropZzone" type="file" onDrop={(files) => this.onDrop(files)} accept="video/*" multiple={false} required>
                                <div>Click to Upload or Drag your video here</div>
                            </Dropzone>
                            <small id="fileHelp" className="form-text text-muted">Supported: All Video Formats </small>
                            <br /><br />
                            <label>Description</label>
                            <textarea className="form-control" id="challengeDescription" rows="3" placeholder="Please provide a meaningfull description" required></textarea>
                            <br />

                            <label>Choose a Category</label> <br />
                            <select className="selectpicker" id="categoryPicker" required>
                                <option>Comedy</option>
                                <option>Cooking</option>
                                <option>Dance</option>
                                <option>Sports</option>
                            </select>
                            <button type="button" className="btn btn-lg btn-danger btn-block" id="submitButton" onClick={() => this.submitChallenge()} >Challenge</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default UploadVideo;