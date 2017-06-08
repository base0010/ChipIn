import { Meteor } from 'meteor/meteor';
import React from 'react';
import {Events} from '../api/events'; 

export default class VolunteerEventListItemEnrolled extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }
  render() {
    return (
      <div className="item-container">
        <div className="right-col">
          <button className="button button--pill" onClick={()=>{Events.update({_id: this.props.id},{$pull:{"enrolledUsers": Meteor.userId()}});}}>Cancel Sign Up</button>
          
        </div>
        <div className="left-col">
          <h2>{this.props.name}</h2>
          <p className="item__message"><b>Description:</b> {this.props.description}</p>
          <p className="item__message"><b>Enrolled Volunteers:</b> {this.props.enrolledNum}/{this.props.maxNum}</p>
          <p className="item__message"><b>Location:</b> {this.props.location}</p>
          <p className="item__message"><b>Start Date:</b> {this.props.startDate}</p>
          <p className="item__message"><b>End Date:</b> {this.props.endDate}</p>
          <button className="button" onClick={()=>{this.setState({modalOpen})}}></button>

        </div>
      </div>
    );
  }
};

