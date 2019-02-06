import {Meteor} from 'meteor/meteor';
import {Rooms} from '../rooms';

Meteor.publish('rooms', () => {
  return Rooms.find({});
});
