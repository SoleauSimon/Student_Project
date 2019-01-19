import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

import Users from '/imports/api/accountConfig';

export default class AccountsUIWrapper extends Component {
  
  componentDidMount() {
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }
  componentWillUnmount() {
    Blaze.remove(this.view);
  }
  render() {
    return (
      <React.Fragment>
        <span style={{ marginLeft: 10 }} ref="container" />
      </React.Fragment>
    )
  }
}