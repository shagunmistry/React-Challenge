
/**
 * ChallengePage will render the ChallengesCards for the list of current trending challenges
 * 
 *FIGURE OUT HOW TO GET THEIR VIDEO INFO AFTER GETTING THEIR UNIQUE KEY 
 */
import React, { Component } from 'react';
import ChallengesCard from '../cards/ChallengesCard';
//Defautlt Firebase App
import { firebaseApp } from '../firebase/Firebase';

var databaseRef = firebaseApp.database();
var dataArray = []; var userInfo = {};
var userArray = [];
var done = false;

class OngoingChallenges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstHalfChallengeInfo: [],
            secHalfChallengeInfo: []
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
        var referThis = this, challengedVideoKey = "", challengerVideoKey = "";
        var videosRef = databaseRef.ref('challenges');
        videosRef.on('value', function (snapshot) {
            snapshot.forEach(function (data) {

                //Get the challenged Person's video Key
                userInfo.challengedVideoKey = data.key;
                data.forEach(function (childSnapshot) {
                    userInfo.challengerUniqueKey = childSnapshot.val().challengerUniqueKey;
                    userInfo.challengedHits = childSnapshot.val().challengedHits;
                    userInfo.challengerHits = childSnapshot.val().challengerHits;
                    userArray.push(userInfo);

                    //Empty out userInfo;
                    userInfo = {};
                });

                referThis.setState({
                    firstHalfChallengeInfo: userArray
                });
            })
        });
    }


    render() {


        function initApp() {
        }


        /**
         * This loads when the page loads (right before renders)
         */
        window.addEventListener('load', function () {
            initApp()
        });

        var arrayToPass = this.state.firstHalfChallengeInfo;

        return (
            <div>
                {
                    arrayToPass.map((data) => <ChallengesCard {...data} key={data.challengerUniqueKey+data.challengedVideoKey} />)
                }
            </div>
        )

    }

}


export default OngoingChallenges;