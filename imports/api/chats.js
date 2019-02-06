import {Meteor} from 'meteor/meteor';

/**
 * Chat {
 *   roomId:string
 *   userId:string
 *   createdAt: Date
 *   text:string
 * }
 */
export const Chats = new Meteor.Collection('chats');


Meteor.methods({
  "chats.addMessage"({roomId, text}) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized', "You must log in to post message");
    }

    const user = Meteor.user();
    Chats.insert({
      alias: user.username,
      createdAt: new Date(),
      text,
      roomId,
    });
  }
});
