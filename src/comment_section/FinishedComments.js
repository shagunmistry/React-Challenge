import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SingleFinishedBox from './SingleFinishedBox';
//Import the css 
import styles from './comment_section.css';
import { database } from 'firebase';


import { firebaseApp } from '../firebase/Firebase';
var databaseRef = firebaseApp.database();


var commentInfo = {}, commentPassArray = [];

class FinishedComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainComments: [],
            noComments: false
        }
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount() {
        /**
       * Purpose of this is to show the comments as soon as they are added. 
       */
        var referProps = this.props, referThis = this;
        var postCommentRef = databaseRef.ref('Comments/' + referProps.uniqueKey);
        //Anytime there's a new comment added, add it to the row 
        postCommentRef.on('value', function (data) {
            if (data.exists()) {
                data.forEach(function (snapshot) {
                    //console.log(snapshot.val());
                    commentInfo.commentTxt = snapshot.val().commentText;
                    commentInfo.authorId = snapshot.val().userId;
                    //Push out this info to the array
                    commentPassArray.push(commentInfo);

                    //Then clear out commentInfo just to be safe 
                    commentInfo = {};
                });

                //Set the state with the arrat
                referThis.setState({
                    mainComments: commentPassArray
                });
            } else {
                referThis.setState({
                    noComments: true
                });
            }

        });
    }

    render() {
        var mainArray = this.state.mainComments;
        //console.log(mainArray.length);
        if (this.state.noComments) {
            return (
                <div style={{textAlign: 'center'}}>There are no comments!</div>
            );
        } else{
            return (
                <div>
                    {
                        mainArray.map((data, i) => <SingleFinishedBox {...data} key={data.authorId + i + i} />)
                    }
                </div>
            );
        }

    }
}

export default FinishedComments;