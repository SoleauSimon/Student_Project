import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import InfosStudent from './infosStudent';
import Form from './Form';

class Info extends Component {

  render() {
    // Map la liste des students et les utilisent le component InfosStudent
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
// Récupère le students dans la base de donnée 
export default InfoContainer = withTracker(() => {
  return {
    students: Links.find().fetch(),
  };
})(Info);
