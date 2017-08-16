
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

import { firebaseApp } from './firebase';
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
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    /**
     *This will be loaded once this page renders.  Get all the video information and then render player divs based on that. 
     */
    componentWillMount() {

        //Maybe you should erase the array after all the information for a vid is displayed. so that it starts from 0 again. 
        //Get the div element under which the video will go. 
        //Create div "videoRows" for every two videos added so that it's in order.
        /*
        for (var i = 0; i < dataValues.length; i++) {
            if (i === 0) {
               
            }

        } */

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
                    let videoPlace = document.getElementById('videoText');
                    var videoLine = document.createElement('div');
                    videoLine.setAttribute('id', 'singleVideoContainer');
                    videoPlace.appendChild(videoLine);
                    /*
                    var videoRow = document.createElement("div");
                    videoRow.className = 'col-md-4';
                    videoRow.setAttribute("id", "videoRows");
                    //create the myPlayer div which will contain the Player. 
                    var myPlayerDiv = document.createElement("div");
                    myPlayerDiv.setAttribute("id", "myPlayer");
                    //create my player with the information from the attributes.
                    var videoPlayer = document.createElementNS('', 'Player');
                    videoPlayer.setAttribute("src", data.val().videoURL);
                    videoPlayer.setAttribute("ref", 'player');
                    myPlayerDiv.appendChild(videoPlayer);
                    videoRow.appendChild(myPlayerDiv);
                    document.getElementById('videoList').appendChild(videoRow); */
                })
            });
        }

        window.addEventListener('load', function () {
            //The load function is running twice. 
            window.alert("This is a test");
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
                        <p className="card-text"><a href={"http://www.beztbaba.com/" + this.props.categoryName}>More...</a></p>
                    </div>
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