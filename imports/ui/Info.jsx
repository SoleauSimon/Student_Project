import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import InfosStudent from './infosStudent';
import Form from './Form';

class Info extends Component {

  render() {
    const students = this.props.students.map(
      student => <InfosStudent key={student._id} student={student} />
    );
    return (
      <Fragment>
        <Form/>
        <div>
          <ul>{students}</ul>
        </div>
      </Fragment>
    );
  }

}

export default InfoContainer = withTracker(() => {
  return {
    students: Links.find().fetch(),
  };
})(Info);
