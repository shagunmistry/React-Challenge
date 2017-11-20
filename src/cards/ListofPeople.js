//if the pathname is followers, get the list of followers. 
//Else get the list of challengers. 

import React, { Component } from 'react';
import { firebaseApp } from '../firebase/Firebase';

const database = firebaseApp.database();

var pathName = window.location.pathname.slice(1, window.location.pathname.length).toLowerCase();

class ListofPeople extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            userId: ""
        };
        this.getFollowerList = this.getFollowerList.bind(this);
        this.getChallengersList = this.getChallengersList.bind(this);
    }
    componentDidMount() {
        var referThis = this;
        firebaseApp.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user.uid);
                referThis.setState({
                    loggedIn: true,
                    userId: user.uid
                });
                if (pathName === "challengers") {
                    referThis.getChallengersList(user.uid);
                } else if (pathName === "followers") {
                    referThis.getFollowerList(user.uid);
                }
            } else {
                window.alert("Please Log In");
                window.location.replace("https://www.beztbaba.com//");
            }
        });


    }

    /**
     * Get the list of followers and show it on the page.
     */
    getFollowerList(uid) {
        var followerList = [];
        //Get the list of keys underneath this node. 

        database.ref('Follow_Challenge_Stats/' + uid).once('value', function (snapshot) {
            if (snapshot.exists()) {
                snapshot.forEach(function (childSnapshot) {
                    childSnapshot.forEach(function (checkFollow) {
                        //follow:  checkFollow.val().follow
                        //user Id: checkFollow.key
                        if (checkFollow.val().follow) {
                            //console.log(checkFollow.key);
                            //If the user follows the person, then look up their name using their key. 
                            database.ref('users/' + checkFollow.key).once('value', function (userNode) {
                                var uid = checkFollow.key, followerName = userNode.val().username;
                                followerList[uid] = followerName;
                                //followerList.push(uid);
                                //console.log("Inside getFollowers Function: " + followerList[uid]);
                            }).then(function (success) {
                                //Once we get the list, open up the model and show the list. 
                                var users = Object.keys(followerList);
                                var ulDom = document.getElementById('follower_list');

                                for (var i = 0; i < users.length; i++) {
                                    //console.log(users[i]); 
                                    //console.log(followerList[users[i]]);
                                    var name = followerList[users[i]];
                                    var aLink = document.createElement('a');
                                    aLink.href = "/users/" + users[i];
                                    aLink.innerText = followerList[users[i]];

                                    var li = document.createElement('li');
                                    li.appendChild(aLink);
                                    ulDom.appendChild(li);
                                }
                                /*const listItems = followerList.map((name, uid) =>
                                    <li><a href={"/users/" + uid}>name</a></li>
                                );*/

                            });
                        }
                    });
                });
            }else{
                //Tell them that they have no followers right now.
                document.getElementById('decision').innerText = "Sorry you do not have any " + pathName + ".";
            }

        })
    }


    /**
     * Get the challenger List
     */
    getChallengersList() {

    }
    render() {

        return (
            <div className="card">
                <div className="card-block">
                    <h2 className="card-title">{pathName}</h2>
                </div>
                <ul className="list-group list-group-flush" id="follower_list">
                </ul>
                <h3 id="decision"></h3>
            </div>
        );
    }
}

export default ListofPeople;