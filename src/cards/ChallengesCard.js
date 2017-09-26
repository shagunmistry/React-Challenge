/**
 * Card Container for the Challenge Feature. 
 * A person who is challenged, their video will appear on the left. 
 * The person who was the one to challenge the Original User, his video will show on the right. 
 * There will be a status bar on the bottom which shows who is winning. 
 *  
 */
import React, { Component } from 'react';
import {
    Player, ControlBar,
    ForwardControl, CurrentTimeDisplay,
    TimeDivider, VolumeMenuButton, BigPlayButton
} from 'video-react';
import { firebaseApp } from '../firebase/Firebase';
import HeartButton from "../buttons/HeartButton";

var databaseRef = firebaseApp.database();

// var ratio = ((likes / (likes + dislikes)) * 100);

/**
 * For the ChallengeButton() == 
 * when they click on it, pass in the videoURL, userID of the person who clicked it and the video that it was clicked on.
 * After that, update the count in the database and set up both users under Challenges group in the database. 
 */

class ChallengesCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            challengedUserName: "",
            challengedVideoURL: "",
            challengedVideoTitle: "",
            challengedVideoDesc: "",
            challengedProfilePic: "",

            challengerUserName: "",
            challengerVideoURL: "",
            challengerVideoTitle: "",
            challengerVideoDesc: "",
            challengerProfilePic: "",
            challengerUserID: "",

        }
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    /**
     * Load all the information from the POSTS/ database by using the keys passed in as props
     */
    componentWillMount() {
        var referThis = this, challengerVideoKey = this.props.challengerUniqueKey, challengedVideoKey = this.props.challengedVideoKey;

        //Get the CHALLENGED videos from Post
        /* var challengedRef = databaseRef.ref('posts/' + challengedVideoKey);
         challengedRef.on('value', function (snapshot) {
             referThis.setState({
                 challengedUserName: snapshot.val().userName,
                 challengedVideoURL: snapshot.val().videoURL,
                 challengedVideoTitle: snapshot.val().videoTitle,
                 challengedVideoDesc: snapshot.val().videoDesc,
                 challengedProfilePic: snapshot.val().profilePic,
             });
         });
 
         //Get the CHALLENGER video info
         var challengerRef = databaseRef.ref('posts/' + challengerVideoKey);
         challengerRef.on('value', function (snapshot) {
             referThis.setState({
                 challengerUserName: snapshot.val().userName,
                 challengerVideoURL: snapshot.val().videoURL,
                 challengerVideoTitle: snapshot.val().videoTitle,
                 challengerVideoDesc: snapshot.val().videoDesc,
                 challengerProfilePic: snapshot.val().profilePic,
                 challengerUserID: snapshot.val().userid,
             });
         }); */

        //Trial 1: Set the State for all challenger and challenged variables under one Firebase callback
        var challengeRef = databaseRef.ref('posts/');
        //If a key of the snapshot matches that of challengedVidKey, then set the state for Challenged. 
        //If it matches Challengers, set it to that. 
        challengeRef.on('value', function (snapshot) {
            snapshot.forEach(function (childSnapShot) {
                if (childSnapShot.key === challengedVideoKey) {
                    //console.log("First IF statement" + snapshot.val().userName);
                    referThis.setState({
                        challengedUserName: childSnapShot.val().userName,
                        challengedVideoURL: childSnapShot.val().videoURL,
                        challengedVideoTitle: childSnapShot.val().videoTitle,
                        challengedVideoDesc: childSnapShot.val().videoDesc,
                        challengedProfilePic: childSnapShot.val().profilePic,
                    });
                } else if (childSnapShot.key === challengerVideoKey) {
                   // console.log("Second IF statement" + childSnapShot.val().userName);
                    referThis.setState({
                        challengerUserName: childSnapShot.val().userName,
                        challengerVideoURL: childSnapShot.val().videoURL,
                        challengerVideoTitle: childSnapShot.val().videoTitle,
                        challengerVideoDesc: childSnapShot.val().videoDesc,
                        challengerProfilePic: childSnapShot.val().profilePic,
                        challengerUserID: childSnapShot.val().userid,
                    });
                } else {
                    //Do nothing.
                }
            });
        });

    }


    componentDidMount() {
    }

    render() {
        //Get all the props
        const { challengedHits, challengedVideoKey, challengerHits, challengerUniqueKey } = this.props;
        return (
            <div>
                <div className="container">
                    <div className="card groupCard">
                        {/*************************CHALLENGED******************/}
                        <div className="row" id="challengedRow">
                            <div className="col-md-6">
                                <div className="challengedVideo" id="challengeVideos" >
                                    <Player poster="" src={this.state.challengedVideoURL}></Player>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div id="videoInfoDiv">
                                    <h4>{this.state.challengedUserName}</h4>
                                    <p id="videoDescChallengePage"><i className="fa fa-quote-left"></i>{this.state.challengedVideoDesc}<i className="fa fa-quote-right"></i></p>
                                </div>
                                <HeartButton 
                                    key={challengedVideoKey + challengerUniqueKey + "challenged"} 
                                    challengedKey={challengedVideoKey} whoToHeart="challenged"
                                    challengerUserID={this.state.challengerUserID}
                                    challengerKey={challengerUniqueKey}
                                    challengedHits={challengedHits} challengerHits={challengerHits}
                                    idName="challengedHitBtn" >
                                </HeartButton>
                            </div>

                        </div>
                        {/*************************CHALLENGER******************/}
                        <div className="row" id="challengerRow">
                            <div className="col-md-6">
                                <div id="videoInfoDiv">
                                    <h4>{this.state.challengerUserName}</h4>
                                    <p id="videoDescChallengePage"><i className="fa fa-quote-left"></i>{this.state.challengerVideoDesc}<i className="fa fa-quote-right"></i></p>
                                </div>
                                <HeartButton 
                                    key={challengedVideoKey + challengerUniqueKey + "challenger"} 
                                    challengedKey={challengedVideoKey} whoToHeart="challenger"
                                    challengerUserID={this.state.challengerUserID}
                                    challengerKey={challengerUniqueKey}
                                    challengedHits={challengedHits} challengerHits={challengerHits}
                                    idName="challengerHitBtn">
                                </HeartButton>
                            </div>
                            <div className="col-md-6">
                                <div className="challengerVideo" id="challengeVideos">
                                    <Player className="videoChallenge" poster="" src={this.state.challengerVideoURL}></Player>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        );
    }
}

export default ChallengesCard;