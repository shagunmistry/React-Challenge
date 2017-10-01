/**
 * PROPS:
 * idName = challengedUniqueKey+ChallengerUniqueKey (the order depends on who the button is for);
 * challengedUniqueKey,
 * decider: "1" (challenged) or "2" (challenger)
 * 
 */
import React, { Component } from 'react';
import Modal from 'boron/WaveModal';

import { firebaseApp } from '../firebase/Firebase';
var databaseRef = firebaseApp.database();


class HeartButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUser: false,
            activeUserId: "",
            challengedHits: 0,
            challengerHits: 0,
            challengerHearted: false,
            challengedHearted: false
        }

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.heartButton = this.heartButton.bind(this);
    }

    showModal() {
        this.refs.modal.show();
    }
    hideModal() {
        this.refs.modal.hide();
    }

    componentWillMount() {
        var referThis = this,
            challengedUniqueKey = referThis.props.challengedUniqueKey,
            challengeruserid = referThis.props.challengeruserid,
            challengerUniqueKey = referThis.props.challengerUniqueKey;

        //Check if the user is logged in and color the buttons if he/she is. 
        firebaseApp.auth().onAuthStateChanged(function (user) {
            if (user) {
                referThis.setState({
                    activeUserId: user.uid,
                    activeUser: true,
                });

                //Look up the current HIT numbers and set them as stats
                databaseRef.ref('challenges/' + challengedUniqueKey + '/' + challengeruserid).on('value', function (snapshot) {
                    referThis.setState({
                        challengerHits: snapshot.val().challengerHits,
                        challengedHits: snapshot.val().challengedHits
                    });
                });

                //Change the colors of the button to black depending on whether or not they have liked it. 
                //Database set up -- ActiveUserID -- videoKey

                //CHALLENGED
                databaseRef.ref('statKeeper/' + referThis.state.activeUserId + '/' + challengedUniqueKey).on('value', function (snapshot) {
                    var hitButton = document.getElementById(challengedUniqueKey + challengeruserid);
                    console.log(snapshot.val().hearted);
                    if (!snapshot.exists() || !snapshot.val().hearted) {
                        //Do nothing since the person has not hearted it before 
                        hitButton.style.border = "transparent";
                        referThis.setState({
                            challengedHearted: false
                        });

                    } else if (snapshot.val().hearted) {
                        hitButton.style.backgroundColor = "transparent";
                        hitButton.style.color = "red";
                        hitButton.style.border = "1px solid white";
                        hitButton.style.borderRadius = "35%";
                        referThis.setState({
                            challengedHearted: true
                        });
                    }
                });
                //CHALLENGER
                databaseRef.ref('statKeeper/' + referThis.state.activeUserId + '/' + challengerUniqueKey).on('value', function (snapshot) {
                    var hitButton = document.getElementById(challengeruserid + challengedUniqueKey);
                    if (!snapshot.exists() || !snapshot.val().hearted) {
                        //Do nothing since the person has not hearted it before 
                        hitButton.style.border = "transparent";
                        referThis.setState({
                            challengerHearted: false
                        });

                    } else if (snapshot.val().hearted) {
                        hitButton.style.backgroundColor = "transparent";
                        hitButton.style.color = "red";
                        hitButton.style.border = "1px solid white";
                        hitButton.style.borderRadius = "35%";
                        referThis.setState({
                            challengerHearted: true
                        });
                    }
                });


            } else {
                referThis.setState({
                    activeUser: false
                })
            }
        });
    }

    /**
     * Method: 
     * - Once they click the heart button, increment/decrement the counter based on whether or not they have hearted it before, 
     * - Also, if 
     */
    heartButton() {
        var referThis = this,
            challengedUniqueKey = referThis.props.challengedUniqueKey,
            challengeruserid = referThis.props.challengeruserid,
            challengerUniqueKey = referThis.props.challengerUniqueKey;;

        //Check if the user is logged in first
        if (this.state.activeUser) {

            /****************CHALLENGED*******************/
            if (this.props.decider == "1") {
                //CHALLENGED
                var challengedUpdates = {};
                /**
                 * 1. Check if the user has hearted it before. If so, decrement it and set the value of "hearted" to false
                 * 2. If the user has not HEARTED it before, increment it and set the value of "hearted" true. 
                 */

                if (this.state.challengedHearted) {

                    //They have HEARTED it before, 
                    challengedUpdates['challenges/' + challengedUniqueKey + '/' + challengeruserid + '/challengedHits'] = this.state.challengedHits - 1;
                    challengedUpdates['statKeeper/' + this.state.activeUserId + '/' + challengedUniqueKey + '/hearted'] = false;
                    //Set the state to the new challengedHearted
                    referThis.setState({
                        challengedHearted: false,
                    });

                    //Push out the update 
                    databaseRef.ref().update(challengedUpdates);
                } else if (!this.state.challengedHearted) {

                    //They have not HEARTED it before, 
                    challengedUpdates['challenges/' + challengedUniqueKey + '/' + challengeruserid + '/challengedHits'] = this.state.challengedHits + 1;
                    challengedUpdates['statKeeper/' + this.state.activeUserId + '/' + challengedUniqueKey + '/hearted'] = true;
                    //Set the Challenger's status to false so that if they have HEARTED that one before, it dis-hearts it 
                    challengedUpdates['statKeeper/' + this.state.activeUserId + '/' + challengerUniqueKey + '/hearted'] = false;
                    //Set the state to the new challengedHearted
                    referThis.setState({
                        challengedHearted: true,
                    });
                    databaseRef.ref().update(challengedUpdates);
                }
            }
            /****************CHALLENGER*******************/
            else if (this.props.decider == "2") {
                //CHALLENGER
                var challengerUpdates = {};

                if (this.state.challengerHearted) {

                    //They have HEARTED it before, 
                    challengerUpdates['challenges/' + challengedUniqueKey + '/' + challengeruserid + '/challengerHits'] = this.state.challengerHits - 1;
                    challengerUpdates['statKeeper/' + this.state.activeUserId + '/' + challengerUniqueKey + '/hearted'] = false;
                    //Set the state to the new challengerHearted
                    referThis.setState({
                        challengerHearted: false,
                    });

                    //Push out the update 
                    databaseRef.ref().update(challengerUpdates);
                } else if (!this.state.challengerHearted) {

                    //They have not HEARTED it before, 
                    challengerUpdates['challenges/' + challengedUniqueKey + '/' + challengeruserid + '/challengerHits'] = this.state.challengerHits + 1;
                    challengerUpdates['statKeeper/' + this.state.activeUserId + '/' + challengerUniqueKey + '/hearted'] = true;
                    //Set the Challenger's status to false so that if they have HEARTED that one before, it dis-hearts it 
                    challengerUpdates['statKeeper/' + this.state.activeUserId + '/' + challengedUniqueKey + '/hearted'] = false;
                    //Set the state to the new challengerHearted
                    referThis.setState({
                        challengerHearted: true,
                    });
                    databaseRef.ref().update(challengerUpdates);
                }
            }

        } else {
            //User is not Logged in to "HEART" the challenge vid so ask them to log in.
            this.showModal();
        }
    }
    render() {

        if (this.props.decider == "1") {
            //Challenged
            return (
                <div id="challengedHitDiv">
                    <button id={this.props.idName}
                        type="button"
                        className="btn btn-lg heartButton"
                        onClick={() => this.heartButton()}>
                        <i className="fa fa-bolt"></i>
                    </button>
                    <p className="hitNumber">{this.state.challengedHits}</p>
                    <Modal ref="modal">
                        <hr />
                        <h2>Please log in to vote</h2>
                        <hr />
                    </Modal>
                </div>
            )
        } else if (this.props.decider == "2") {
            //Challenger

            return (
                <div id="challengedHitDiv">
                    <button id={this.props.idName}
                        type="button"
                        className="btn btn-lg heartButton"
                        onClick={() => this.heartButton()}>
                        <i className="fa fa-bolt"></i>
                    </button>
                    <p className="hitNumber">{this.state.challengerHits}</p>
                    <Modal ref="modal">
                        <hr />
                        <h2>Please log in to vote</h2>
                        <hr />
                    </Modal>
                </div>
            )
        }
    }
}


export default HeartButton;