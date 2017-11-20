import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { firebaseApp } from '../firebase/Firebase';


export default class Navigationbar extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.logOut = this.logOut.bind(this);
    this.editProfie = this.editProfie.bind(this);
  }

  componentDidMount() {
    var profile_options_buttons = document.getElementById('profile_options');
    //check if user is signed in
    firebaseApp.auth().onAuthStateChanged(function (user) {
      //If the user is logged in, display the logout and Edit button, if not. dont. 
      if (user) {
        profile_options_buttons.style.display = 'inherit';
      } else {
        profile_options_buttons.style.display = 'none';
      }
    });
  }

  /**
     * Signout the user and lead them back to the home page. 
     */
  logOut() {
    firebaseApp.auth().signOut().then(function () {
      window.location.replace("https://www.beztbaba.com//");
    }).catch(function (error) {
      window.alert("There was an error, please try again later");
      window.location.reload();
    });
  }

  /**
   * edit Profile page where you can change your picture and about status
   */
  editProfie() {
    window.location.replace('https://www.beztbaba.com//EditProfile');
  }


  render() {
    return (
      //make sure all LINKS are wrapped in Router
      <Router>
        <nav className="navbar navbar-default fixed-top">
          <div className="container" id="navContainer">
            <div className="navbar-header" >
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="Hometrend"><img alt="Logo" src="https://firebasestorage.googleapis.com/v0/b/challengemetest-ea2e0.appspot.com/o/blackInside.png?alt=media&token=3db37412-a392-4e45-8d1d-36e8a784649a" width="30" height="30" className="d-inline-block align-top" /></a>
            </div>
            <div className="Collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                {/* <li><NavLink to="/Comedy" onClick={()=>window.location.reload()} ><i className="fa fa-hand-spock-o"></i><span> Comedy</span></NavLink></li>
                    <li><NavLink to="/Sports" onClick={()=>window.location.reload()} ><i className="fa fa-bicycle"></i><span> Sports</span></NavLink></li>
                    <li><NavLink to="/Dancing" onClick={()=>window.location.reload()}><i className="fa fa-cubes"></i><span> Dancing</span></NavLink></li>
                    <li><NavLink to="/Cooking" onClick={()=>window.location.reload()}><i className="fa fa-diamond"></i><span> Cooking</span></NavLink></li>
    */}
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><NavLink to="/Hometrend" onClick={() => window.location.reload()}><i className="fa fa-home"></i> Home </NavLink></li>
                <li><NavLink to="/OngoingChallenges" onClick={() => window.location.reload()}><i className="fa fa-area-chart"></i> Ongoing Challenges</NavLink></li>
                <li><NavLink to="/UploadVideo" onClick={() => window.location.reload()}><i className="fa fa-upload"></i><span> Upload Video</span></NavLink></li>
                <li>
                  <NavLink to="/ProfileCheck" onClick={() => window.location.reload()}>
                    <i className="fa fa-user" ></i> Profile <span className="badge notifications">10</span>
                  </NavLink>
                </li>
                <li className="dropdown" id="profile_options">
                  <a className="dropdown-toggle" type="button" data-toggle="dropdown">
                    <i className="fa fa-id-badge"></i>
                  </a>
                  <ul className="dropdown-menu" id="profile_options_btns">
                    <li><button id="logOutButton" type="button" className="btn btn-info btn-3" onClick={() => this.logOut()}>Log Out</button>
                    </li>
                    <li><button id="editButton" type="button" className="btn btn-info btn-4" onClick={() => this.editProfie()}>Edit Profile </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Router>
    );
  }
}

/**
 * <div className="col-sm-6 dropdown" id="profile_dropdown" style={{ display: 'block', zIndex:'999'}}>
                                <button className="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown">
                                    <i className="fa fa-id-badge"></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button id="logOutButton" type="button" className="btn btn-info btn-3" onClick={() => this.logOut()}>Log Out</button>
                                    </li>
                                    <li><button id="editButton" type="button" className="btn btn-info btn-4" onClick={() => this.editProfie()}>Edit Profile </button>
                                    </li>
                                </ul>
                            </div>
 */
