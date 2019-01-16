import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Info from './Info.jsx';
import Form from './Form.jsx';

class App extends Component {
  render() {
    return(
        <div className="App">
          {/* <Info />
          <Form /> */}
          <Router>
            <Fragment>
              <Route exact path="/" component={Info}/>
              {/* <Route path="/profile" component={}/> */}
            </Fragment>
          </Router>
        </div>
    );
  }
};

export default App;
