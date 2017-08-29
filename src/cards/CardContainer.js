
/**
 * This is the place where it will pull up all the videos from the Firebase Database and
 * it will look like the Instagram time-line. 
 */
import React, { Component } from 'react';
import Modal from 'boron/WaveModal';

//Default firebase App 
import * as firebase from 'firebase';
import { firebaseApp } from '../firebase/firebase';
import SingleCardContainer from '../cards/SingleCardContainer';

var dataRef = firebaseApp.database();
var dataArray = []; var userInfo = {};
var userArray = [];
var done = false;

class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usedArray: []
        }

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    showModal() {
        this.refs.modal.show();
    }
    hideModal() {
        this.refs.modal.hide();
    }

    componentWillMount() {

        //Get the data
        var videosRef = dataRef.ref('posts/');
        videosRef.on('value', function (snapshot) {
            
            snapshot.forEach(function (data) {
                //Store each value into an name-based object. 
                userInfo.userid = data.val().userid;
                userInfo.likes = data.val().likes;
                userInfo.dislikes = data.val().dislikes;
                userInfo.challenges = data.val().challenges;
                userInfo.profilePic = data.val().profilePic;
                userInfo.videoCategory = data.val().videoCategory;
                userInfo.videoDesc = data.val().videoDesc;
                userInfo.videoTitle = data.val().videoTitle;
                userInfo.videoURL = data.val().videoURL;
                //console.log(userInfo);
                //Then push the object into an array.
                userArray.push(userInfo);
                //reset the userInfo object (just in case);
                userInfo = {};
                console.log("Firebase function: " + userArray.length);
            })
        });
        console.log("Component Will Mount: " + userArray.length);        
        setTimeout(this.setState({
            usedArray: userArray
        }), 5000);
        
    }

    componentDidMount() {
        console.log("Component Did Mount: " + userArray.length);
    }

    render() {
        function initApp() {

        }
        window.addEventListener('load', function () {
            initApp()
        });

        const { usedArray } = this.state;
        return (
            <div id="bodyType">
                {usedArray.map(data => <SingleCardContainer {...data} />)}
            </div>
        );

    }

}


export default CardContainer;