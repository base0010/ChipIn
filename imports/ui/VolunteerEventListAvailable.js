import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import FlipMove from 'react-flip-move';
import { Events } from '../api/events';
import VolunteerEventListItemAvailable from './VolunteerEventListItemAvailable';

export default class VolunteerEventListAvailable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }
  componentDidMount() {
  
    this.eventsTracker = Tracker.autorun(() => {
     
      const events = Events.find({$or:[
                                
                                {createdBy: !Meteor.userId()},

                                {enrolledUsers: {$nin:[Meteor.userId()]}}
                                ]}).fetch();
      this.setState({ events });
      
    });
  }
  componentWillUnmount() {
    this.eventsTracker.stop();
  }
  renderVolunteerEventListItems() {
    if (this.state.events.length === 0) {
      return (
        <div className="item">
          <p className="item__status-message">No Events Found</p>
        </div>
      );
    }

    return this.state.events.map((event) => {
      console.log(this.state.events);
      return <VolunteerEventListItemAvailable key={event._id}
                                              id={event._id} 
                                              name={event.name}
                                              description={event.description} 
                                              location={event.location}
                                              startDate={event.startDate}
                                              endDate={event.endDate}
                                              enrolledNum={event.enrolledNum}
                                              maxNum={event.maxNum}/>;
    })
  }
  
  render() {
    return (
      <div className="tab-right-fifty scrollable left-col">
        <h1>Available Opportunities</h1>
        <FlipMove maintainContainerHeight={true}>
          {this.renderVolunteerEventListItems()}
        </FlipMove>
      </div>
    );
  }
};
