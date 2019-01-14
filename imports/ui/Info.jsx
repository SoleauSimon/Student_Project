import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';

class Info extends Component {

  handleDelete = (key) => {
    Links.remove({ _id: key });
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
        <button key={students._id} onClick={() => this.handleDelete(students._id)}>delete</button>
        <div> {students.name}</div>
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
