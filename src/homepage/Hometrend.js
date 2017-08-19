/**
 * Home Page screen
 * 
 */
import React, { Component } from 'react';
import CardContainer from '../cards/CardContainer';
import ModalContainer from '../cards/ModalContainer';
class Hometrend extends Component{

    render(){
        
        return(
            <div className="container">
                    <CardContainer categoryName="Latest"/>
                    <CardContainer categoryName="Trending"/>
                    <ModalContainer/>
            </div>
        );
    }
}

export default Hometrend;