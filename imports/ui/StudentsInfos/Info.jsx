import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import InfosStudent from './infosStudent';
import { Link } from 'react-router-dom';
import Form from './Form';

class Info extends Component {

  render() {
    // Map la liste des students et les utilisent le component InfosStudent
    const students = this.props.students.map(
      student => <InfosStudent key={student._id} student={student} />
    );
    return (
      <Fragment>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <img src="https://image.noelshack.com/fichiers/2019/03/5/1547823479-imgmanga.png" style={{ backgroundImage: 'cover', height: '100vh' }} />
          </div>
          <Form />

          <div className="contentstudents">
            <Link to="/profile"> Profile </Link>
            <ul>{students}</ul>
          </div>
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
