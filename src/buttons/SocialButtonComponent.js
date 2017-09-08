import React, { Component } from 'react';
import { firebaseApp } from '../firebase/Firebase';
var databaseRef = firebaseApp.database();

class SocialButtonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
        });
        this.likeButton = this.likeButton.bind(this);
        this.challengeButton = this.challengeButton.bind(this);
        this.dislikeButton = this.dislikeButton.bind(this);
    }

    likeButton(uniqueKey) {
        var originalLikes, newLikeNumber;
        //User has logged in.
        if (this.props.activeUser) {
            //Get the Original Like number from Database
            databaseRef.ref('posts/' + uniqueKey).once('value').then(function(snapshot){
                originalLikes = snapshot.val().likes;
                newLikeNumber = originalLikes +1;
                //update with the new like number. 
                var updates = {};
                updates['posts/' + uniqueKey + '/likes'] = newLikeNumber;
                databaseRef.ref().update(updates);
            })
        } else {
            window.alert("Please log in to Like or Challenge");
        }
    }

    dislikeButton(uniqueKey) {

    }

    challengeButton(uniqueKey) {

    }


    render() {
        if (this.props.buttonType == "like") {
            return (
                <div>
                    <a className="supportButtons" onClick={() => this.likeButton(this.props.uniqueKey)} role="button"><i className="fa fa-thumbs-up"></i></a>
                    <p id="likeNumber">{this.props.like}</p>
                </div>
            )
        } else if (this.props.buttonType == "dislike") {
            return (
                <div>
                    <a className="supportButtons" onClick={() => this.challengeButton()} role="button"><i className="fa fa-shield"></i></a>
                    <p id="dislikeNumber">{this.props.dislikes}</p>
                </div>
            );
        } else if (this.props.buttonType == "challenge") {
            return (
                <div>
                    <a className="supportButtons" onClick={() => this.dislikeButton()} role="button"><i className="fa fa-thumbs-down"></i></a>
                    <p id="challengeNumber">{this.props.challenges}</p>
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