import React from 'react';
import {Link, browserHistory} from 'react-router';
import PrivateHeader from './PrivateHeader'
import Tabs from './VolunteerTabs';

export default class Volunteer extends React.Component{
    render(){
        return(
        <div className="boxed-view">
            <PrivateHeader title="Volunteer"/>                  
            <Tabs/>
        </div>
     );}
};
