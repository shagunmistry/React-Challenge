/**
 * Show the user's profile page
 * depending on whether or not the person is a user. 
 * ID and visitor tag will be passed in as props
 * 
 * If the userid on the this.props.match.params.userId is not the same as the currently logged in UserId,
 * then take it's a visitor. Else, show him the profile. 
 */
import React, { Component } from 'react';
import Profilecard from './Profile_card';
import { firebaseApp } from '../firebase/Firebase';
import CardContainer from '../cards//CardContainer';

const database = firebaseApp.database();


class Userprofile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visitorTag: false
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
                if (user.uid === referThis.props.match.params.userId) {
                    //visiting own profile
                    referThis.setState({ visitorTag: true });
                } else {
                    referThis.setState({ visitorTag: false });
                }
            }
        });
    }

    render() {
        const params = this.props.params;
        return (
            <div>
                <Profilecard userId={this.props.match.params.userId}/>
                <CardContainer userId={this.props.match.params.userId} customize={true}/>
            </div>
        );
    }
}

export default Userprofile;