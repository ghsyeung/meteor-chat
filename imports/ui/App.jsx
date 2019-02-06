import React from 'react';
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";
import {Chats} from "../api/chats";
import {Chatroom} from "./Chatroom";
import {AccountsUIWrapper} from "./AccountUIWrapper";

const newMessage = ({alias, text}) =>
  Chats.insert({roomId: '123', alias, createdAt: new Date(), text});

const App_ = ({currentUser}) => {
  return (
    <div>
      <AccountsUIWrapper/>
      {currentUser
        ? (<Chatroom userId={currentUser._id}
                     username={currentUser.username}
                     submitMessage={newMessage}/>)
        : null
      }
    </div>
  );
};

export const App = withTracker(() => ({
  currentUser: Meteor.user()
}))(App_);
