import React from 'react';
import {Link, browserHistory} from 'react-router';
import PrivateHeader from './PrivateHeader'

export default class Landing extends React.Component{
    render(){
        return(

        <div className="boxed-view">
            <PrivateHeader title="Home"/>
            <div className="boxed-view__box">                    
                <h1>I am a...</h1>
                <button className="tileButton" onClick={() => browserHistory.replace("/volunteer")}>Volunteer</button>
                <button className="tileButton" onClick={() => browserHistory.replace("/organizer")}>Organizer</button>
            </div>
        </div>
     );}
};
