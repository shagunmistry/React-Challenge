/**
 * Leads to the Profile Page where the user can see profiles (their own if logged in)
 */
import React, { Component } from 'react';
import Loginuser from './Loginuser';

class ProfileCheck extends Component {

    constructor(props) {
        super(props);
    }

    render() {



        return (
            <Loginuser />
        );

    }
}
export default ProfileCheck;