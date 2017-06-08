import React from 'react'; 
import {Accounts} from 'meteor/accounts-base';
import 'react-date-picker/index.css'
import Modal from 'react-modal';
import { DateField, Calendar } from 'react-date-picker'
import {Events} from '../api/events'; 

export default class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      location: '',
      maxNum: 0,
      startDate: '', 
      endDate: '',
      modalStartOpen: false,
      modalEndOpen: false
    };
  }
  onSubmit(e) {
    const name = this.state.name;
    const location = this.state.location; 
    const maxNum = this.state.maxNum; 
    const description = this.state.description; 
    const startDate = this.state.startDate; 
    const endDate = this.state.endDate; 
    e.preventDefault();

    if (name) {
      Meteor.call('events.insert',
                   name,
                   description, 
                   location, 
                   maxNum, 
                   startDate, 
                   endDate,  
            (err, res) => {
              if (!err) {
                this.setState({ name: '' , description: '',  location: '', maxNum: 0});
        }
      });
    }
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeStart(e){
    this.setState({
      startDate: e
    })
  }
  onChangeEnd(e){
    this.setState({
      endDate: e
    })
  }
  onChangeDesc(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }
  onChangeNumber(e) {
    this.setState({
      maxNum: e.target.value
    });
  }

  handleModalClose0(){
   
    this.setState({
      modalStartOpen: false
    })
  }
  handleModalClose1(){
   
    this.setState({
      modalEndOpen: false
    })
  }
  handleModalOpen0(){
   
    this.setState({
      modalStartOpen: true
    })
  }
  handleModalOpen1(){
   
    this.setState({
      modalEndOpen: true
    })
  }
  render() {

      
    return (
      <div className="tab-right-container">
          <h1>Create New Event</h1>
          <form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form">
            <button className="button">Add Event</button>
              <input
                type="text"
                placeholder="Event Name"
                value={this.state.name}
                onChange={this.onChangeName.bind(this)}/>

                <input
                type="text"
                placeholder="Description"
                value={this.state.description}
                onChange={this.onChangeDesc.bind(this)}/>

                <input
                type="text"
                placeholder="Location"
                value={this.state.location}
                onChange={this.onChangeLocation.bind(this)}/>

                <input
                type="text"
                placeholder="Number of Volunteers"
                value={this.state.number}
                onChange={this.onChangeNumber.bind(this)}/>              
          </form>
         <h4>Start Date: {this.state.startDate}</h4> 
                <button className="button" onClick={this.handleModalOpen0.bind(this)}>
                                            Open
                </button>
                <Modal 
                  contentLabel="StartDate"
                  isOpen={this.state.modalStartOpen}
                  >
                  <div className="boxed-view">
                  <Calendar
                    dateFormat="YYYY-MM-DD HH:mm:ss"
                    onChange={this.onChangeStart.bind(this)}
                    >
                
                  </Calendar>
                  <button type="button" className="button" onClick={this.handleModalClose0.bind(this)}>Done</button>
                  </div>
                </Modal>

          <h4>End Date: {this.state.endDate}</h4> 
                <button className="button" onClick={this.handleModalOpen1.bind(this)}>
                                            Open
                </button>
                <Modal 
                  contentLabel="EndDate"
                  isOpen={this.state.modalEndOpen}
                  >
                  <div className="boxed-view">
                  <Calendar
                    dateFormat="YYYY-MM-DD HH:mm:ss"
                    onChange={this.onChangeEnd.bind(this)}
                    >
                
                  </Calendar>
                  <button type="button" className="button" onClick={this.handleModalClose1.bind(this)}>Done</button>
                  </div>
                </Modal>
      </div>
    );
  }
}