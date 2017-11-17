/**
 * Show the user's profile page
 * depending on whether or not the person is a user. 
 * ID and visitor tag will be passed in as props 
 * ID will either be in link or PROPS. 
 * 
 * If the userid on the this.props.match.params.userId is not the same as the currently logged in UserId,
 * then take it's a visitor. Else, show him the profile. 
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
            visitorTag: true
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
                        window.location.replace('http://localhost:3000/EditProfile');
                    }
                });
                //if the userid was passed in the link. 
                if (!referThis.props.customize) {
                    if (user.uid === referThis.props.match.params.userId) {
                        //visiting own profile
                        referThis.setState({ visitorTag: true });
                    } else {
                        referThis.setState({ visitorTag: false });
                    }
                } else {
                    //if the user id was passed in the props
                    if (user.uid === referThis.props.uid) {
                        //visiting own profile
                        referThis.setState({ visitorTag: true });
                    } else {
                        referThis.setState({ visitorTag: false });
                    }
                }
            } else{
                //there is no user logged in so visitor tag is automatically true. 
                referThis.setState({
                    visitorTag:true
                });
            }
        });
    }

    render() {
        if (this.props.customize) {
            userid = this.props.uid;
        } else {
            userid = this.props.match.params.userId;
        }

        return (
            //user has signed in before, so send them to their pag.e 
            <div>
                <Profilecard userId={userid} visitorTag={this.state.visitorTag}/>
                <CardContainer userId={userid} customize={true} visitorTag={this.state.visitorTag} />
            </div>
        );
    }
}

export default Userprofile;