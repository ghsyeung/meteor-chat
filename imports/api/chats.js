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

