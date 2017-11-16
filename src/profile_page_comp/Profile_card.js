/**
*   User's Profile card at the top of the profile page
 */
import React, { Component } from 'react';
import { firebaseApp } from '../firebase/Firebase';

const database = firebaseApp.database();


class Profilecard extends Component {
    constructor(props) {
        super(props);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.loadInformation = this.loadInformation.bind(this);
    }

    /**
     * Check if the userId in the link is the same as the currently logged in user id
     * If TRUE: 
     *      Show the logout button and Edit Profile button
     * ELSE: 
     *      Don't display the buttons and show stats and other visitor stuff. 
     */
    componentWillMount() {
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
                window.location.replace("http://localhost:3000");
            }
        });
    }

    /**
     * Set the SRC of their picture
     */
    nameAndPicSetup(userid) {
        database.ref('/users/' + userid).on('value', function (snapshot) {
            document.getElementById('user_name').innerText = snapshot.val().username;
            document.getElementById('profile_pic').src = snapshot.val().profile_picture;
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
                                    <button type="button" className="btn btn-danger btn-4" id="follower_count">Followers</button>
                                </div>
                                <div className="col-sm-3 col-xs-4">
                                    <button type="button" className="btn btn-danger btn-4" id="following_count">Following</button>
                                </div>
                                <div className="col-sm-3 col-xs-4" style={{ marginTop: '-3px' }}>
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