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

import Modal from 'boron/WaveModal';


class ChallengesCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoURL: "https://firebasestorage.googleapis.com/v0/b/challengemetest-ea2e0.appspot.com/" +
            "o/users%2FbEcyh6hrlGXbTq8ZE27BxFgvHXX2%2Fuploaded_videos%2FJacks_AQOtK?alt=media&token=fa77a283-1174-4881-9119-b3548db6b35c"

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
                                { <div id="challengerInfo">
                                    <div className="row">
                                        <div className="col-md-2" id="challengePicCol">
                                            <img id="challengerPic" src="https://firebasestorage.googleapis.com/v0/b/challengemetest-ea2e0.appspot.com/o/users%2FbEcyh6hrlGXbTq8ZE27BxFgvHXX2%2Fimages%2Fselfie1.PNG?alt=media&token=7c177514-8b47-40e6-b375-018c6c94ff6f" />
                                        </div>
                                        <div className="col-md-7" id="titleInfoCol">
                                            <h3 id="videoChallengeTitle"><strong>Animals In the House</strong></h3>
                                            <p><i>Shagun Mistry</i></p>
                                        </div>
                                        <div className="col-md-3" id="likeButtonCol">
                                            <button type="button" className="btn btn-danger btn-4"><i className="fa fa-bomb"></i> | Like</button>
                                        </div>
                                    </div>
                                </div> }
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div id="challengerVideo">
                                    <Player className="videoChallenge" poster="" src={this.state.videoURL}></Player>
                                </div>
                            </div>
                            <div className="col-md-6">
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default ChallengesCard;