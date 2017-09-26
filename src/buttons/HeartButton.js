/**
 * ERRORS:  -   MAXIMUM CALL STACK SIZE EXCEEDeD
 *          -   THE COLOR CHANGE OF HEART BUTTON DOES NOT WORK EITHER.
 *          -   WHENEVER THE SECOND CHALLENGE GROUP'S BUTTONS GET CLICKED, IT CREATES A NEW undefined NODE IN THE DATABASE. 
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
            activeUserId: ""
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
        var referThis = this;
        //Check if the user is logged in and color the buttons if he/she is. 
        firebaseApp.auth().onAuthStateChanged(function (user) {
            if (user) {
                referThis.setState({
                    activeUserId: user.uid,
                    activeUser: true,
                });

                databaseRef.ref('statKeeper/' + user.uid + '/' + referThis.props.challengerKey).on('value', function (snapshot) {
                    //If the person has not liked it before or if he has liked it before. 
                    if (snapshot.val() == null || (!snapshot.val().hearted)) {
                        //If they have not liked it before OR if they have liked it before, 
                        //Color the Challenged Person's Button. 
                        var heartButton = document.getElementById('challengerHitBtn');
                        heartButton.style.backgroundColor = "white";
                        heartButton.style.color = "red";
                        heartButton.style.border = "2px solid red";
                        heartButton.style.borderRadius = "49%";

                    } else if (snapshot.val().hearted) {
                        var heartButton = document.getElementById('challengerHitBtn');
                        heartButton.style.backgroundColor = "rgb(226, 59, 59)";
                        heartButton.style.color = "white";
                        heartButton.style.border = "none";
                    }
                });
                databaseRef.ref('statKeeper/' + user.uid + '/' + referThis.props.challengedKey).on('value', function (snapshot) {
                    //If the person has not liked it before or if he has disliked it before. 
                    if (snapshot.val() == null || (!snapshot.val().hearted)) {
                        //Do nothing if they have not liked it. 
                        var heartButton = document.getElementById('challengedHitBtn');
                        heartButton.style.backgroundColor = "white";
                        heartButton.style.color = "red";
                        heartButton.style.border = "2px solid red";
                        heartButton.style.borderRadius = "49%";

                    } else if (snapshot.val().hearted) {
                        var heartButton = document.getElementById('challengedHitBtn');
                        heartButton.style.backgroundColor = "rgb(226, 59, 59)";
                        heartButton.style.color = "white";
                        heartButton.style.border = "none";
                    }
                });

            } else {
                referThis.setState({
                    activeUser: false
                })
            }
        });
    }

    heartButton() {
        var referThis = this, whoToHeart = this.props.whoToHeart;
        //If Who to heart === "challenger" then incremement the challenger's HIT number
        if (this.state.activeUser) {
            if (whoToHeart === "challenger") {
                //Check if the person has hearted it before. 
                var challengerHeartRef = databaseRef.ref('statKeeper/' + this.state.activeUserId + '/' + this.props.challengerKey);
                challengerHeartRef.on('value', function (snapshot) {
                    if (snapshot.val().hearted) {
                        //If the person has hearted it before, then unheart it. 
                        var updateNew = {};
                        updateNew['challenges/' + referThis.props.challengedKey + '/' + referThis.props.challengerUserID + '/challengerHits'] = referThis.props.challengerHits - 1;
                        updateNew['statKeeper/' + referThis.state.activeUserId + '/' + referThis.props.challengerKey + '/hearted'] = false;
                        updateNew['statKeeper/' + referThis.state.activeUserId + '/' + referThis.props.challengedKey + '/hearted'] = true;
                        databaseRef.ref().update(updateNew);
                    } else {
                        var updates = {};
                        updates['challenges/' + referThis.props.challengedKey + '/' + referThis.props.challengerUserID + '/challengerHits'] = referThis.props.challengerHits + 1;
                        updates['statKeeper/' + referThis.state.activeUserId + '/' + referThis.props.challengerKey + '/hearted'] = true;
                        updates['statKeeper/' + referThis.state.activeUserId + '/' + referThis.props.challengedKey + '/hearted'] = false;
                        databaseRef.ref().update(updates);
                    };
                });

            } else if (whoToHeart === "challenged") {
                var challengedHeartRef = databaseRef.ref('statKeeper/' + this.state.activeUserId + '/' + this.props.challengedKey);
                challengedHeartRef.on('value', function (snapshot) {
                    //If the person has liked the Challenger's vid before then unHeart it. 
                    if (snapshot.val().hearted) {
                        var updateNew = {};
                        updateNew['challenges/' + referThis.props.challengedKey + '/' + referThis.state.challengerUserID + '/challengedHits'] = referThis.props.challengedHits - 1;
                        updateNew['statKeeper/' + referThis.state.activeUserId + '/' + referThis.props.challengedKey + '/hearted'] = false;
                        updateNew['statKeeper/' + referThis.state.activeUserId + '/' + referThis.props.challengerKey + '/hearted'] = true;
                        databaseRef.ref().update(updateNew);
                    } else {
                        //Else heart it. 
                        var updates = {};
                        updates['challenges/' + referThis.props.challengedKey + '/' + referThis.state.challengerUserID + '/challengedHits'] = referThis.props.challengedHits + 1;
                        updates['statKeeper/' + referThis.state.activeUserId + '/' + referThis.props.challengedKey + '/hearted'] = true;
                        updates['statKeeper/' + referThis.state.activeUserId + '/' + referThis.props.challengerKey + '/hearted'] = false;
                        databaseRef.ref().update(updates);
                    }
                });
            }
        } else {
            //User is not Logged in to "HEART" the challenge vid so ask them to log in.
            this.showModal();
        }
    }
    render() {

        return (
            <div id="challengedHitDiv">
                <button id={this.props.idName}
                    type="button"
                    className="btn btn-danger btn-circle btn-lg"
                    onClick={() => this.heartButton()}>
                    <i className="fa fa-heart-o"></i>
                </button>
                <Modal ref="modal">
                    <hr />
                    <h2>Please log in to vote</h2>
                    <hr />
                </Modal>
            </div>
        )
    }
}


export default HeartButton;