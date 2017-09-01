
/**
 * ChallengePage will render the ChallengesCards for the list of current trending challenges
 */
import React, { Component } from 'react';
import ChallengesCard from '../cards/ChallengesCard';


class OngoingChallenges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: "",
            videoLink: "",
            likes: "",
            challenges: "",
            videoCat: "",
            videoDesc: "",
            videoTitle: "",
            profilePic: "",
            disikes: ""
        }

        //  this.showModal = this.showModal.bind(this);
        //   this.hideModal = this.hideModal.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    /*showModal() {
        this.refs.modal.show();
    }
    hideModal() {
        this.refs.modal.hide();
    } */

    componentWillMount() {

    }


    render() {


        function initApp() {
        }


        /**
         * This loads when the page loads (right before renders)
         */
        window.addEventListener('load', function () {
            initApp()
        });

        return (
            <div>
                <ChallengesCard title="Game of Thrones Snow" likes="1234" dislikes="345" challenges="90"
                    videoURL="https://firebasestorage.googleapis.com/v0/b/challengemetest-ea2e0.appspot.com/o/users%2FbEcyh6hrlGXbTq8ZE27BxFgvHXX2%2Fuploaded_videos%2FJacks_AQOtK?alt=media&token=fa77a283-1174-4881-9119-b3548db6b35c"
                    userid="Shagun Mistry"
                    userImage="https://firebasestorage.googleapis.com/v0/b/challengemetest-ea2e0.appspot.com/o/users%2FbEcyh6hrlGXbTq8ZE27BxFgvHXX2%2Fimages%2Fselfie1.PNG?alt=media&token=7c177514-8b47-40e6-b375-018c6c94ff6f"
                />
            </div>
        )

    }

}


export default OngoingChallenges;