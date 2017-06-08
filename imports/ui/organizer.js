import React from 'react';
import {Link, browserHistory} from 'react-router';
import PrivateHeader from './PrivateHeader';
import Tabs from './OrganizerTabs';

export default class Organizer extends React.Component{
    render(){
        return(
        <div className="boxed-view">
            <PrivateHeader title="Organizer"/>               
            <Tabs/>
        </div>
     );}
};
