import React, {Component} from 'react';                                                                                                      import {Template} from 'meteor/templating';
import {Blaze} from 'meteor/blaze';

export class AccountsUIWrapper extends Component {                                                                                             constructor(props) {
  super(props);
  this.containerRef = React.createRef();
}

  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.render(Template.loginButtons,
      this.containerRef.current);
  }

  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  }

  render() {
    // Just render a placeholder container that will be filled in
    return <span ref={this.containerRef}/>;
  }
}