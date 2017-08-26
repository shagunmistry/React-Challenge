import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

export default class Navigationbar extends Component{
  render(){
    return(
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
                  <a className="navbar-brand" href="Hometrend"><img alt="Logo" src="https://firebasestorage.googleapis.com/v0/b/challengemetest-ea2e0.appspot.com/o/blackInside.png?alt=media&token=3db37412-a392-4e45-8d1d-36e8a784649a" width="30" height="30" className="d-inline-block align-top"/></a>
                </div>
                <div className="Collapse navbar-collapse" id="myNavbar">
                  <ul className="nav navbar-nav">
                    <li><NavLink to="/Hometrend" onClick={()=>window.location.reload()}><i className="fa fa-home"></i> Home </NavLink></li>
                    <li><NavLink to="/OngoingChallenges" onClick={()=>window.location.reload()}><i className="fa fa-area-chart"></i> Ongoing Challenges</NavLink></li>
                    <li><NavLink to="/Comedy" onClick={()=>window.location.reload()} ><i className="fa fa-hand-spock-o"></i><span> Comedy</span></NavLink></li>
                    <li><NavLink to="/Sports" onClick={()=>window.location.reload()} ><i className="fa fa-bicycle"></i><span> Sports</span></NavLink></li>
                    <li><NavLink to="/Dancing" onClick={()=>window.location.reload()}><i className="fa fa-cubes"></i><span> Dancing</span></NavLink></li>
                    <li><NavLink to="/Cooking" onClick={()=>window.location.reload()}><i className="fa fa-diamond"></i><span> Cooking</span></NavLink></li>
                    <li><NavLink to="/UploadVideo" onClick={()=>window.location.reload()}><i className="fa fa-upload"></i><span> Upload Video</span></NavLink></li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <NavLink to="/ProfileCheck" onClick={()=>window.location.reload()}>
                        <i className="fa fa-user" ></i> Profile <span className="badge notifications">10</span>
                      </NavLink>
                      </li>
                  </ul>
                </div>
            </div>
        </nav>
      </Router>
    );
  }
}
