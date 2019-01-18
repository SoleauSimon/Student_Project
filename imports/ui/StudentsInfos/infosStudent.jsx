import React, { Component, Fragment } from 'react'

class infosStudent extends Component {
  state = {
    isUpdating: false
  }

// Remove l'id dans la bdd mongo db
  handleDelete = (key) => {
    Links.remove({ _id: key });
  }

// Update dans la bdd de mongo db
  handleUpdate = (key) => (event) => {
    event.preventDefault()

    const {
      name: { value: name },
      lastName: { value: lastName },
      github: { value: github }
    } = event.target

    Links.update({ _id: key }, { name: name, lastName, github });

    this.setState({
      isUpdating: false
    })
  }

  render() {
    const { student } = this.props
    const { isUpdating } = this.state

    return (
      <li className="contentprofile" key={student._id}>
        <button className="btndelete" onClick={() => this.handleDelete(student._id)}>Delete</button>
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
              <button className="btnupdate" id="checkbox" onClick={() => this.setState({ isUpdating: true })}>Update</button>
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