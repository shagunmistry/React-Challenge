import React, { Component } from 'react';
import {
    Player, ControlBar,
    ForwardControl, CurrentTimeDisplay,
    TimeDivider, VolumeMenuButton, BigPlayButton
} from 'video-react';
import ModalContainer from '../cards/ModalContainer';

import { firebaseApp } from '../firebase/Firebase';
var databaseRef = firebaseApp.database();

class SingleCardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            activeUser: false,
            activeUserID: "",
            like: false,
            dislike: false,
            challenge: false
        });
        this.likeButton = this.likeButton.bind(this);
        this.challengeButton = this.challengeButton.bind(this);
        this.dislikeButton = this.dislikeButton.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    /**
     * Use the unique key of each post to distinguish from one another. 
     * 
     */
    likeButton(uniqueKey) {
        //First you have to get the likes numbers from database, assign it to a variable, then add to that when the user 
        //clicks on it and then use that to update the new like in the database. 
        /* To check if the user has already liked the video before, create a new node in the database
        * 'userLikes' and then everytime a user likes something, add the post's uniquekey under that user's id. .
        * Whenever they click on a "Like" button, go through that list as well and if they have liked it, 
        * remove it from that and decrease the counter by 1.
        * If they have NOT liked it, increase the counter by 1. 
        * Also, you will want to set up the feature where if the user has already liked it, 
        * go through the loggedIn user's id and then change the color of like button to something else. 
        * 
        * ALSO.. Make sure that the user can only like or dislike. Not both. 
        */
        var likeNumber, referThis = this, newLikeNumber;
        if (this.state.activeUser) {
            var firstTimeLike = false;
            //user is logged in so they can like the video. 
            //Get the original like from the database. 
            databaseRef.ref('posts/' + uniqueKey).on('value', function (snapshot) {
                likeNumber = snapshot.val().likes;
            });

            //Check if the user has already liked it
            //If so, unlike it. If not, like it. <-- do this in the same method. 
            databaseRef.ref('statkeeper/' + this.state.activeUserID + '/' + uniqueKey).on('value', function (snapshot) {
            });

            //After the database calls have been made, update the new like number. 
            setTimeout(function () {
                var updates = {};
                updates['posts/' + uniqueKey + '/likes'] = newLikeNumber;
                //Update it in the database
                databaseRef.ref().update(updates);
            }, 2000);


        } else {
            //They have not logged in so tell them to log in. 
            window.alert('Please log in to like!');
        }
    }
    challengeButton() {
    }
    dislikeButton() {
    }

    //Check if the user is logged in and then setState if he/she is. If not, they won't be able to like/dislike/challenge.
    componentWillMount() {
        //assign state to referThis
        var referThis = this;
        firebaseApp.auth().onAuthStateChanged(function (user) {
            if (user) {
                referThis.setState({
                    activeUser: true,
                    activeUserID: user.uid
                })
            } else {
                referThis.setState({
                    activeUser: false
                })
            }
        });
    }

    componentDidMount() {
        //Update the likes/dislikes/challenges everytime they get updated in database. 
        //Ok, so this updates on screen BUT it updates only the first singleCardContainer/ 
        //Need to figure out how to use their unique keys to update the right one. UGHHHGHGHG!
        //Also, make sure that the button is a different color when done. 
        /*databaseRef.ref('posts/' + this.props.uniqueKey).on('value', function(snapshot){
            document.getElementById('likeNumber').innerText = snapshot.val().likes;
            document.getElementById('dislikeNumber').innerText = snapshot.val().dislikes;
            document.getElementById('challengeNumber').innerText = snapshot.val().challenges;            
        }); */
    }

    //We will have to pass down the states from CardContainer as props to this so that they get updated in real-time *fingers-crossed*

    render() {
        const { userid, likes, dislikes, challenges, profilePic, videoCategory, videoDesc, videoTitle, videoURL, uniqueKey } = this.props;
        return (
            <div className="container">
                <div className="card" id="generalCard">
                    <div className="card-text">
                        <div id="singleVideoContainer">
                            <h3>{videoTitle}</h3>
                            <p> {userid}</p><p>{uniqueKey}</p>
                            <Player poster="" src={videoURL}></Player>
                            <div id="videoInfoSection">
                                <div className="row" id="buttonContainerRow">
                                    <div className="col-md-4 col-xs-6 col-sm-4">
                                        <a className="supportButtons" onClick={() => this.likeButton(this.props.uniqueKey)} role="button"><i className="fa fa-thumbs-up"></i></a>
                                        <p id="likeNumber" >{likes}</p>
                                    </div>
                                    <div className="col-md-4 col-xs-6 col-sm-4">
                                        <a className="supportButtons" onClick={() => this.challengeButton()} role="button"><i className="fa fa-shield"></i></a>
                                        <p id="challengeNumber">{challenges}</p>
                                    </div>
                                    <div className="col-md-4 col-xs-6 col-sm-4">
                                        <a className="supportButtons" onClick={() => this.dislikeButton()} role="button"><i className="fa fa-thumbs-down"></i></a>
                                        <p id="dislikeNumber">{dislikes}</p>
                                    </div>
                                </div>
                                <div id="commentSection">
                                    <p>{videoCategory}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleCardContainer;