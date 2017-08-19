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
                <div className="row onGoingRow">
                    <div className="col-md-4">
                        <div className="card onGoingCard">
                            <div className="card-img-top videoPlace" >
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
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="challengePic" src="https://firebasestorage.googleapis.com/v0/b/challengemetest-ea2e0.appspot.com/o/selfie1.PNG?alt=media&token=807a3afa-e4dc-4020-87ed-25219c305732" alt="Profile Pic" />
                                </div>
                                <div className="col-md-6">
                                    <div className="profileInfo">
                                        <h4>User Name</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card onGoingCard">
                            <div className="card-img-top videoPlace">
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
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="challengePic" src="https://firebasestorage.googleapis.com/v0/b/challengemetest-ea2e0.appspot.com/o/selfie1.PNG?alt=media&token=807a3afa-e4dc-4020-87ed-25219c305732" alt="Profile Pic" />
                                </div>
                                <div className="col-md-6">
                                    <div className="profileInfo">
                                        <h4>User Name</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comments">

                    </div>
                </div>
                <hr width="50%" />
                <Modal ref="modal">
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
                        onClick={() => window.location.replace('http:/www.beztbaba.com/UploadVideo')} >
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
                </Modal>
            </div>


        );
    }
}

export default ChallengesCard;