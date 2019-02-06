import React, {Component} from 'react';
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";
import {Rooms} from "../api/rooms";
import {Chatroom} from "./Chatroom";
import {AccountsUIWrapper} from "./AccountUIWrapper";
import "./App.scss";
import {SelectRoom} from "./SelectRoom";

const newMessage = message => Meteor.call('chats.addMessage', message);

class App_ extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {availableRooms} = this.props;
    const {roomId} = this.state;
    if (!roomId && availableRooms && availableRooms.length > 0) {
      this.setState({roomId: availableRooms[0]._id});
    }
  }

  changeRoom(roomId) {
    this.setState({roomId});
  }

  render() {
    const {currentUser, availableRooms} = this.props;
    const {roomId} = this.state;
    return (
      <div className="app">
        <div className="header">
          <AccountsUIWrapper/>
          <div className="select-room-wrapper">
            <SelectRoom changeRoom={this.changeRoom.bind(this)}
                        rooms={availableRooms}/>
          </div>
        </div>
        <div className="chatroom-wrapper">
          {currentUser
            ? (<Chatroom roomId={roomId}
                         submitMessage={newMessage}/>)
            : null
          }
        </div>
      </div>
    );
  };
}

export const App = withTracker(() => {
  Meteor.subscribe('rooms');
  return {
    currentUser: Meteor.user(),
    availableRooms: Rooms.find({}).fetch(),
  };
})(App_);
