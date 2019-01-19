import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import InfosStudent from './infosStudent';
import { Link } from 'react-router-dom';
import Form from './Form';

import './Info.css'

class Info extends Component {

  render() {
    // Map la liste des students et les utilisent le component InfosStudent
    const students = this.props.students.map(
      student => <InfosStudent key={student._id} student={student} />
    );
    return (
      <Fragment>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex' }}>
            <div className="infoContainerImg" style={{ flex: '1' }} >

            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link style={{ borderRadius: '10% 0% 0% 70%', textTransform: 'uppercase', backgroundColor: '#cb4f4f', textDecoration: 'none', color: 'white', padding: '0 0 20px 20px' }} to="/profile"> 
                  <div style={{ marginBottom: 10, marginTop: 10, marginRight: 10 }}>Votre</div>
                  <div style={{ marginTop: 10, marginRight: 10 }}>Profile</div>
                </Link>
              </div>
              <div style={{ display: 'flex', padding: '50px 60px 50px 60px' }}>
                <div style={{ width: '100%' }}>
                  <Form />
                  <div >
                    <ul style={{ overflow: 'scroll', maxHeight: '600px' }}>{students}</ul>
                  </div>
                </div>
              </div>
            </div>
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
