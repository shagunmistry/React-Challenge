/**
 * --THe Profile Side Card -- Add this class Later 
 */
import React, { Component } from 'react';

class ProfileSideCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }

    componentWillMount() {

    }

    /**
    * Helper Methods to read all the Profile Information in the Database.  
    */
    setPicUrls(userID) {
        var profilePic, backgroundPic;
        databaseRef.ref('/users/' + userID).on('value', function (snapshot) {
            var profilePic = snapshot.val().profile_picture;
            document.getElementById('img_top').src = profilePic;
        });
    }

    /**
        * Fill in the about section and (the social Media links -- will add later)
    * @param {*} userid 
    */
    fillAboutSection(userid) {
        databaseRef.ref('/users/' + userid + '/about_section/').on('value', function (snapshot) {
            if (snapshot.val() == null) {
                console.log("Please fill out your Profile Information First");
                window.location.replace('https://www.beztbaba.com//Editprofile');
            }
            var aboutInput = snapshot.val().aboutInput;
            var locationField = snapshot.val().locationInp;
            document.getElementById('aboutMeParagraph').innerText = aboutInput;
            document.getElementById('userLocationField').innerText = locationField;
        });
        databaseRef.ref('/users/' + userid + '/social_media_links/').on('value', function (snapshot) {
            var facebook = snapshot.val().facebook;
            var twitter = snapshot.val().twitter;
            var linkedin = snapshot.val().linkedin;
            /* document.getElementById('facebookIcon').href = facebook;
             document.getElementById('twitterIcon').href = twitter;
             document.getElementById('linkedinIcon').href = linkedin; */
        });
    }

    render() {

        return (
            <div className="profileSidebar">
                <div className="card profileSideCard">
                    <img className="card-img-top" id="img_top" src="" alt="Profile Picture" />
                    <div className="card-block" >
                        <h4 className="card-title" id="nameTitle"></h4>
                        <p id="userLocationField"></p>
                        <div className="row">
                            <div className="col-md-6">
                                <button type="button" className="btn btn-danger btn-4"><p id="followerNumer">1234</p>Followers</button>
                            </div>
                            <div className="col-md-6">
                                <button type="button" className="btn btn-danger btn-4"><p id="challengeNumber">1234</p>Challenges</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <button id="aboutMe" type="button" className="btn btn-info btn-4" data-toggle="collapse" data-target="#aboutMeSection">About </button>                                            </div>
                            <div className="col-md-6">
                                <button id="editButton" type="button" className="btn btn-info btn-4" onClick={() => this.editProfie()}>Edit Profile </button>
                            </div>
                        </div>
                        <div className="collapse" id="aboutMeSection">
                            <p id="aboutMeParagraph">
                            </p>
                        </div>
                        <button id="logOutButton" type="button" className="btn btn-link" onClick={() => this.logOut()}>Log Out</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProfileSideCard;