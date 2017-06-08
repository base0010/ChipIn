import React from 'react'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Events } from '../api/events'
import OrganizerEventList from './OrganizerEventList'; 
import CreateEvent from './CreateEvent'; 
import Profile from './Profile'; 
export default class OrganizerTabs extends React.Component{
  constructor(props){
    super(props);
  }

  render () {
    return(
        <Tabs selectedTabClassName="tab-active">
          <TabList className="tab-bar">
            <Tab className="tab">My Events</Tab>
            <Tab className="tab">Profile</Tab>
          </TabList>
          <TabPanel>
            <CreateEvent/>
            <OrganizerEventList/>            
          </TabPanel>
          <TabPanel>
            <Profile/>
          </TabPanel>
        </Tabs>
    )
  }
  
};