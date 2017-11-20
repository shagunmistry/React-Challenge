import React, { Component } from 'react';
import './App.css';

import Navigationbar from '../navigation/Navigationbar';
import Hometrend from '../homepage/Hometrend';
import Profilepage from '../profile_page_comp/Profilepage';
import Userprofile from '../profile_page_comp/Userprofile';
import OngoingChallenges from '../challenges_page/OngoingChallenges';
import ProfileCheck from '../profile_page_comp/ProfileCheck';
import UploadVideo from '../upload_video_comp/UploadVideo';
import EditProfile from '../edit_profile_comp/EditProfile';
import ListofPeople from '../cards/ListofPeople';

import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {

    return (
      <div className="App">
        {//Set up all the paths of the url .. more to come later. 
        }
        <Router>
          <div>
            <Navigationbar />
            <Route exact path="/" component={Hometrend} />
            <Route exact path="/Hometrend" component={Hometrend} />
            <Route exact path="/OngoingChallenges" component={OngoingChallenges} />
            <Route exact path="/ProfileCheck" component={ProfileCheck} />
            {//            <Route exact path="/Profilepage/:userName" component={Profilepage} />
            }
            <Route path="/users/:userId" component={Userprofile} />
            <Route exact path="/UploadVideo" component={UploadVideo} />
            <Route exact path="/EditProfile" component={EditProfile} />
            <Route exact path="/Followers" component={ListofPeople} />
            <Route exact path="/Challengers" component={ListofPeople} />
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
