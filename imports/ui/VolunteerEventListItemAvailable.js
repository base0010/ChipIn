import { Meteor } from 'meteor/meteor';
import React from 'react';
import {Events} from '../api/events'; 

export default class VolunteerEventListItemAvailable extends React.Component {

  render() {
    

    return (
      <div className="item-container">
        <div className="right-col">
        <button className="button button--pill" onClick={()=>{Events.update({_id: this.props.id},{$addToSet:{"enrolledUsers": Meteor.userId() }}); Events.update({_id: this.props.id}, {$inc:{"enrolledNum": 1}}  );}}>I'll Chip In!</button>
        </div>
        <div className="left-col">
          <h2>{this.props.name}</h2>
          <p className="item__message"><b>Description:</b> {this.props.description}</p>
          <p className="item__message"><b>Enrolled Volunteers:</b> {this.props.enrolledNum}/{this.props.maxNum}</p>
          <p className="item__message"><b>Location:</b> {this.props.location}</p>
          <p className="item__message"><b>Start Date:</b> {this.props.startDate}</p>
          <p className="item__message"><b>End Date:</b> {this.props.endDate}</p>

        </div>
      </div>
    );
  }
};

