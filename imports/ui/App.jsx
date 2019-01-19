import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Account from './Connexion/Account';

import Info from './StudentsInfos/Info.jsx';
import Profile from './Profile/Profile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route exact path="/" component={Info} />
            <Route path="/profile" component={Profile} />
          </Fragment>
        </Router>
      </div>
    );
  }
};

export default App;
