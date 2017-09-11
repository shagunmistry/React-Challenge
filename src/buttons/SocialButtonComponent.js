import React, { Component } from 'react';
import { firebaseApp } from '../firebase/Firebase';
var databaseRef = firebaseApp.database();

class SocialButtonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            likes: 0,
            dislikes: 0,
            challenges: 0
        });
        this.likeButton = this.likeButton.bind(this);
        this.challengeButton = this.challengeButton.bind(this);
        this.dislikeButton = this.dislikeButton.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    /**
     * 
     */
    componentWillMount() {
        var key = this.props.uniqueKey, referThis = this;

        //Go to the database under STATS/ and use the key to get all the information. 
        var statRef = databaseRef.ref('stats/' + key);
        statRef.once('value').then(function (snapshot) {
            var dataLikes = snapshot.val().likes;
            var dataDislikes = snapshot.val().dislikes;
            var dataChallenges = snapshot.val().challenges;
            referThis.setState({
                likes: dataLikes,
                dislikes: dataDislikes,
                challenges: dataChallenges
            });
        });
    }

    likeButton(uniqueKey) {
        var originalLikes, newLikeNumber, referThis = this;
        //User has logged in.
        if (this.props.activeUser) {

            //Get the Original Like number from Database and update it depending on their like status. 
            databaseRef.ref('stats/' + uniqueKey).once('value').then(function (snapshot) {
                originalLikes = snapshot.val().likes;

                //Check if the user has liked it before. 
                var checkStatRef = databaseRef.ref('statKeeper/' + referThis.props.userid + '/' + uniqueKey);
                checkStatRef.once('value').then(function (snapshot) {
                    //if this returns null then, create a new one. 
                    if ((snapshot.val()) == null) {
                        checkStatRef.set({
                            like: true,
                            dislike: false,
                        });
                        newLikeNumber = originalLikes + 1;
                    } else if (snapshot.val().like) {
                        //if the user has liked it before, unlike it. 
                        newLikeNumber = originalLikes - 1;
                        //update the database with the like status.
                        var updates = {};
                        updates['statKeeper/' + referThis.props.userid + '/' + uniqueKey + '/like'] = false;
                        databaseRef.ref().update(updates);
                    } else if (!(snapshot.val().like)) {
                        //If the user has not liked it before then like it. 
                        newLikeNumber = originalLikes + 1;
                        //Update the new like status 
                        var updates = {};
                        updates['statKeeper/' + referThis.props.userid + '/' + uniqueKey + '/like'] = true;
                        updates['statKeeper/' + referThis.props.userid + '/' + uniqueKey + '/like'] = false;
                        databaseRef.ref().update(updates);
                    }
                });

                //update with the new like number (wait 3 seconds before updating so that the prev firebase function can complete)
                setTimeout(function () {
                    var updates = {};
                    updates['stats/' + uniqueKey + '/likes'] = newLikeNumber;
                    databaseRef.ref().update(updates);
                    //Update the state with the new like number; 
                    referThis.setState({
                        likes: newLikeNumber
                    });
                }, 3000);

            });
        } else {
            //If the User has not logged in, then alert them and let them know. 
            window.alert("Please log in to Like or Challenge");
        }
    }

    dislikeButton(uniqueKey) {
        var originalDislikes, newDislikeNumber, referThis = this;
        //User has logged in.
        if (this.props.activeUser) {

            //Get the Original Dislike number from Database and update it depending on their Dislike status. 
            databaseRef.ref('stats/' + uniqueKey).once('value').then(function (snapshot) {
                originalDislikes = snapshot.val().dislikes;

                //Check if the user has liked it before. 
                var checkStatRef = databaseRef.ref('statKeeper/' + referThis.props.userid + '/' + uniqueKey);
                checkStatRef.once('value').then(function (snapshot) {
                    //if this returns null then, create a new one. 
                    if ((snapshot.val()) == null) {
                        checkStatRef.set({
                            like: false,
                            dislike: true,
                        });
                        newDislikeNumber = originalDislikes + 1;
                    } else if (snapshot.val().dislike) {
                        //if the user has disliked it before, un-dislike it. 
                        newDislikeNumber = originalDislikes - 1;
                        //update the database with the Dislike status.
                        var updates = {};
                        updates['statKeeper/' + referThis.props.userid + '/' + uniqueKey + '/dislike'] = false;
                        databaseRef.ref().update(updates);
                    } else if (!(snapshot.val().like)) {
                        //If the user has not disliked it before then dislike it. 
                        newDislikeNumber = originalDislikes + 1;
                        //Update the new like status 
                        var updates = {};
                        updates['statKeeper/' + referThis.props.userid + '/' + uniqueKey + '/like'] = false;
                        updates['statKeeper/' + referThis.props.userid + '/' + uniqueKey + '/dislike'] = true;
                        databaseRef.ref().update(updates);
                    }
                });

                //update with the new like number (wait 3 seconds before updating so that the prev firebase function can complete)
                setTimeout(function () {
                    var updates = {};
                    updates['stats/' + uniqueKey + '/dislikes'] = newDislikeNumber;
                    databaseRef.ref().update(updates);
                    //Update the state with the new like number; 
                    referThis.setState({
                        dislikes: newDislikeNumber
                    });
                }, 3000);

            });
        } else {
            //If the User has not logged in, then alert them and let them know. 
            window.alert("Please log in to Like or Challenge");
        }

    }

    challengeButton(uniqueKey) {

    }


    render() {
        if (this.props.buttonType == "like") {
            return (
                <div>
                    <a className="supportButtons" onClick={() => this.likeButton(this.props.uniqueKey)} role="button"><i className="fa fa-thumbs-up"></i></a>
                    <p id="likeNumber">{this.state.likes}</p>
                </div>
            )
        } else if (this.props.buttonType == "challenge") {
            return (
                <div>
                    <a className="supportButtons" onClick={() => this.challengeButton(this.props.uniqueKey)} role="button"><i className="fa fa-shield"></i></a>
                    <p id="challengeNumber">{this.state.challenges}</p>
                </div>
            );
        } else if (this.props.buttonType == "dislike") {
            return (
                <div>
                    <a className="supportButtons" onClick={() => this.dislikeButton(this.props.uniqueKey)} role="button"><i className="fa fa-thumbs-down"></i></a>
                    <p id="dislikeNumber">{this.state.dislikes}</p>
                </div>
            );
        }
        return (
            <div>
            </div>
        );
    }
}

export default SocialButtonComponent;