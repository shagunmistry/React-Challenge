import React, { Component } from 'react';
import CardContainer from './CardContainer';
import ModalContainer from './ModalContainer';
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