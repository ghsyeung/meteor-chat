import {Meteor} from 'meteor/meteor';
import {Rooms} from '../api/rooms';

Meteor.startup(() => {
  const shouldRun = Rooms.find().count() === 0;
  if (shouldRun) {
    Rooms.insert({name: "General"});
    Rooms.insert({name: "Project"});
  }
});