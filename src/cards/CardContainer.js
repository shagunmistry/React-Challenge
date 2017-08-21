
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
        this.showVideos = this.showVideos.bind(this);
    }

    showModal() {
        this.refs.modal.show();
    }
    hideModal() {
        this.refs.modal.hide();
    }

    //click to show  the list of vidoes /************TEST to see if video loading works */
    showVideos() {
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

                //this returns the true value (even though it's twice)
                //window.alert(data.val().videoURL);

                //start creating new elements. Assign all the variables to create the row element. 
                let videoText = document.getElementById('videoText');
                var singlevideoConainer = document.createElement('div');
                singlevideoConainer.setAttribute('id', 'singleVideoContainer');
                //videoPlace --> videoLine --> videoInfoSecDiv --> videoInfoSecRow/Desc/Pic

                //set up the profile information. 
                var videoInfoSecDiv = document.createElement('div');
                videoInfoSecDiv.setAttribute('id', 'videoInfoSection');
                //The Row to the div
                var videoInfoSecRow = document.createElement('div');
                videoInfoSecRow.setAttribute('className', 'row');
                //Col-md-1 for the pic
                var videoInfoPic = document.createElement('div');
                videoInfoPic.setAttribute('className', 'col-md-1');
                var videoInfoPicPlace = document.createElement('img');
                videoInfoPicPlace.className = "videoInfoPic";
                videoInfoPicPlace.src = "https://firebasestorage.googleapis.com/v0/b/challengemetest-ea2e0.appspot.com/o/selfie1.PNG?alt=media&token=807a3afa-e4dc-4020-87ed-25219c305732";
                videoInfoPic.appendChild(videoInfoPicPlace);
                //col-md-11 for the video title and other information
                var videoInfoDesc = document.createElement('div');
                videoInfoDesc.setAttribute('className', 'col-md-11');
                var videoInfoDescPlace = document.createElement('div');
                videoInfoDescPlace.setAttribute('className', 'generalVideoInfo');
                videoInfoDescPlace.innerText = data.val().videoTitle;

                videoInfoDesc.appendChild(videoInfoDescPlace);
                //Attach both of those divs to Row Div then to videoInfoSecDiv
                videoInfoSecRow.appendChild(videoInfoPic);
                videoInfoSecRow.appendChild(videoInfoDesc);
                videoInfoSecDiv.appendChild(videoInfoSecRow);

                //create a video player, attach the src to it, format the css for it and the append it to singleVideoContainer. 
                var videoPlayer = document.createElement("VIDEO");
                videoPlayer.setAttribute("src", data.val().videoURL);
                videoPlayer.setAttribute("id", "videoPlayerStyle");
                videoPlayer.setAttribute("controls", "controls");


                //append the video's information box to the singleVideoContainer Div and then append the video to it as well.
                singlevideoConainer.appendChild(videoPlayer);
                singlevideoConainer.appendChild(videoInfoSecDiv);
                videoText.appendChild(singlevideoConainer);

            })
        });
    }


    /**
     * The way we will set it up is: 
     * Based on the category name, get the download URLS from the DATABASE and set the source of the videos by document.getElementID
     * Also, figure out how to sort based on like/dislike rate and the date uploaded. 
     */

    render() {

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

                    //this returns the true value (even though it's twice)
                    //window.alert(data.val().videoURL);

                    //start creating new elements. Assign all the variables to create the row element. 
                    let videoText = document.getElementById('videoText');
                    var singlevideoConainer = document.createElement('div');
                    singlevideoConainer.setAttribute('id', 'singleVideoContainer');
                    //videoPlace --> videoLine --> videoInfoSecDiv --> videoInfoSecRow/Desc/Pic

                    //set up the profile information. 
                    var videoInfoSecDiv = document.createElement('div');
                    videoInfoSecDiv.setAttribute('id', 'videoInfoSection');
                    //The Row to the div
                    var videoInfoSecRow = document.createElement('div');
                    videoInfoSecRow.className = "row";
                    //Col-md-1 for the pic
                    var videoInfoPic = document.createElement('div');
                    videoInfoPic.className = "col-md-1";
                    var videoInfoPicPlace = document.createElement('img');
                    videoInfoPicPlace.className = "videoInfoPic";
                    videoInfoPicPlace.src = "https://firebasestorage.googleapis.com/v0/b/challengemetest-ea2e0.appspot.com/o/selfie1.PNG?alt=media&token=807a3afa-e4dc-4020-87ed-25219c305732";
                    videoInfoPic.appendChild(videoInfoPicPlace);
                    //col-md-11 for the video title and other information
                    //create a list-group (bootstrap) to display the video information.
                    //1st list-item = Title
                    //2nd list-item = Description
                    //3rd list-item = likes/dislikes/challenges
                    var videoInfoDesc = document.createElement('div');
                    videoInfoDesc.className = "col-md-11";
                    videoInfoDesc.setAttribute("id", "titlePlaceId");
                    //creates a list of title, desc, and stats. 
                    var infoList = createList(data.val().videoTitle, data.val().videoDesc, data.val().challenges);


                    videoInfoDesc.appendChild(infoList);
                    //Attach both of those divs to Row Div then to videoInfoSecDiv
                    videoInfoSecRow.appendChild(videoInfoPic);
                    videoInfoSecRow.appendChild(videoInfoDesc);
                    videoInfoSecDiv.appendChild(videoInfoSecRow);

                    //create a video player, attach the src to it, format the css for it and the append it to singleVideoContainer. 
                    var videoPlayer = document.createElement("VIDEO");
                    videoPlayer.setAttribute("src", data.val().videoURL);
                    videoPlayer.setAttribute("id", "videoPlayerStyle");
                    videoPlayer.setAttribute("controls", "controls");


                    //append the video's information box to the singleVideoContainer Div and then append the video to it as well.
                    singlevideoConainer.appendChild(videoPlayer);
                    singlevideoConainer.appendChild(videoInfoSecDiv);
                    videoText.appendChild(singlevideoConainer);

                })
            });
        }
        
        /**
         * Create a list-group then list-group items containing title, description, likes/dislikes/challenges. 
         * Append it to the return the listgroup and then append it to the div 
         */
        function createList(title, description, stats){
            var infoList = document.createElement("div");
            infoList.className = "list-group";
            infoList.setAttribute("id", "descriptionListId");

            //list-group-item ---> TITLE
            var infoListItemTitle = document.createElement("li");
            infoListItemTitle.className = "list-group-item";
            infoListItemTitle.innerText = title;

            //list-group-item ---> DESCRIPTION
            var infoListItemDesc = document.createElement("li");
            infoListItemDesc.className = "list-group-item";
            infoListItemDesc.innerText = description;

            //list-group-item ---> STATS
            var infoListItemStats = document.createElement("li");
            infoListItemStats.className = "list-group-item";
            infoListItemStats.innerText = stats;

            //attach them back to the infoList
            infoList.appendChild(infoListItemTitle);
            infoList.appendChild(infoListItemDesc);
            infoList.appendChild(infoListItemStats);

            return infoList;
            
        }
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
                        {/*  <div id="singleVideoContainer">
                            <Player poster=""
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                                <ControlBar>
                                    <ForwardControl seconds={30} order={1.2} />
                                    <CurrentTimeDisplay order={4.1} />
                                    <TimeDivider order={4.2} />
                                    <VolumeMenuButton enabled />
                                </ControlBar>
                                <BigPlayButton position="center" />
                            </Player>
                            <div id="videoInfoSection">
                                <div className="row">
                                    <div className="col-md-1">
                                        <img className="videoInfoPic" src="https://firebasestorage.googleapis.com/v0/b/challengemetest-ea2e0.appspot.com/o/selfie1.PNG?alt=media&token=807a3afa-e4dc-4020-87ed-25219c305732" alt="Profile Pic" />
                                    </div>
                                    <div className="col-md-11">
                                        <div className="generalVideoInfo">
                                            <h4>video Title will go here: shorten it if necessary</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="commentSection">
                                    <ul className="list-group" id="generalCommentList" >
                                        <li className="list-group-item" id="generalCommentItem">
                                            Something
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    { /*  <button className="btn btn-danger btn-4" onClick={() => this.showVideos()}>Show Videos</button>*/}
                    <p className="card-text"><a href={"http://www.beztbaba.com/" + this.props.categoryName}>More...</a></p>
                </div>
                {/*    <Modal ref="modal">
                    <div id="compVideo">
                        <Player poster=""
                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                            <ControlBar>
                                <ForwardControl seconds={30} order={1.2} />
                                <CurrentTimeDisplay order={4.1} />
                                <TimeDivider order={4.2} />
                                <VolumeMenuButton enabled />
                            </ControlBar>
                            <BigPlayButton position="center" />
                        </Player>
                    </div>
                    <button type="button" className="btn btn-danger btn-4"><i className="fa fa-bomb"></i> | Like</button>

                    <button type="button"
                        className="btn btn-danger btn-4"
                        onClick={() => window.location.replace('http://localhost:3000/UploadVideo')} >
                        <i className="fa fa-bomb"></i> | Challenge</button>

                    <button type="button"
                        className="btn btn-danger btn-4">
                        <i className="fa fa-thumbs-o-down"></i> | Dislike</button>

                    <p ><a id="userProfileLink">User Name</a></p>
                    <p id="videoDescripton">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros odi</p>
                    <div className="wrapper">
                        <h3>Top Comments</h3>
                        <p>asldkdlsadlkasjdkajsdlkajdlwkdjalkwdmalkwdmlakwdmlkawmd</p>
                        <p>asldkdlsadlkasjdkajsdlkajdlwkdjalkwdmalkwdmlakwdmlkawmd</p>
                    </div>
                    <button className="btn btn-danger btn-4" onClick={() => this.hideModal()}>Close</button>
                </Modal>  */}
            </div>
        )

    }

}

export default CardContainer;