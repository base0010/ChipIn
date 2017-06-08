import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import FlipMove from 'react-flip-move';
import { Events } from '../api/events';
import OrganizerEventListItem from './OrganizerEventListItem';

export default class OrganizerEventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }
  componentDidMount() {
  
    this.eventsTracker = Tracker.autorun(() => {
     
      const events = Events.find({createdBy: Meteor.userId()}).fetch();
      
      this.setState({ events });
    });
  }
  componentWillUnmount() {
    this.eventsTracker.stop();
  }
  renderOrganizerEventListItems() {
    if (this.state.events.length === 0) {
      return (
        <div className="item">
          <p className="item__status-message">No Events Found</p>
        </div>
      );
    }

    return this.state.events.map((event) => {
      console.log(event._id)
      return <OrganizerEventListItem key={event._id} 
                                     id={event._id}
                                     name={event.name}
                                     description={event.description} 
                                     location={event.location}
                                     startDate={event.startDate}
                                     endDate={event.endDate}
                                     enrolledNum={event.enrolledNum}
                                     maxNum={event.maxNum}
                                    />;
    })
  }
  
  render() {
    return (
      <div className="tab-container scrollable left-col">
        <FlipMove maintainContainerHeight={true}>
          {this.renderOrganizerEventListItems()}
        </FlipMove>
      </div>
    );
  }
};
