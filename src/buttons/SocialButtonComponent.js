/**
 * Need to Update How a profile Picture get's updated (Make sure it's the user who uploads the challenge not who gets challenged)
 * Also, For some reason, it posts a video right way but when it creates a challenge, it creates an empty one under the Challenged User's Key
 * And then creates a Filled-out challenge under the Challenger USer's Key .... 
 */
import React, { Component } from 'react';
import { firebaseApp } from '../firebase/Firebase';
import Dropzone from 'react-dropzone';

var defStorageRef = firebaseApp.storage().ref(), databaseRef = firebaseApp.database();
//this firebase is required for upload process. 
var firebase = require('firebase');

var Modal = require('boron/FlyModal');
var databaseRef = firebaseApp.database();
var modalStyle = {
    width: 'auto',
}

class SocialButtonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            likes: 0,
            dislikes: 0,
            challenges: 0,
            filesToBeSent: []
        });
        this.likeButton = this.likeButton.bind(this);
        this.dislikeButton = this.dislikeButton.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);

        //Methods needed to Upload a Challenge Video
        this.challengeButton = this.challengeButton.bind(this);
        this.showModal = this.showModal.bind(this); this.closeModal = this.closeModal.bind(this);
        this.emptyArray = this.emptyArray.bind(this);
        this.submitChallenge = this.submitChallenge.bind(this);
        this.randomString = this.randomString.bind(this);
        this.onDrop = this.onDrop.bind(this);

    }

    /**
     * 
     */
    componentWillMount() {
        var key = this.props.uniqueKey, referThis = this;

        //Go to the database under STATS/ and use the key to get all the information. 
        var statRef = databaseRef.ref('stats/' + key);
        statRef.once('value').then(function (snapshot) {
            var dataLikes = snapshot.val().likes;
            var dataDislikes = snapshot.val().dislikes;
            var dataChallenges = snapshot.val().challenges;
            referThis.setState({
                likes: dataLikes,
                dislikes: dataDislikes,
                challenges: dataChallenges,
            });
        });
    }

    likeButton(uniqueKey) {
        var originalLikes, newLikeNumber, referThis = this;
        //User has logged in.
        if (this.props.activeUser) {

            //Get the Original Like number from Database and update it depending on their like status. 
            databaseRef.ref('stats/' + uniqueKey).once('value').then(function (snapshot) {
                originalLikes = snapshot.val().likes;

                //Check if the user has liked it before. 
                var checkStatRef = databaseRef.ref('statKeeper/' + referThis.props.userid + '/' + uniqueKey);
                checkStatRef.once('value').then(function (snapshot) {
                    //if this returns null then, create a new one. 
                    if ((snapshot.val()) == null) {
                        checkStatRef.set({
                            like: true,
                            dislike: false,
                        });
                        newLikeNumber = originalLikes + 1;
                    } else if (snapshot.val().like) {
                        //if the user has liked it before, unlike it. 
                        newLikeNumber = originalLikes - 1;
                        //update the database with the like status.
                        var updates = {};
                        updates['statKeeper/' + referThis.props.userid + '/' + uniqueKey + '/like'] = false;
                        databaseRef.ref().update(updates);
                    } else if (!(snapshot.val().like)) {
                        console.log("User's LIKE STATUS: " + snapshot.val().like);
                        //If the user has not liked it before then like it. 
                        newLikeNumber = originalLikes + 1;
                        //Update the new like status 
                        var updates = {};
                        updates['statKeeper/' + referThis.props.userid + '/' + uniqueKey + '/like'] = true;
                        updates['statKeeper/' + referThis.props.userid + '/' + uniqueKey + '/dislike'] = false;
                        databaseRef.ref().update(updates);
                    }
                });

                //update with the new like number (wait 3 seconds before updating so that the prev firebase function can complete)
                setTimeout(function () {
                    var updates = {};
                    updates['stats/' + uniqueKey + '/likes'] = newLikeNumber;
                    databaseRef.ref().update(updates);
                    //Update the state with the new like number; 
                    referThis.setState({
                        likes: newLikeNumber
                    });
                }, 3000);

            });
        } else {
            //If the User has not logged in, then alert them and let them know. 
            window.alert("Please log in to Like or Challenge");
        }
    }

    dislikeButton(uniqueKey) {
        var originalDislikes, newDislikeNumber, referThis = this, originalLikeNumber, newLikeNumber;
        //User has logged in.
        if (this.props.activeUser) {

            //Get the Original Dislike number from Database and update it depending on their Dislike status. 
            databaseRef.ref('stats/' + uniqueKey).once('value').then(function (snapshot) {
                originalDislikes = snapshot.val().dislikes;
                originalLikeNumber = snapshot.val().likes;

                //Check if the user has liked it before. 
                var checkStatRef = databaseRef.ref('statKeeper/' + referThis.props.userid + '/' + uniqueKey);
                checkStatRef.once('value').then(function (snapshot) {
                    //if this returns null then, create a new one. 
                    if ((snapshot.val()) == null) {
                        checkStatRef.set({
                            like: false,
                            dislike: true,
                        });
                        newDislikeNumber = originalDislikes + 1;
                    } else if (snapshot.val().dislike) {
                        //if the user has disliked it before, un-dislike it. 
                        newDislikeNumber = originalDislikes - 1;
                        //update the database with the Dislike status.
                        var updates = {};
                        updates['statKeeper/' + referThis.props.userid + '/' + uniqueKey + '/dislike'] = false;
                        databaseRef.ref().update(updates);
                    } else if (!(snapshot.val().like) || (snapshot.val().like)) {
                        //If the user has not disliked it before then dislike it. 
                        //If the user has liked it before, unlike. 
                        var updates = {};
                        newDislikeNumber = originalDislikes + 1;

                        //if the user has liked it before, decrease the like number
                        if (snapshot.val().like) {
                            window.alert("User has liked it before");
                            newLikeNumber = originalLikeNumber - 1;
                            updates['stats/' + uniqueKey + '/likes'] = newLikeNumber;
                            referThis.setState({
                                likes: newLikeNumber
                            });
                        }
                        //Update the new like status 
                        updates['statKeeper/' + referThis.props.userid + '/' + uniqueKey + '/like'] = false;
                        updates['statKeeper/' + referThis.props.userid + '/' + uniqueKey + '/dislike'] = true;
                        databaseRef.ref().update(updates);
                    }
                });

                //update with the new like number (wait 3 seconds before updating so that the prev firebase function can complete)
                setTimeout(function () {
                    var updates = {};
                    updates['stats/' + uniqueKey + '/dislikes'] = newDislikeNumber;
                    databaseRef.ref().update(updates);
                    //Update the state with the new like number; 
                    referThis.setState({
                        dislikes: newDislikeNumber
                    });
                }, 3000);

            });
        } else {
            //If the User has not logged in, then alert them and let them know. 
            window.alert("Please log in to Like or Challenge");
        }

    }

    //Show Modal
    showModal() {
        if(this.props.activeUser){
            this.refs.modal.show();            
        }else{
            window.alert("Please log in to Challenge the user");                
        }
    }
    //Close Modal
    closeModal() {
        this.refs.modal.hide();
    }


    /**
     * When the user wants to challenge the Posted video, Pop up a modal to ask them to confirm
     * and then go to the video upload page and ask them to upload the challenging video..
     * Also, pass in something to Upload video page so that it looks different if its an upload. 
     * @param {*} uniqueKey 
     */
    challengeButton(uniqueKey) {
        var originalChallengeNum, newChallengeNum, referThis = this, challengerUserID = referThis.props.activeUserID;

        //Check if they are logged in and that the user does not challenge his own video
        if (referThis.props.activeUser) {
            //Make Sure user can't challenge ThemSelves!
            if (referThis.props.activeUserID != referThis.props.userid) {
                //Challenges --> UniqueKey --> ChallengerUserID --> videoURL ... HIT1 ... HIT2

                //Check if the user has already challenged the person first. 
                var checkChallengeStatus = databaseRef.ref('challenges/' + uniqueKey);
                checkChallengeStatus.once('value', function (snapshot) {
                    if (!snapshot.exists()) {
                        //If there are currently no challenges, create one under this user. 
                        checkChallengeStatus.child(challengerUserID).set({
                            //Set the fields 
                            challengerVideo: "",
                            challengerUniqueKey: "",
                            challengedHits: 0,
                            challengerHits: 0
                        }).then(
                            referThis.submitChallenge(uniqueKey)
                            )

                    } else {
                        //There have already been challenges to this video by either this user or others before. 
                        snapshot.forEach(function (childSnapshot) {
                            if (challengerUserID == (childSnapshot.key)) {
                                //The challenge between this video and the user already exists
                                window.alert("You have already challenged this video");

                            } else {
                                //Challenge does not already exist so create a new one. 
                                checkChallengeStatus.child(challengerUserID).set({
                                    //Set the fields 
                                    challengerVideo: "",
                                    challengerUniqueKey: "",
                                    challengedHits: 0,
                                    challengerHits: 0
                                }).then(
                                    referThis.submitChallenge()
                                    )
                            }
                        })
                    }


                })
            }
        } else {
            window.alert("You can not challenge you own video");
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
    submitChallenge(uniqueKey) {
        var referThis = this;
        //get the TITLE, DESCRIPTION, and CATEGORY
        var title = document.getElementById('videoTitle').value, description = document.getElementById('challengeDescription').value;
        //get the radio button chosen
        var category, e = document.getElementById('categoryPicker');
        category = e.options[e.selectedIndex].text;

        //name of the file uploaded.
        var randString = title + '_' + this.randomString();

        //set up the Ref to STORAGE for the video that is to be uploaded
        var videoRef = defStorageRef.child('users/' + referThis.props.activeUserID + '/uploaded_videos/' + randString);

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
            document.getElementById('CardHeader').innerText = Math.ceil(progress) + "%";
        }, function (error) {
            //Upload was unsuccessfull so let them try again later and refresh the page. 
            window.alert("Upload Unsuccessfull. Please try again later! " + error.message);
            window.location.replace('http:localhost:3000/ProfilePage');

            //empty out array after everything is done. 
            this.emptyArray();

        }, function () {
            // Handle successful uploads on complete
            var downloadURL = uploadTask.snapshot.downloadURL;
            /**
             * Upload the video Information to the USER'S LIST
             */
            var videoUserIDUpload = databaseRef.ref('videos/' + referThis.props.activeUserID + '/uploaded_videos/').push();
            videoUserIDUpload.set({
                videoURL: downloadURL,
                videoTitle: title,
                videoDesc: description,
                videoCategory: category
            });

            /**
             * Upload the video to all the POSTS
             * In order to keep all the video lists on web updated, under the 'POSTS' node, push out links to all the videos uploaded by user.
             * This way, it's easier to sort them by time updated and other features.
             */
            var newVideoRef = databaseRef.ref('posts/').push();
            newVideoRef.set({
                videoURL: downloadURL,
                videoTitle: title,
                videoDesc: description,
                videoCategory: category,
                userid: referThis.props.activeUserID,
                profilePic: referThis.props.profilePicURL
            });
            /*     var updateProfiles =[];
                 updateProfiles['posts/' + newVideoRef.key + '/profilePic'] = referThis.props.profilePic;
                 databaseRef.ref().update(updateProfiles); */
            /**
             * Upload the likes/dislikes/challenge numbers to status/key/---
             * This helps refresh the numbers in real time on page
             */
            var keyToUploadUnder = newVideoRef.key;
            var statsUpload = databaseRef.ref('stats/' + keyToUploadUnder + '/');
            statsUpload.set({
                likes: 0,
                dislikes: 0,
                challenges: 0
            });

            /**
             * Update the CHALLENGE HITS and ChallengerVideo / ChallengerUniqueKey
             */
            var updates = {};
            updates['challenges/' + uniqueKey + '/' + referThis.props.activeUserID + '/challengerUniqueKey'] = keyToUploadUnder;
            updates['challenges/' + uniqueKey + '/' + referThis.props.activeUserID + '/challengerVideo'] = downloadURL;
            updates['challenges/' + uniqueKey + '/' + referThis.props.activeUserID + '/challengedHits'] = 0;
            updates['challenges/' + uniqueKey + '/' + referThis.props.activeUserID + '/challengerHits'] = 0;
            databaseRef.ref().update(updates);

            //Replace the location to the homepage -- FOR NOW, change it later. 
            window.location.replace('http://localhost:3000/');
        });
        //empty out array after everything is done. 
        this.emptyArray();
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
        }
    }


    render() {

        if (this.props.buttonType == "like") {
            return (
                <div>
                    <a className="supportButtons" onClick={() => this.likeButton(this.props.uniqueKey)} role="button"><i className="fa fa-thumbs-up"></i></a>
                    <p id="likeNumber">{this.state.likes}</p>

                </div>
            )
        } else if (this.props.buttonType == "challenge") {
            return (
                <div>
                    <a className="supportButtons" onClick={() => this.showModal()} role="button"><i className="fa fa-shield"></i></a>
                    <p id="challengeNumber">{this.state.challenges}</p>
                    <Modal ref="modal" modalStyle={modalStyle}>
                        <div className="card uploadCard">
                            <div className="card-block">      
                                <form>
                                    <h2 className="form-signin-heading text-center" id="CardHeader">Upload Challenge Video</h2>
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
                                        <textarea className="form-control" id="challengeDescription" rows="3"
                                            placeholder="Please provide a brief description"
                                            required></textarea>
                                        <br />
                                        <label>Choose a Category</label> <br />
                                        <select className="selectpicker" id="categoryPicker" required>
                                            <option>Comedy</option>
                                            <option>Cooking</option>
                                            <option>Dance</option>
                                            <option>Sports</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <button type="button" className="btn btn-lg btn-danger"
                            onClick={() => this.challengeButton(this.props.uniqueKey)} >Challenge</button>
                        <button type="button" className="btn btn-lg btn-secondary"
                            onClick={() => this.closeModal()}> Cancel </button>
                    </Modal>
                </div >
            );
        } else if (this.props.buttonType == "dislike") {
            return (
                <div>
                    <a className="supportButtons" onClick={() => this.dislikeButton(this.props.uniqueKey)} role="button"><i className="fa fa-thumbs-down"></i></a>
                    <p id="dislikeNumber">{this.state.dislikes}</p>
                </div>
            );
        }
        return (
            <div>
            </div>
        );
    }
}

export default SocialButtonComponent;