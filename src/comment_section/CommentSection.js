/**
 * Comment Section, which goes under each Single Video Container Card's Footer
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CommentBox from './CommentBox';
import FinishedComments from './FinishedComments';
//Import the css 
import styles from './comment_section.css';



import { firebaseApp } from '../firebase/Firebase';
var databaseRef = firebaseApp.database();
class CommentSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card-footer" id="comment_section">
                <ul className="list-group" id="comment_group">
                    <li className="list-group-item" id="comment_list_group_item">
                        <CommentBox
                            activeUser={this.props.activeUser} newComment={true} finishedComment="yes"
                            activeUserID={this.props.activeUserID}
                            uniqueKey={this.props.uniqueKey} vidOwnerUserId={this.props.userid}
                        />
                    </li>
                    <li className="list-group-item" id="comment_list_group_item">
                        <FinishedComments
                            activeUser={this.props.activeUser}
                            activeUserID={this.props.activeUserID}
                            uniqueKey={this.props.uniqueKey} vidOwnerUserId={this.props.userid}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

export default CommentSection;
