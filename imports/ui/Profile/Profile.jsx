import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

class Profile extends Component {
   
    isLogged = () =>
    {
        return this.props.user
    }


    render() {
        return (
            <div>{`Profile ${ this.isLogged() && this.props.user.username }` }</div>
        )
    }
}


import { withTracker } from 'meteor/react-meteor-data';

export default withTracker(() => {
    return {
      user: Meteor.user(),
    };
  })(Profile );