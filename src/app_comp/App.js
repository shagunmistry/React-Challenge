import React, { Component } from 'react';
import './App.css';

import Navigationbar from '../navigation/Navigationbar';
import Hometrend from '../homepage/Hometrend';
import Profilepage from '../profile_page_comp/Profilepage';
import OngoingChallenges from '../challenges_page/OngoingChallenges';
import ProfileCheck from '../profile_page_comp/ProfileCheck';
import UploadVideo from '../upload_video_comp/UploadVideo';
import EditProfile from '../edit_profile_comp/EditProfile';

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
            <Route exact path="/Profilepage/:userName" component={Profilepage} />
            <Route exact path="/UploadVideo" component={UploadVideo} />
            <Route exact path="/EditProfile" component={EditProfile} />
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
