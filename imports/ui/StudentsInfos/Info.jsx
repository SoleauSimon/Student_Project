import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import InfosStudent from './infosStudent';
import { Link } from 'react-router-dom';
import AccountLogic from '../Connexion/AccountLogic'
import Form from './Form';

import './Info.css'

class Info extends Component {

  render() {
    // Map la liste des students et les utilisent le component InfosStudent
    const students = this.props.students.map(
      student => <InfosStudent key={student._id} student={student} />
    );

    const { user } = this.props
    return (
      <Fragment>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex' }}>
            <div className="infoContainerImg" style={{ flex: '1' }} >
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ borderRadius: '0% 8% 50% 15%', textTransform: 'uppercase', backgroundColor: '#cb4f4f', textDecoration: 'none', color: 'white', padding: '20px 20px 0px 0px' }}>
                  <AccountLogic />
                </div>
                <Link style={{ borderRadius: '10% 0% 0% 70%', textTransform: 'uppercase', backgroundColor: '#cb4f4f', textDecoration: 'none', color: 'white', padding: '0 0 20px 20px' }} to="/profile">
                  <div style={{ marginBottom: 10, marginTop: 10, marginRight: 10 }}>Votre</div>
                  <div style={{ marginTop: 10, marginRight: 10 }}>Profile</div>
                </Link>
              </div>
              <div style={{ display: 'flex', padding: '40px 60px 40px 60px' }}>
                <div style={{ width: '100%' }}>
                  <div style={{ textAlign: 'center', marginBottom: 30 }}>
                    <h1 style={{ fontSize: 53, letterSpacing: 11, textTransform: 'uppercase', lineHeight: 0.8, marginBottom: 10 }}>HETIC</h1>
                    <h2 style={{ fontSize: 20, letterSpacing: 6, textTransform: 'uppercase' }}>La liste d'élèves</h2>
                  </div>
                  {user ? (
                    <Fragment>
                      <Form />
                      <div >
                        <ul style={{ overflow: 'scroll', maxHeight: '600px' }}>{students}</ul>
                      </div>
                    </Fragment>
                  ) : (
                      <div>
                        <div style={{ textAlign: 'center', marginBottom: 30 }}>
                          Vous n'êtes pas connecté.
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <img src="https://media1.tenor.com/images/4c88cacd67bc8c3a569802e67013af85/tenor.gif?itemid=11426291"></img>
                        </div>
                      </div>
                    )}
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

  const user = Meteor.user();
  const students = Links.find().fetch()

  return {
    students,
    user
  };
})(Info);
