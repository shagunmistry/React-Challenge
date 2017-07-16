import React, { Component } from 'react';
import ChallengesCard from './ChallengesCard';

class OngoingChallenges extends Component{
    constructor(props){
        super(props);
        this.ChallengeUser = this.ChallengeUser.bind(this);
    }

    ChallengeUser(){

    }

    render(){
        
        return(
            <ChallengesCard />
        );
    }
}

export default OngoingChallenges;