/**
 * Allows the user to upload a Challenge Video for the Challenge Feature
 * This is a Child to the Parent (SocialButtonComponent.js);
 * Pass back ChallengerVideo (URL) and ChallengeUniqueKey
 */
import React, { Component } from 'react';
//Default firebase App 
import { firebaseApp } from '../firebase/Firebase';
//import ReactFileReader from 'react-file-reader';

//this firebase is required for upload process. 
var firebase = require('firebase');

var defStorageRef = firebaseApp.storage().ref(), databaseRef = firebaseApp.database();

class UploadChallengeVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filesToBeSent: [],
            videoURL: "",
            downloadProgress: 0,
            profilePic: "",
            ChallengeUniqueKey: ""
        }
        // this.handleChange = this.handleChange.bind(this);

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

            //Push the file to the array and then setState with it. 
            filesToBeSent.push(acceptedFiles[0]);
            this.setState({ filesToBeSent });
            //Pass the file into the Parent from the state
            this.props.videoFile(this.state.filesToBeSent);
        }
    }

    render() {

        return (
            <div>
                <label>File input</label>
                <Dropzone id="dropZzone" type="file" onDrop={(files) => this.onDrop(files)} accept="video/*" multiple={false} required>
                    <div>Click to Upload or Drag your video here</div>
                </Dropzone>
                <small id="fileHelp" className="form-text text-muted">Supported: All Video Formats </small>
                <br /><br />
            </div>
        );
    }
}

export default UploadChallengeVideo;