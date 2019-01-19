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
              {/* <img src="https://image.noelshack.com/fichiers/2019/03/5/1547823479-imgmanga.png" style={{  }} /> */}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link to="/profile"> Profile </Link>
              </div>
              <div style={{ display: 'flex', padding: 60 }}>
                <div style={{ width: '100%' }}>
                  <Form />
                  <div >
                    <ul style={{ overflow: 'scroll', maxHeight: '570px' }}>{students}</ul>
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
