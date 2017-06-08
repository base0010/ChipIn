import { Meteor } from 'meteor/meteor';
import React from 'react';
import {Events} from '../api/events'; 

export default class OrganizerEventListItem extends React.Component {

  render() {
    console.log(this.props.id)
    return (
      
      <div className="item-container">
        <div className="right-col">
          <button className="button button--pill">Edit</button>
          <br/>
          <button className="button button--pill">Find Volunteers</button>
          <br/>
          <button className="button button--pill">Review Applicants</button>
          <br/>
          <button className="button button--pill" onClick={()=>{Events.remove(this.props.id)}}>Delete Event</button>
          
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

