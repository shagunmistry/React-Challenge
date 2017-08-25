
/**
 * This is the place where it will pull up all the videos from the Firebase Database and
 * it will look like the Instagram time-line. 
 */
import React, { Component } from 'react';
import {
    Player, ControlBar,
    ForwardControl, CurrentTimeDisplay,
    TimeDivider, VolumeMenuButton, BigPlayButton
} from 'video-react';
import Modal from 'boron/WaveModal';

//Default firebase App 
import * as firebase from 'firebase';
import { firebaseApp } from '../firebase/firebase';
import SingleCardContainer from '../cards/SingleCardContainer';

var dataRef = firebaseApp.database();
var dataArray = [];

class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: "",
            videoLink: "",
            likes: "",
            challenges: "",
            videoCat: "",
            videoDesc: "",
            videoTitle: "",
            profilePic: "",
            disikes: ""
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
        /******************************LOAD THE VIDEOS*****************************/
        //var dataValues = [];
        var videosRef = dataRef.ref('posts/');
        videosRef.on('value', function (snapshot) {
            snapshot.forEach(function (data) {
                //9 items for 1 user. 
                dataArray.push(data.val().userid); //0
                dataArray.push(data.val().likes); //1
                dataArray.push(data.val().dislikes); //2
                dataArray.push(data.val().challenges); //3
                dataArray.push(data.val().profilePic); //4
                dataArray.push(data.val().videoCategory); //5
                dataArray.push(data.val().videoDesc); //6
                dataArray.push(data.val().videoTitle); //7
                dataArray.push(data.val().videoURL); //8
                                
                //empty out the array at the end of this so you can start over and it doesn't bog down the system. 
            })
        });
    }


    render() {

        //get all the data from Database and place it in an array. 
        //iterate through the array for every user (8 values) and setState. 
        //After you set state, pass down the state values as props to SingleCardContainer. 
        //Listen for clicks on the buttons and if they occur, get the userID of the post and update in the database. 
        function initApp() {



        }


        /**
         * This loads when the page loads (right before renders)
         */
        window.addEventListener('load', function () {
            //The load function is running twice. 
            // window.alert("This is a test");
            initApp()
        });

        return (
            <div id="bodyType">
                <SingleCardContainer userid="Shagun Mistry" title="Animals In the House" likes="1234" dislikes="123" challenges="345" 
                 videoURL="https://firebasestorage.googleapis.com/v0/b/challengemetest-ea2e0.appspot.com/o/users%2FbEcyh6hrlGXbTq8ZE27BxFgvHXX2%2Fuploaded_videos%2FJacks_AQOtK?alt=media&token=fa77a283-1174-4881-9119-b3548db6b35c"/>
            </div>
        )

    }

}


export default CardContainer;