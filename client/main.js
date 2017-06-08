import React from 'react';
import ReactDOM from 'react-dom';
import {Events} from '../imports/api/events';

import {routes, onAuthChange} from '../imports/routes/routes';
import {Tracker} from 'meteor/tracker'; 


Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
   
});

//
const MyComponent = (props) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
};
Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});