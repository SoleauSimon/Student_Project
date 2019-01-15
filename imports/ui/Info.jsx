import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

class Info extends Component {

  handleDelete = (key) => {
    Links.remove({ _id: key });
  }

  handleUpdate = (key) => () => {
    console.log(key, document.getElementById("name").innerText)
    //Links.update( {_id: key}, {  name, lastName, github });
  }

  render() {
    const students = this.props.students.map(
      students => this.makeLink(students)
    );
    return (
      <div>
        <ul>{ students }</ul>
      </div>
    );
  }

  makeLink(students) {
    return (
      <li key={students._id}>
        <button onClick={() => this.handleDelete(students._id)}>delete</button>
        <button id="checkbox" onClick={this.handleUpdate(students._id)}>update</button>
        {/* <input type="checkbox" id="checkbox" value={students._id}/> */}
        <div id="name" > {students.name}</div>
        <div> {students.lastName} </div>
        <a href={students.github} target="_blank">{students.github}</a>
      </li>
    );
  }
}

export default InfoContainer = withTracker(() => {
  return {
    students: Links.find().fetch(),
  };
})(Info);
