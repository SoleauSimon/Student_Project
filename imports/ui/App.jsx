import React, {Component} from 'react';
import Info from './Info.jsx';
import Form from './Form.jsx';

class App extends Component {

  render() {
    return(
        <div>
          <Info />
          <Form />
        </div>
    );
  }
};

export default App;
