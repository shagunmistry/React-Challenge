/**
 * Show the user's profile page
 * depending on whether or not the person is a user. 
 * ID and visitor tag will be passed in as props 
 * ID will either be in link or PROPS. 
 * 
 * If the userid on the this.props.match.params.userId is not the same as the currently logged in UserId,
 * then take it's a visitor. Else, show him the profile. 
 * If the CUStOMIZE prop is true then that means the user came here by clicking on Login Navigation Link -- He's the OWNER
 */
import React, { Component } from 'react';
import Profilecard from './Profile_card';
import EditProfile from '../edit_profile_comp/EditProfile';
import { firebaseApp } from '../firebase/Firebase';
import CardContainer from '../cards//CardContainer';

const database = firebaseApp.database();
var userid;

class Userprofile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visitorTag: true,
            visitorId: ""
        }
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    /**
     * Check if the userId in the link is the same as the currently logged in user id
     * If TRUE: 
     *      Show the logout button and Edit Profile button
     * ELSE: 
     *      Don't display the buttons and show stats and other visitor stuff. 
     */
    componentWillMount() {
        var referThis = this;
        firebaseApp.auth().onAuthStateChanged(function (user) {
            //If the user is logged in, see if the prop id matches that.
            if (user) {
                //check if the user exists first. If not, send him to the Edit page. 
                database.ref('users/').child(user.uid).on('value', function (snapshot) {
                    if (snapshot.val() !== null) {
                        //User exists so do nothing. 
                    } else {
                        window.location.replace('/EditProfile');
                    }
                });
                //if the userid was passed in the link. 
                if (!referThis.props.customize) {
                    //  console.log(user.uid + " " + referThis.props.match.params.userId);
                    // console.log(user.uid === referThis.props.match.params.userId);
                    if (user.uid === referThis.props.match.params.userId) {
                        //visiting own profile
                        referThis.setState({ visitorTag: false });
                    } else {
                        referThis.setState({ visitorTag: true, visitorId: user.uid });
                    }
                } else {
                    //if the user id was passed in the props
                    //If the user is visiting his own profile
                    //   console.log("No Customization: " + user.uid + " " + referThis.props.uid);
                    //  console.log("No Customization : " + user.uid === referThis.props.uid);
                    if (user.uid === referThis.props.uid) {
                        //visiting own profile
                        referThis.setState({ visitorTag: false });
                    } else {
                        referThis.setState({ visitorTag: true, visitorId: user.uid });
                    }
                }
            } else {
                //there is no user logged in so visitor tag is automatically true. 
                referThis.setState({
                    visitorTag: true, visitorId: ""
                });
            }
        });
    }

    render() {
        if (this.props.customize) {
            //User is the owner 
            userid = this.props.uid;
        } else {
            //User is likely a visitor
            userid = this.props.match.params.userId;
        }

        return (
            //user has signed in before, so send them to their pag.e 
            <div>
                <Profilecard userId={userid} visitorTag={this.state.visitorTag} visitorId={this.state.visitorId} />
                <CardContainer userId={userid} customize={true} visitorTag={this.state.visitorTag} />
            </div>
        );
    }
}

export default Userprofile;