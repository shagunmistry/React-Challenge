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
    }



    render() {
        //The information required for the hits stats
        const hitsInformation = this.props.hitsInformation;

        //Get all the props
        const { challengedUniqueKey, challengedProfilePic, challengeduserName,
            challengedvideoDesc, challengedvideoTitle, challengedvideoURL, challengeduserid,
            challengerUniqueKey, challengerProfilePic, challengeruserName,
            challengervideoDesc, challengervideoTitle, challengervideoURL, challengeruserid } = this.props;
        return (
            <div>
                <div className="container">
                    <div className="card groupCard">
                        {/*************************CHALLENGED******************/}
                        <div className="row" id="challengedRow">
                            <div className="col-md-6">
                                <div className="challengedVideo" id="challengeVideos" >
                                    <Player poster="" src={challengedvideoURL}></Player>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div id="videoInfoDiv">
                                    <h4>{challengeduserName}</h4>
                                    <p id="videoDescChallengePage"><i className="fa fa-quote-left"></i>{challengedvideoDesc}</p>
                                </div>
                                <HeartButton
                                    challengedUniqueKey={hitsInformation.challengedUniqueKey}
                                    challengeruserid={hitsInformation.challengeruserid}
                                    challengerUniqueKey={challengerUniqueKey}
                                    decider="1"
                                    idName={hitsInformation.challengedUniqueKey + hitsInformation.challengeruserid} >
                                </HeartButton>
                            </div>

                        </div>
                        {/*************************CHALLENGER******************/}
                        <div className="row" id="challengerRow">
                            <div className="col-md-6">
                                <div id="videoInfoDiv">
                                    <h4>{challengeruserName}</h4>
                                    <p id="videoDescChallengePage"><i className="fa fa-quote-left"></i>{challengervideoDesc}</p>
                                </div>
                                <HeartButton
                                    challengedUniqueKey={hitsInformation.challengedUniqueKey}
                                    challengeruserid={hitsInformation.challengeruserid}
                                    challengerUniqueKey={challengerUniqueKey}
                                    decider="2"
                                    idName={hitsInformation.challengeruserid + hitsInformation.challengedUniqueKey}>
                                </HeartButton>
                            </div>
                            <div className="col-md-6">
                                <div className="challengerVideo" id="challengeVideos">
                                    <Player className="videoChallenge" poster="" src={challengervideoURL}></Player>
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