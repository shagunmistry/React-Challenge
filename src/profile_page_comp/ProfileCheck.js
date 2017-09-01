/**
 * Leads to the Profile Page where the user can see profiles (their own if logged in)
 */
import React, { Component } from 'react';
import Loginuser from './Loginuser';
import ProfilePage from './Profilepage';
import { firebaseApp } from '../firebase/Firebase';

var firebaseui = require('firebaseui');

class ProfileCheck extends Component {

    constructor(props) {
        super(props);
        //loginStatus of false means user is not logged in.
        this.state = ({
            loginStatus: false,
            userid: ""
        });
        this.componentWillMount = this.componentWillMount.bind(this);        
    }

    //Check if the user is logged in
    componentWillMount(){
        
        var referThis = this;
        firebaseApp.auth().onAuthStateChanged(function (user) {
            //If the user is logged in, continue. 
            if (user) {
                //user signed in  
                referThis.setState({
                    userid: user.uid
                })
                window.location.replace('http://localhost:3000/Profilepage/'+user.uid);
            } else {
                //User has not logged in. 
            }
        }, function (error) {
           //Error logging use in. --Show error on screen. 
           window.alert("Error Loggin In, please try again later");
           window.location.reload();
        });
    }

    render() {

        if (this.state.loginStatus) {
            return (<ProfilePage userid={this.state.userid} />)
        } else {
            return (
                <Loginuser />
            );
        }
    }
}
export default ProfileCheck;