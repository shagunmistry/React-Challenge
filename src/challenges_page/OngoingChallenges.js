
/**
 *  -- challengedUniqueKey -- The data can be retrieved but the last uniqueKey in the database is passed to
 *                            the child Components, not the other prev ones. Those are passed as UNDEFINED
 *                            ***TURNS OUT WE NEED THIS......
 */
import React, { Component } from 'react';
import ChallengesCard from '../cards/ChallengesCard';
//Default Firebase App
import { firebaseApp } from '../firebase/Firebase';

var databaseRef = firebaseApp.database();
var userInfo = {}, hitsInfo = {}, hitsArray = [];
var userArray = [];

class OngoingChallenges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayOfChallengeData: []
        }
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    //Load all the challenges from the Challenges Node in Database
    /**
     * Method: 
     * 1. Get the Challenged Video's Unique Key, which will be the first key
     * 2. Get the value under challengerUniqueKey
     * 3. Get the challengerHits and challengedHits 
     * 4. go under POSTS/ to find the video information using those Unique Keys
     * 5. Store all this in an object (just Whatever you need, not every single thing probably);
     */
    componentWillMount() {
        //Get the data
        var referThis = this;
        var videosRef = databaseRef.ref('challenges');

        //Read the challenges once
        videosRef.once('value').then(function (snapshot) {
            snapshot.forEach(function (challengesData) {
                userInfo = {};
                //Get the person CHALLENGED's unique Key
                userInfo.challengedUniqueKey = challengesData.key;
                hitsInfo.challengedUniqueKey = challengesData.key;

                challengesData.forEach(function (eachChallenge) {
                    //Get Each Challenge's HITS, uniqueKeys
                    userInfo.challengerUniqueKey = eachChallenge.val().challengerUniqueKey;

                    hitsInfo.challengedHits = eachChallenge.val().challengedHits;
                    hitsInfo.challengerHits = eachChallenge.val().challengerHits;
                    hitsInfo.challengeruserid = eachChallenge.key;
                    hitsArray.push(hitsInfo);
                });

                //console.log(hitsArray[0]);
                //The data is different right now. 
                //Get the challenger's Information 
                databaseRef.ref('posts/' + userInfo.challengerUniqueKey).once('value').then(function (challengerSnapshot) {

                    userInfo.challengerProfilePic = challengerSnapshot.val().profilePic;
                    userInfo.challengeruserName = challengerSnapshot.val().userName;
                    userInfo.challengervideoDesc = challengerSnapshot.val().videoDesc;
                    userInfo.challengervideoTitle = challengerSnapshot.val().videoTitle;
                    userInfo.challengervideoURL = challengerSnapshot.val().videoURL;
                    userInfo.challengeruserid = challengerSnapshot.val().userid;
                    //console.log("A: " + userInfo.challengervideoDesc);
                });

                databaseRef.ref('posts/' + userInfo.challengedUniqueKey).once('value').then(function (challengedSnapShot) {
                    userInfo.challengedProfilePic = challengedSnapShot.val().profilePic;
                    userInfo.challengeduserName = challengedSnapShot.val().userName;
                    userInfo.challengedvideoDesc = challengedSnapShot.val().videoDesc;
                    userInfo.challengedvideoTitle = challengedSnapShot.val().videoTitle;
                    userInfo.challengedvideoURL = challengedSnapShot.val().videoURL;
                    userInfo.challengeduserid = challengedSnapShot.val().userid;
                    //console.log("B: " + userInfo.challengedvideoDesc);

                }).then(function (onResolve) {
                    //Set the state to the arrayOfChallengeData after you push userInfo to userArray;
                    userArray.push(userInfo);
                    referThis.setState({
                        arrayOfChallengeData: userArray
                    });
                    //Empty it out so the next information can set in.
                    userInfo = {};
                });

                hitsInfo = {};
            });
        });

    }


    render() {

        var arrayToPass = this.state.arrayOfChallengeData;
        return (
            <div>
                {
                    arrayToPass.map((data, i) => <ChallengesCard {...data} key={data.challengerUniqueKey + i}
                        hitsInformation={hitsArray[i]}
                    />)
                }
            </div>
        )

    }

}


export default OngoingChallenges;