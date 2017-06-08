import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

Meteor.methods({
  'events.insert':function(iname, idesc, ilocation, imaxnum, istartd, iendd){
   
    let currentId = 0;
    if (Events.find({}).count() === 0) {
      
      newId = currentId + 1;
    } else {
      currentId = Events.findOne({},{sort:{id:-1}}).eventID || 1;
      newId = currentId + 1;
    }


     Events.insert({name: iname,
                    description: idesc,
                    location:ilocation,
                    maxNum:imaxnum,
                    startDate: istartd,
                    endDate: iendd,
                    enrolledNum: 0,
                    createdBy: Meteor.userId(),
                    enrolledUsers: [Meteor.userId()

                    ],
                    
                    eventID: newId
                  });
                  
    Events.update({})
  },
  'events.remove':function(key){
     Events.remove({createdBy: Meteor.userId(), _id: key});
  },

  'events.addUser':function(key){
      Events.update({_id:key},{$addToSet:{"enrolledUsers": Meteor.userId()}});
  }

})
export  const Events = new Mongo.Collection('events');
