
/**
 * This is the place where it will pull up all the videos from the Firebase Database and
 * it will look like the Instagram time-line. 
 */
import React, { Component } from 'react';
import Modal from 'boron/WaveModal';
//For scrolling animation

//Default firebase App 
import { firebaseApp } from '../firebase/Firebase';
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
    }

    showModal() {
        this.refs.modal.show();
    }
    hideModal() {
        this.refs.modal.hide();
    }

    componentWillMount() {
        //Get the data
        var referThis = this;

        var videosRef = dataRef.ref('posts/');
        videosRef.on('value', function (snapshot) {
            snapshot.forEach(function (data) {
                //Store each value into an name-based object. 
                userInfo.userid = data.val().userid;
                userInfo.profilePic = data.val().profilePic;
                userInfo.videoCategory = data.val().videoCategory;
                userInfo.videoDesc = data.val().videoDesc;
                userInfo.videoTitle = data.val().videoTitle;
                userInfo.videoURL = data.val().videoURL;
                userInfo.userName = data.val().userName;
                userInfo.uniqueKey = data.key;
                //Then push the object into an array.
                userArray.push(userInfo);
                //reset the userInfo object (just in case);
                userInfo = {};
                //console.log("Firebase function: " + userArray.length);
            })
            referThis.setState({
                usedArray: userArray
            })
            // console.log(referThis.state.usedArray);
        });


    }


    render() {
        function initApp() {
        }
        window.addEventListener('load', function () {
            initApp()
        });

        var usedArray = this.state.usedArray;

        return (
            <div id="bodyType">
                {
                    usedArray.map((data, i) => <SingleCardContainer {...data} key={data.uniqueKey + i + i} />)
                }
            </div>
        );

    }

}


export default CardContainer;
