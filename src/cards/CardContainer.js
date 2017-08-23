
/**
 * This is the place where it will pull up all the videos from the Firebase Database and
 * it will look like the Instagram time-line. 
 */
import React, { Component } from 'react';
import {
    Player, ControlBar,
    ForwardControl, CurrentTimeDisplay,
    TimeDivider, VolumeMenuButton, BigPlayButton
} from 'video-react';

import { firebaseApp } from '../firebase/firebase';
import Modal from 'boron/WaveModal';

var dataRef = firebaseApp.database();

class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: "",
            videoLink: "",
            likes: "",
            challenges: "",
            videoCat: "",
            videoDesc: "",
            videoTitle: ""
        }

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal() {
        this.refs.modal.show();
    }
    hideModal() {
        this.refs.modal.hide();
    }

    /**
     * The way we will set it up is: 
     * Based on the category name, get the download URLS from the DATABASE and set the source of the videos by document.getElementID
     * Also, figure out how to sort based on like/dislike rate and the date uploaded. 
     */

    render() {

        /**
         * Add an event listener for the like/dislike button and challenge button 
         */
        document.addEventListener("click", function () {
            var challenge_button = document.getElementById("challenge_button");
            //have some form of minimal animation first and then switch a page or pop open a modal. 
        });

        function initApp() {
            var dataValues = [];
            /**
           * When the window loads, this will be ran. 
           * ---------------This is being fired twice. Returns 48 length even though it should return 24. right now. 
           */
            var videosRef = dataRef.ref('posts/');
            videosRef.once('value', function (snapshot) {
                snapshot.forEach(function (data) {
                    //Get the information of one video.
                    dataValues.push(data.val().challenges);
                    dataValues.push(data.val().dislikes);
                    dataValues.push(data.val().likes);
                    dataValues.push(data.val().userid);
                    dataValues.push(data.val().videoCategory);
                    dataValues.push(data.val().videoDesc);
                    dataValues.push(data.val().videoTitle);
                    dataValues.push(data.val().videoURL);
                    dataValues.push(data.val().profilePic);

                    //start creating new elements. Assign all the variables to create the row element. 
                    let videoText = document.getElementById('videoText');
                    var singlevideoConainer = document.createElement('div');
                    singlevideoConainer.setAttribute('id', 'singleVideoContainer');
                    //videoPlace --> videoLine --> videoInfoSecDiv --> videoInfoSecRow/Desc/Pic

                    //H3 title of the video <---Add some formatting to it later, like font-family and size
                    var videoTitle = document.createElement("h3");
                    videoTitle.setAttribute("id", "videoTitleId");
                    videoTitle.innerText = data.val().videoTitle;
                    singlevideoConainer.appendChild(videoTitle);

                    //Set up Profile Pic. Click on the profile pic and it leads to modal with Profile Info
                    var linkToProfile = linkToProfileFunc(data.val().userid, data.val().profilePic);

                    //create a div for the place where the profile pic and progress bars will be. 
                    var videoInfoSecDiv = document.createElement('div');
                    videoInfoSecDiv.className = "row";
                    videoInfoSecDiv.setAttribute('id', 'videoInfoSection');
                    videoInfoSecDiv.appendChild(linkToProfile);


                    //create a video player, attach the src to it, format the css for it and the append it to singleVideoContainer. 
                    var videoPlayer = document.createElement('VIDEO');
                    videoPlayer.setAttribute("src", data.val().videoURL);
                    videoPlayer.setAttribute("id", "videoPlayerStyle");
                    videoPlayer.setAttribute("controls", "controls");

                    //create progress bars to track the progress of Liks/dislikes and Challenges. 
                    var progressbars = progressBarLoad(data.val().likes, data.val().dislikes, data.val().challenges);
                    var likeProgress = progressbars[0];
                    var challengeBar = progressbars[1];
                    var progressbarDiv = document.createElement("div");
                    progressbarDiv.className = "progress_bar_div col-md-10";
                    progressbarDiv.appendChild(likeProgress);
                    progressbarDiv.appendChild(challengeBar);
                    videoInfoSecDiv.appendChild(progressbarDiv);


                    //Create an Horizontal line after single video player
                    //var horizontalLine = document.createElement("hr");
                    // horizontalLine.setAttribute("width", "30%");

                    //append the video's information box to the singleVideoContainer Div and then append the video to it as well.
                    singlevideoConainer.appendChild(videoPlayer);
                    singlevideoConainer.appendChild(videoInfoSecDiv);
                    // singlevideoConainer.appendChild(horizontalLine);
                    videoText.appendChild(singlevideoConainer);

                })
            });
        }

        /**
         *The link to the profile div. Set it up here with the modal and then return it
         */
        function linkToProfileFunc(profileLink, profilePic) {

            //link to modal and insert img into it. 
            var linkToProfileVar = document.createElement("a");
            linkToProfileVar.className = "col-md-2";
            linkToProfileVar.href = "https://www.beztbaba.com/" + profileLink;
            //image place
            var videoInfoPicPlace = document.createElement('img');
            videoInfoPicPlace.className = "videoInfoPic";
            videoInfoPicPlace.src = profilePic;
            //then you append the image to the <a></a> so that it links to the profile page. 
            linkToProfileVar.appendChild(videoInfoPicPlace);

            //Assign a tooltip to the image so that it shows the username when someone hovers on it.
            //LATER

            return linkToProfileVar;
        }

        /**
         * Load the progress bars displaying likes/dislikes and the number of challenges.
         */
        function progressBarLoad(likes, dislikes, challenges) {
            var ratio = (likes / (likes + dislikes)) * 100;

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
            likeProgressbar.setAttribute("style", "width:" + ratio + "%; height: 1px;");
            likeProgressbar.setAttribute("aria-valuenow", ratio);
            likeProgressbar.setAttribute("aria-valuemax", 1000000);
            likeProgressbar.setAttribute("aria-valuemin", 0);
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
            challengeProgressBar.setAttribute("style", "width:" + challenges + "%; height: 1px");
            challengeProgressBar.setAttribute("aria-valuenow", likes);
            challengeProgressBar.setAttribute("aria-valuemax", 100);
            challengeProgressBar.setAttribute("aria-valuemin", 0);
            //create a text to show the numbers below it. 
            var challengeText = document.createElement("p");
            challengeText.innerHTML = "<a id='challenge_button'><i class='fa fa-shield' data-toggle='tooltip' title='I want to Challenge' ></i></a> " + challenges;
            //append the like progress bar back to div. 
            challengeProgressDiv.appendChild(challengeProgressBar);
            challengeDiv.appendChild(challengeProgressDiv);
            challengeDiv.appendChild(challengeText);

            progressBarArray.push(likeProgressDiv);
            progressBarArray.push(challengeDiv);
            return progressBarArray;
        }

        /**
         * This loads when the page loads (right before renders)
         */
        window.addEventListener('load', function () {
            //The load function is running twice. 
            // window.alert("This is a test");
            initApp()
        });

        return (
            <div>
                <div className="card" id="generalCard">
                    <h4 className="card-header" id="generalHeader">{this.props.categoryName}</h4>
                    <div className="card-text" id="videoText">
                        {/*    <div id="singleVideoContainer">
                            <h3>Animals in the House</h3>
                            <Player poster="" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                            </Player>
                            <div id="videoInfoSection">
                                <a onClick={() => this.showModal()}><img className="videoInfoPic" src="https://firebasestorage.googleapis.com/v0/b/challengemetest-ea2e0.appspot.com/o/selfie1.PNG?alt=media&token=807a3afa-e4dc-4020-87ed-25219c305732" alt="Profile Pic" />
                                </a>
                            </div>
                        </div>*/}
                    </div>
                    { /*  <button className="btn btn-danger btn-4" onClick={() => this.showVideos()}>Show Videos</button>*/}
                    <p className="card-text"><a href={"http://www.beztbaba.com/" + this.props.categoryName}>More...</a></p>
                </div>
                <Modal ref="modal">
                    <button className="btn btn-danger btn-4" onClick={() => this.hideModal()}>Close</button>
                </Modal>
            </div>
        )

    }

}

export default CardContainer;