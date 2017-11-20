/**
*   User's Profile card at the top of the profile page
    PROPS: userId, visitorTag, visitorId <-- will be empty if the user is not logged in. 
 */
import React, { Component } from 'react';
import { firebaseApp } from '../firebase/Firebase';

var Modal = require('boron/FlyModal');
var modalStyle = {
    width: 'auto',
}

const database = firebaseApp.database();


class Profilecard extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.loadInformation = this.loadInformation.bind(this);
        this.followUser = this.followUser.bind(this);
    }


    /**
     * Check if the userId in the link is the same as the currently logged in user id
     * If TRUE: 
     *      Show the logout button and Edit Profile button
     * ELSE: 
     *      Don't display the buttons and show stats and other visitor stuff. 
     */
    componentDidMount() {
        console.log("Profile_Card " + this.props.visitorTag);
        //if the user is a visitor to this profile, then hide the Logout button and Edit Profile button
        if (this.props.visitorTag) {
            // document.getElementById('profile_dropdow').style.display = 'none';
        }
        //Load the information
        this.loadInformation();
    }




    /**
     * Load the user's information
     */
    loadInformation() {
        //Check if the user exists first
        var userExists = false, referThis = this;
        var userId = referThis.props.userId;
        database.ref('users/').child(userId).on('value', function (snapshot) {
            if (snapshot.val() !== null) {
                userExists = true;
            }

            //If the user exits, then the refill the sections, if not ask to fill it in. 
            if (userExists) {

                //Set the Profile Pic and Background Pics from the URLs in the Firebase Dtabase
                referThis.nameAndPicSetup(userId);

                /**
                * Fill in the About section.
                */
                referThis.fillAboutSection(userId);
            } else {
                window.alert("This user does not Exist");
                window.location.replace("https://www.beztbaba.com/");
            }
        });
    }

    /**
     * Set the SRC of their picture
     */
    nameAndPicSetup(userid) {
        var userElement = document.getElementById('user_name');
        var profilePicElement = document.getElementById('profile_pic');
        database.ref('/users/' + userid).on('value', function (snapshot) {
            if (snapshot.val().userName === null || snapshot.val().profile_picture === null) {
                //Getting null for the informtion so send them to edit profile
                window.alert("Please fill out your profile.");
                window.location.replace('/EditProfile');
            } else {
                userElement.innerText = snapshot.val().username;
                profilePicElement.src = snapshot.val().profile_picture;
            }

        });
    }
    /**
     * Fill in the about Section --> Name, Speciality, Follower Count, Challenge Count
     */
    fillAboutSection(userid) {
        database.ref('/users/' + userid + '/about_section/').on('value', function (snapshot) {
            if (snapshot.val() == null) {
                window.alert("Error getting profile information");
            }
            var aboutInput = snapshot.val().aboutInput;
            var locationField = snapshot.val().locationInp;
            document.getElementById('about_section').innerText = aboutInput;
            document.getElementById('user_location').innerText = locationField;
        });
    }

    /**
     * Follow / Unfollow Button
     * LOGIC: 
     *  - Check if the clicker is a visitor or a owner
     *  - If visitor --> make sure he's logged in. (If not, send him to log in screen);
     *                   Check database to see if he/she already follows the owner 
     *                   If (already follows) --> unfollow and set his id tag to false under owner's Follow node. 
     *                   If (new Follow) --> Set his user id to true under Owner's Follow Node.
     *  - If Owner -->   Go through the list of keys under his name under Follow node and display the users that follow him. 
     * --Create an algorithm later that listens to those values and sends out emails/notifications based on new follow/unfollow.                
     */
    followUser() {
        var referThis = this, visitorId = this.props.visitorId, userId = this.props.userId, updates = {};

        //Check if visitor
        if (this.props.visitorTag) {
            //He's a visitor so get his visitorId - If he's not logged in, that will be blank
            if (visitorId === "") {
                //He's not logged in so ask him to log in
                window.alert("Please log in to Follow");
            } else {
                //He's logged in, so check if the user already follows the owner. 
                var followRef = database.ref('Follow_Challenge_Stats/' + userId);
                followRef.once('value', function (snapshot) {
                    if (!snapshot.exists()) {
                        //if the snapshot does not exist
                        console.log("The user does not have a followers Node");
                        //Create a node for this user and insert the info of person who wants to follow this user. 
                        updates['Follow_Challenge_Stats/' + userId + '/' + visitorId + '/follow'] = true;
                        database.ref().update(updates).then(function (success) {
                            //Push out update success and change the color 
                            document.getElementById('follower_count').style.backgroundColor = 'white';
                            document.getElementById('follower_count').style.color = 'black';
                        });
                        //Later create an algorithm that sends out emails and automatically updates the counts. 

                    } else {
                        //if the snapshot does exist, see if the person already follows the owner
                        if (snapshot.child(visitorId + '/follow').val()) {
                            //The person already follows this person so set this to false. 
                            updates['Follow_Challenge_Stats/' + userId + '/' + visitorId + '/follow'] = false;
                            database.ref().update(updates).then(function (success) {
                                console.log(snapshot.child(visitorId + '/follow').val());
                            });
                        } else {
                            //The person does not follow this person so follow him. 
                            updates['Follow_Challenge_Stats/' + userId + '/' + visitorId + '/follow'] = true;
                            database.ref().update(updates).then(function (success) {
                                console.log("Follow this person: " + snapshot.child(visitorId + '/follow').val());
                                document.getElementById('follower_count').style.backgroundColor = 'white';
                                document.getElementById('follower_count').style.color = 'black';
                            });
                        }

                    }
                });
            }

        } else {
            //The person is looking at his own profile so show him a list of his followers
            console.log("This person is looking at his own profile");
            //go to the database and get a list of the nodes that have "Follow: true"
            window.location.replace('/Followers');

        }
    }


    render() {
        return (
            <div className="card" id="profile_card">
                <div className="row">
                    <div className="col-sm-3 col-md-2">
                        <img id="profile_pic" src=""
                            alt="this is profile" />
                    </div>
                    <div className="col-sm-10 col-md-9 info_section">
                        <div className="row" id="test_row">
                            <div className="col-sm-6">
                                <h3 id="user_name">______________</h3>
                                <h6 id="user_location">__________</h6>
                            </div>

                        </div>
                        <div className="row" id="test_row">
                            <div className="col-sm-3 col-xs-4">
                                <button type="button" className="btn btn-danger btn-4" id="follower_count" title="Followers"
                                    onClick={() => this.followUser()}
                                ><i className="fa fa-users"></i> | 1239</button>
                            </div>
                            <div className="col-sm-3 col-xs-4">
                                <button type="button" className="btn btn-danger btn-4" id="challenges_count" title="Challenges"><i className="fa fa-shield"></i> | 1231</button>
                            </div>
                            <div className="col-sm-3 col-xs-4" style={{ marginTop: '-2px' }}>
                                <button id="aboutMe" type="button" className="btn btn-success btn-4" data-toggle="collapse" data-target="#about_section">About </button>
                            </div>
                        </div>
                        <div className="row" id="test_row">
                            <div className="col-sm-12 collapse" id="about_section">About Section</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profilecard;
