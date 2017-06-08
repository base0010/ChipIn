import 'react-date-picker/index.css'
import React from 'react'; 
import { DateField, Calendar } from 'react-date-picker'
import {Events} from '../api/events'; 

export default class DatePicker extends React.Component{

 onChange (a) {

     Meteor.call('events.insert', 
                name, 
                description, 
                location, 
                number,
                ); 
  console.log(a)
}
 

 
render () {
    let date = '2017-04-24'; 
return (

<div>
<Calendar
  dateFormat="YYYY-MM-DD HH:mm:ss"
  onChange={this.onChange.bind(this)}
  
  
/>
</div>
); 
}
}