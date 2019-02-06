import {Meteor} from 'meteor/meteor';
import {Chats} from '../chats';

Meteor.publish('chats', (roomId) => {
  return Chats.find({roomId});
});
