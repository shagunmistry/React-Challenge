import React, { Component } from 'react';
import './App.css';

import Navigationbar from './Navigationbar';
import Hometrend from './Hometrend';
import Profilepage from './Profilepage';
import OngoingChallenges from './OngoingChallenges';
import ProfileCheck from './ProfileCheck';
import UploadVideo from './UploadVideo';
import EditProfile from './EditProfile';

import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {

    return (
      <div className="App">
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
