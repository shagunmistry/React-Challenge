/**
 * Comment Section, which goes under each Single Video Container Card's Footer
 * 
 * PROPS: activeUser: whether or not the user is currently logged in
 *        newComment: Whether or not the box is a new comment box or displaying the finished comments
 *        finishedComment: Whether or not the box is a finished comment <-- not using this right now
 *        activeUserID: active user's ID  
 *        uniqueKey: uniqueKey of the video URL
 *        vidOwnUserId: the video owner's userID
 * 
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase/Firebase';
import FinishedComments from './FinishedComments';
//Import the css 
import styles from './comment_section.css';
import { database } from 'firebase';

/** Get the modal to show alerts of log in  */
var Modal = require('boron/DropModal');
var modalStyle = {
    width: 'auto',
}

var databaseRef = firebaseApp.database();

class CommentBox extends Component {
    constructor(props) {
        super(props);
       
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.submitComment = this.submitComment.bind(this);
    }

    /**
      * Show Modal
      */
    showModal() {
        this.refs.modal.show();
    }

    /**
     * Hide Modal
     */
    hideModal() {
        this.refs.modal.hide();
    }

    /**
     * Submit the comment to the database
     */
    submitComment() {
        var referProps = this.props, referThis = this;
        /**
         * Database Structure: /Comments/videoId/comment_key/
         *        { userId, commentText } <-- Add more later 
         */
        var actUserID = referProps.activeUserID,
            vidUniqueKey = referProps.uniqueKey, ownerUserId = referProps.vidOwnUserId,
            commentText = document.getElementById('comment_text').value;

        //If the comment box is empty, do nothing
        if (commentText === "") {
            console.log("Comment Box is empty");
        } else {
            //As long as the user is logged in
            if (this.props.activeUser) {
                var updates = {};
                //Push a new comment into the database under Comments/
                var newCommentNode = databaseRef.ref('Comments/' + vidUniqueKey).push();
                //get the Comment Node Key 
                var nodeKey = newCommentNode.key;
                var newCommentInfo = {
                    userId: actUserID,
                    commentText: commentText
                };
                //Then create an update
                updates['Comments/' + vidUniqueKey + '/' + nodeKey] = newCommentInfo;
                //Push out the update now. 
                databaseRef.ref().update(updates).then(function (success) {
                    //After submission, show the comment on the page. 
                    document.getElementById('comment_text').value = "";
                });
            }
        }
    }



    render() {
        return (
            <div>
                <img style={{ display: this.props.activeUser ? '' : 'none', }} src="https://firebasestorage.googleapis.com/v0/b/challengemetest-ea2e0.appspot.com/o/users%2FbEcyh6hrlGXbTq8ZE27BxFgvHXX2%2Fimages%2FSelf_pic.PNG?alt=media&token=ff1c0b02-6ebe-4887-83f3-cff884311c55" alt="comment_user" id="comment_user_pic" />
                <input
                    type="text" className="comment_text_class" id="comment_text"
                    placeholder={this.props.activeUser ? "What do you think?..." : 'Please log in to comment...'}
                    onClick={this.props.activeUser ? '' : () => this.showModal()}
                />
                <button className="btn btn-danger btn-circle" id="submit_comment_button" onClick={this.props.activeUser ? () => this.submitComment() : () => this.showModal()}><i className="fa fa-check"></i></button>
                <Modal ref="modal" modalStyle={{ width: 'auto' }}>
                    <div className="card">
                        <h3 className="card-header">Please log in to comment</h3>
                        <a className="card-text" style={{ color: 'blue', textAlign: 'center' }} href="/ProfileCheck"><h4>Login Here</h4></a>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default CommentBox;
