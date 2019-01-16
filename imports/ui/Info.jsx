import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import InfosStudent from './infosStudent';

class Info extends Component {

  render() {
    const students = this.props.students.map(
      student => <InfosStudent key={student._id} student={student} />
    );
    return (
      <div>
        <ul>{students}</ul>
      </div>
    );
  }


}

export default InfoContainer = withTracker(() => {
  return {
    students: Links.find().fetch(),
  };
})(Info);
