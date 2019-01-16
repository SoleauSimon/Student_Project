import React, { Component, Fragment } from 'react'

class infosStudent extends Component {
  state = {
    isUpdating: false
  }
  handleDelete = (key) => {
    Links.remove({ _id: key });
  }

  handleUpdate = (key) => (event) => {
    event.preventDefault()

    const {
      name: { value: name },
      lastName: { value: lastName },
      github: { value: github }
    } = event.target

    Links.update({ _id: key }, { name, lastName, github });

    this.setState({
      isUpdating: false
    })
  }

  render() {
    const { student } = this.props
    const { isUpdating } = this.state
    return (
      <li key={student._id}>
        <button onClick={() => this.handleDelete(student._id)}>delete</button>
        {isUpdating ? (
          <Fragment>
            <form onSubmit={this.handleUpdate(student._id)}>
              <input name="name" defaultValue={student.name} />
              <input name="lastName" defaultValue={student.lastName} />
              <input name="github" defaultValue={student.github} />
              <input type="submit" value="Submit" id="checkbox" />
            </form>
          </Fragment>
        ) : (
            <Fragment>
              <button id="checkbox" onClick={() => this.setState({ isUpdating: true })}>update</button>
              <div id="name" > {student.name}</div>
              <div> {student.lastName} </div>
              <a href={student.github} target="_blank">{student.github}</a>
            </Fragment>
          )}
      </li>
    );
  }
}

export default infosStudent