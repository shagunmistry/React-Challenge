import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Import the css 
import styles from './comment_section.css';
import { database } from 'firebase';


import { firebaseApp } from '../firebase/Firebase';
var databaseRef = firebaseApp.database(), userName, profile_picture_src;



class SingleFinishedBox extends Component {
    constructor(props) {
        super(props);
        this.state={
            userName: "",
            profile_picture_src: ""
        }

        this.componentWillMount = this.componentWillMount.bind(this);
    }

    /**
     * Look up the Author's picture
     */
    componentWillMount() {
        var referThis = this;
        databaseRef.ref('users/' + referThis.props.authorId).once('value', function (snapshot) {
           referThis.setState({
               profile_picture_src: snapshot.val().profile_picture,
               userName: snapshot.val().username
           });
        });
    }



    render() {
        const { authorId, commentTxt } = this.props;
        return (
            <div style={{ borderBottom: '1px solid black'}} >
                <div className="row">
                    <div className="col-sm-2" id="finished_profile_pic_div">
                        <Link to={`/users/${authorId}`} ><img src={this.state.profile_picture_src} alt={this.state.userName} id="comment_user_pic" /></Link>
                    </div>
                    <div className="col-sm-10" id="finished_comment_div">
                        <p className="finished_comment_class">{commentTxt}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleFinishedBox;