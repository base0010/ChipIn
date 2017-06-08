import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Profile from './Profile';
import VolunteerEventListAvailable from "./VolunteerEventListAvailable"
import VolunteerEventListEnrolled from "./VolunteerEventListEnrolled"


export default class VolunteerTabs extends React.Component{
    constructor(props){
        super(props);
    }

    render () {
        return(
            <Tabs selectedTabClassName="tab-active">
                <TabList className="tab-bar">
                    <Tab className="tab">Find Opportunities</Tab>
                    <Tab className="tab">My Availability</Tab>
                    <Tab className="tab">Review Past Opportunities</Tab>
                    <Tab className="tab">Profile</Tab>
                </TabList>
                    
                <TabPanel>
                    <VolunteerEventListAvailable/>
                    <VolunteerEventListEnrolled/>
                </TabPanel>
                <TabPanel>
                    <h2>My Availability Placeholder</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Review Past Opportunities Placeholder</h2>
                </TabPanel>
                <TabPanel>
                    <Profile/>
                </TabPanel>
            </Tabs>
        );
    }
};
