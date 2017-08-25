
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
        return (
            <div className="container">
                <div className="card" id="generalCard">
                    <div className="card-text">
                        <div id="singleVideoContainer">
                            <h3>{this.props.title}</h3><p> {this.props.userid}</p>
                            <Player poster="" src={this.props.videoURL}></Player>
                            <div id="videoInfoSection">
                                <div className="row">
                                    <div className="col-md-4 col-xs-6 col-sm-4">
                                        <a className="supportButtons" onclick={() => this.likeButton()} role="button" href="#"><i className="fa fa-thumbs-up"></i></a>
                                        <p>{this.props.likes}</p>
                                    </div>
                                    <div className="col-md-4 col-xs-6 col-sm-4">
                                        <a className="supportButtons" onclick={() => this.challengeButton()} role="button" href="#"><i className="fa fa-shield"></i></a>
                                        <p>{this.props.challenges}</p>
                                    </div>
                                    <div className="col-md-4 col-xs-6 col-sm-4">
                                        <a className="supportButtons" onclick={() => this.dislikeButton()} role="button" href="#"><i className="fa fa-thumbs-down"></i></a>
                                        <p>{this.props.dislikes}</p>
                                    </div>
                                </div>
                                <div id="commentSection">
                                    <p>{this.props.videoDesc}</p>
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