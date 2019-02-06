import React, {Component} from 'react';
import {withTracker} from "meteor/react-meteor-data";
import {Chats} from '../api/chats';
import "./Chatroom.scss";

export class Chatroom_ extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }

  submit(event) {
    event.preventDefault();
    const d = new FormData(this.formRef.current);
    const {submitMessage, userId, username} = this.props;
    submitMessage({
      owner: userId,
      alias: username,
      text: d.get('message'),
    });
  }

  render() {
    const {chats} = this.props;
    const log = chats.map(c => `${c.alias}: ${c.text}`).join("\n");
    return (
      <div className="chatroom">
        <textarea className="chat-history" readOnly={true} value={log}/>
        <form ref={this.formRef} onSubmit={this.submit.bind(this)}>
          <div className="message-box">
            <textarea className="user-input" name="message"/>
            <button type='submit'>Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export const Chatroom = withTracker(() => {
  return {
    chats: Chats.find({roomId: '123'}).fetch()
  }
})(Chatroom_);