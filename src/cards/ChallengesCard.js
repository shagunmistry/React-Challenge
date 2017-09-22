/**
 * Card Container for the Challenge Feature. 
 * A person who is challenged, their video will appear on the left. 
 * The person who was the one to challenge the Original User, his video will show on the right. 
 * There will be a status bar on the bottom which shows who is winning. 
 * 
 * 
 * ********************************
 * NEED TO CHANGE HOW THE VIDEOS ARE LOADED. IT WOULD BE MUCH BETTER IF THE TECHNIQUE WAS SIMILAR TO HOW
 * SINGLE CARD CONTAINER IS LOADED!
 * 
 */
import React, { Component } from 'react';
import {
    Player, ControlBar,
    ForwardControl, CurrentTimeDisplay,
    TimeDivider, VolumeMenuButton, BigPlayButton
} from 'video-react';

import Modal from 'boron/WaveModal';

/**
 * For the ChallengeButton() == 
 * when they click on it, pass in the videoURL, userID of the person who clicked it and the video that it was clicked on.
 * After that, update the count in the database and set up both users under Challenges group in the database. 
 */

class ChallengesCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoURL: this.props.videoURL,
            likes: this.props.likes,
            dislikes: this.props.dislikes,
            challenges: this.props.challenges,
            title: this.props.title,
            userid: this.props.userid,
            userImage: this.props.userImage,
            progressBarLikes: "",
            progressBarChallenges: ""

        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    showModal() {
        this.refs.modal.show();
    }
    hideModal() {
        this.refs.modal.hide();
    }
    

    componentDidMount(likes, dislikes, challenges) {
        likes = parseInt(this.state.likes);
        dislikes = parseInt(this.state.dislikes);
        challenges = parseInt(this.state.challenges);

        var ratio = ((likes / (likes + dislikes)) * 100);

        var progressBarArray = [];
        //create the like/dislike progress div
        var likeProgressDiv = document.createElement("div");
        likeProgressDiv.setAttribute("id", "like_progress");

        var likeProgressBarDiv = document.createElement("div");
        likeProgressBarDiv.className = "progress";
        //create the actual like/dislike progress bar
        var likeProgressbar = document.createElement("div");
        likeProgressbar.className = "progress-bar";
        //Set up all the attributes: role, style, aria-valuenow, aria-valuemax, aria-valuemin
        likeProgressbar.setAttribute("role", "progressbar");
        likeProgressbar.setAttribute("style", "width:" + ratio + "%; height: 7px;");
        likeProgressbar.setAttribute("aria-valuenow", ratio);
        likeProgressbar.setAttribute("aria-valuemax", 1000000);
        likeProgressbar.setAttribute("aria-valuemin", 0);
        likeProgressbar.setAttribute("id", "like_progress_bar");
        //create a text to show the numbers below it. 
        var likesText = document.createElement("p");
        likesText.innerHTML = "<a id='like_button' ><i class='fa fa-thumbs-up' data-toggle='tooltip' title='I like this'></i></a> " + likes + " <a id='dislike_button'><i class='fa fa-thumbs-down' data-toggle='tooltip' title='I dislike this'></i></a>  " + dislikes;
        //append the like progress bar back to div. 
        likeProgressBarDiv.appendChild(likeProgressbar);
        likeProgressDiv.appendChild(likeProgressBarDiv);
        likeProgressDiv.appendChild(likesText);


        //create the Challenge Progress bar
        var challengeDiv = document.createElement("div");
        challengeDiv.setAttribute("id", "challenge_progress");

        var challengeProgressDiv = document.createElement("div");
        challengeProgressDiv.className = "progress";
        //create the actual like/dislike progress bar
        var challengeProgressBar = document.createElement("div");
        challengeProgressBar.className = "progress-bar";
        //Set up all the attributes: role, style, aria-valuenow, aria-valuemax, aria-valuemin
        challengeProgressBar.setAttribute("role", "progressbar");
        challengeProgressBar.setAttribute("style", "width:" + challenges + "%; height: 7px");
        challengeProgressBar.setAttribute("aria-valuenow", likes);
        challengeProgressBar.setAttribute("aria-valuemax", 500);
        challengeProgressBar.setAttribute("aria-valuemin", 0);
        challengeProgressBar.setAttribute("id", "challenge_progress_bar");
        //create a text to show the numbers below it. 
        var challengeText = document.createElement("p");

        var challengeButtonLink = document.createElement("a"); challengeButtonLink.setAttribute("id", "challenge_button");
        //Fa Icon Set Up
        var challengeButtonIcon = document.createElement("i"); challengeButtonIcon.className = "fa fa-shield";
        challengeButtonIcon.setAttribute("data-toggle", "tooltip");
        challengeButtonIcon.setAttribute("title", "I want to challenge");
        challengeButtonIcon.innerText = "\t" + challenges;
        challengeButtonLink.appendChild(challengeButtonIcon);

        challengeText.appendChild(challengeButtonLink);

        //append the like progress bar back to div. 
        challengeProgressDiv.appendChild(challengeProgressBar);
        challengeDiv.appendChild(challengeProgressDiv);
        challengeDiv.appendChild(challengeText);

        progressBarArray.push(likeProgressDiv);
        progressBarArray.push(challengeDiv);

        document.getElementById("progressChallenge").appendChild(progressBarArray[0]);
        document.getElementById("progressChallenge").appendChild(progressBarArray[1]);
        //return progressBarArray;
    }



    render() {

        return (
            <div>
                <div className="container">
                    <div className="card groupCard">
                        {/********** Each row will have video, profile info   **********/}
                        <div className="row">
                            <div className="col-md-6">
                                <div id="challengerVideo">
                                    <Player poster="" src={this.state.videoURL}></Player>
                                </div>
                            </div>
                            <div className="col-md-6">
                                {   //This contains Pic, Title, and Like Button. 
                                    <div id="challengerInfo">
                                        <div className="row">
                                            <div className="col-md-2" id="challengePicCol">
                                                <img id="challengerPic" src={this.state.userImage} />
                                            </div>
                                            <div className="col-md-7" id="titleInfoCol">
                                                <h3 id="videoChallengeTitle"><strong>{this.state.title}</strong></h3>
                                                <p><i>{this.state.userid}</i></p>
                                            </div>
                                            <div className="col-md-3" id="likeButtonCol">
                                                <button type="button" className="btn btn-danger btn-4"><i className="fa fa-bomb"></i> | Like</button>
                                            </div>
                                        </div>
                                    </div>}
                                {//This contains the Progress Bar statsand Challenge Button. 
                                    <div id="progressChallenge">
                                    </div>
                                }
                                <div id="challenge_button_place">
                                    <button type="button" className="btn btn-danger btn-4"><i className="fa fa-bomb"></i> | Challenge</button>
                                </div>
                            </div>
                        </div>
                        <hr className="style14" />
                        <div className="row">
                            <div className="col-md-6">
                                <div id="challengerVideo">
                                    <Player className="videoChallenge" poster="" src={this.state.videoURL}></Player>
                                </div>
                            </div>
                            <div className="col-md-6">
                                {   //This contains Pic, Title, and Like Button. 
                                    <div id="challengerInfo">
                                        <div className="row">
                                            <div className="col-md-2" id="challengePicCol">
                                                <img id="challengerPic" src={this.state.userImage} />
                                            </div>
                                            <div className="col-md-7" id="titleInfoCol">
                                                <h3 id="videoChallengeTitle"><strong>{this.state.title}</strong></h3>
                                                <p><i>{this.state.userid}</i></p>
                                            </div>
                                            <div className="col-md-3" id="likeButtonCol">
                                                <button type="button" className="btn btn-danger btn-4"><i className="fa fa-bomb"></i> | Like</button>
                                            </div>
                                        </div>
                                    </div>}
                                {//This contains the Progress Bar statsand Challenge Button. 
                                    <div id="progressChallenge2">
                                    </div>
                                }
                                <div id="challenge_button_place">
                                    <button type="button" className="btn btn-danger btn-4"><i className="fa fa-bomb"></i> | Challenge</button>
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