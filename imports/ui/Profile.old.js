import React from 'react'; 
import {Accounts} from 'meteor/accounts-base';
import 'react-date-picker/index.css'
import Modal from 'react-modal';
import { DateField, Calendar } from 'react-date-picker'
import {Events} from '../api/events'; 
import{Meteor} from 'meteor/meteor'; 

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            fname: '', 
            lname: ''

        }
    }
    componentOnMount(){
        const profile = Meteor.users.find({_id: Meteor.userId()}).fetch(); 
        const  ilname = profile[0].profile.lname; 
        const ifname = profile[0].profile.fname; 
        this.setState({fname: ifname, lname: ilname})
    }
    onSubmit(e){

        const fname = this.state.fname; 
        const lname = this.state.lname; 
        e.preventDefault(); 
        if(fname){
            Meteor.users.update({_id: Meteor.userId()},{$set: {"profile.fname": fname, "profile.chips": 0}})
        }
        if(lname){
            Meteor.users.update({_id: Meteor.userId()},{$set: {"profile.lname": lname,"profile.chips": 0}})
        }
        
    }
    onChangeFname(e){
        this.setState({
            fname: e.target.value
        })
    }
    onChangeLname(e){
        this.setState({
            lname: e.target.value
        })
    }



render() {
    const profile = Meteor.users.find({_id: Meteor.userId()}).fetch(); 
    
    return (
        
      <div>
          <h1>Profile</h1>
          <form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form">
              <input
                type="text"
                placeholder="First Name"
                value={this.state.fname}
                onChange={this.onChangeFname.bind(this)}/>
                
                <input
                type="text"
                placeholder="Last Name"
                value={this.state.lname}
                onChange={this.onChangeLname.bind(this)}/>
                <button className="button"> Submit </button>
            </form>
        
        <h3> First Name: {this.state.fname}</h3>
        <h3> Last Name: {this.state.lname}</h3>
      
      </div>
    );
  }
  }