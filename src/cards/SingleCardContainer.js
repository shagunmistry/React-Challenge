import React, { Component } from 'react';
import {
    Player, ControlBar,
    ForwardControl, CurrentTimeDisplay,
    TimeDivider, VolumeMenuButton, BigPlayButton
} from 'video-react';
import ModalContainer from '../cards/ModalContainer';
import SocialButtonComponent from '../buttons/SocialButtonComponent';

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

        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
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
        const { userid, profilePic, videoCategory, videoDesc, videoTitle, videoURL, uniqueKey } = this.props;
        return (
            <div className="container">
                <div className="card" id="generalCard">
                    <div className="card-text">
                        <div id="singleVideoContainer">
                            <h3>{videoTitle}</h3>
                            <Player poster="" src={videoURL}></Player>
                            <div id="videoInfoSection">
                                <div className="row" id="buttonContainerRow">
                                    <div className="col-md-4 col-xs-6 col-sm-4">
                                        <SocialButtonComponent buttonType="like"
                                            activeUserID={this.state.activeUserID} activeUser={this.state.activeUser}
                                            userid={userid}
                                            uniqueKey={uniqueKey} />
                                    </div>
                                    <div className="col-md-4 col-xs-6 col-sm-4">
                                        <SocialButtonComponent buttonType="challenge"
                                            activeUserID={this.state.activeUserID} activeUser={this.state.activeUser}
                                            userid={userid}
                                            uniqueKey={uniqueKey} />
                                    </div>
                                    <div className="col-md-4 col-xs-6 col-sm-4">
                                        <SocialButtonComponent buttonType="dislike"
                                            activeUserID={this.state.activeUserID} activeUser={this.state.activeUser}
                                            userid={userid}
                                            uniqueKey={uniqueKey} />
                                    </div>
                                </div>
                                <div id="commentSection">
                                    <img src={profilePic} alt="Profile Pic" id="singleCardProfilePic"/>
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