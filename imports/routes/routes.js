import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import Login from '../ui/login.js';
import Landing from '../ui/landing.js';
import Signup from '../ui/signup.js';
import Organizer from '../ui/organizer.js'
import Volunteer from '../ui/volunteer.js'

const noAuthPages = ['/', '/signup'];
const authPages = ['/landing', '/organizer', '/volunteer'];

const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/login');
  }
};

const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/signup');
  }
};

export const onAuthChange = (isAuthenticated) => {
  const pathName = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = noAuthPages.includes(pathName);
  const isAuthenticatedPage = authPages.includes(pathName);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/landing');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }

};

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} onEnter={onEnterPublicPage}/>
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
    <Route path="/landing" component={Landing} onEnter={onEnterPrivatePage}/>
    <Route path="/organizer" component={Organizer} onEnter={onEnterPrivatePage}/>
    <Route path="/volunteer" component={Volunteer} onEnter={onEnterPrivatePage}/>
  </Router>
);
