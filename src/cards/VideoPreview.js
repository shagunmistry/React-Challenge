import React, { Component } from 'react';
import { firebaseApp } from '../firebase/Firebase';
import {
    Player, ControlBar,
    ForwardControl, CurrentTimeDisplay,
    TimeDivider, VolumeMenuButton, BigPlayButton
} from 'video-react';
var databaseRef = firebaseApp.database();


class VideoPreview extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <div className="container">
                <div className="card" id="generalCard">
                    <div className="card-header">
                        <h2>Preview of Your Video</h2>
                    </div>
                    <div className="card-text">
                        <div id="singleVideoContainer">
                            <h3>{this.props.userName}</h3>
                            <Player poster="" src={this.props.videourl}></Player>
                            <hr/>
                            <br/>
                            <div id="videoInfoSection">
                            <button className="btn btn-danger btn-lg" onClick={()=> window.location.replace('https://www.beztbaba.com/')} >Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default VideoPreview;