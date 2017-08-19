import React, { Component } from 'react';
import ChallengesCard from '../cards/ChallengesCard';

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