
import React, { Component } from 'react';
import {
    Player, ControlBar,
    ForwardControl, CurrentTimeDisplay,
    TimeDivider, VolumeMenuButton, BigPlayButton
} from 'video-react';

import ModalContainer from '../cards/ModalContainer';
class SingleCardContainer extends Component {
    constructor(props) {
        super(props);

        this.likeButton = this.likeButton.bind(this);
        this.challengeButton = this.challengeButton.bind(this);
        this.dislikeButton = this.dislikeButton.bind(this);
    }

    likeButton() {
    }
    challengeButton() {
    }
    dislikeButton() {
    }
    //We will have to pass down the states from CardContainer as props to this so that they get updated in real-time *fingers-crossed*

    render() {
        const { userid, likes, dislikes, challenges, profilePic, videoCategory, videoDesc, videoTitle, videoURL } = this.props;
        return (
            <div className="container">
                <div className="card" id="generalCard">
                    <div className="card-text">
                        <div id="singleVideoContainer">
                            <h3>{videoTitle}</h3><p> {userid}</p>
                            <Player poster="" src={videoURL}></Player>
                            <div id="videoInfoSection">
                                <div className="row" id="buttonContainerRow">
                                    <div className="col-md-4 col-xs-6 col-sm-4">
                                        <a className="supportButtons" onClick={() => this.likeButton()} role="button" href="#"><i className="fa fa-thumbs-up"></i></a>
                                        <p>{likes}</p>
                                    </div>
                                    <div className="col-md-4 col-xs-6 col-sm-4">
                                        <a className="supportButtons" onClick={() => this.challengeButton()} role="button" href="#"><i className="fa fa-shield"></i></a>
                                        <p>{challenges}</p>
                                    </div>
                                    <div className="col-md-4 col-xs-6 col-sm-4">
                                        <a className="supportButtons" onClick={() => this.dislikeButton()} role="button" href="#"><i className="fa fa-thumbs-down"></i></a>
                                        <p>{dislikes}</p>
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