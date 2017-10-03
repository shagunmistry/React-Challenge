/**
 * Leads to the Profile Page where the user can see profiles (their own if logged in)
 * ----Add the feature where they can go to other people's page 
 */
import React, { Component } from 'react';
import Loginuser from './Loginuser';
import Profilepage from './Profilepage';
var firebase = require('firebase');

class ProfileCheck extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount() {
        var referThis = this;
        //Check if the user has already logged in, if so lead to their profile page. if not, lead to the Login Page. 
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                //when the user has signed in, go to this page. 
                referThis.setState({
                    loggedIn: true
                });
            } else {
                referThis.setState({
                    loggedIn: false
                });
            }
        }, function (error) {
            console.log(error.message);
        });
    }

    render() {

        if (this.state.loggedIn) {
            return (
                <Profilepage />
            );
        } else {
            return (
                <Loginuser />
            );
        }
    }
}
export default ProfileCheck;