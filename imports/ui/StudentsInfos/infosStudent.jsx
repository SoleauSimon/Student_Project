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
      <li style={{ backgroundColor: 'white', marginBottom: 20 }} key={student._id}>
        {isUpdating ? (
          <div style={{ display: 'flex' }}>
            <div>
              <button className="btndelete" onClick={() => this.handleDelete(student._id)}>Delete</button>
            </div>
            <form onSubmit={this.handleUpdate(student._id)}>
              <input name="name" defaultValue={student.name} />
              <input name="lastName" defaultValue={student.lastName} />
              <input name="github" defaultValue={student.github} />
              <input type="submit" value="Submit" id="checkbox" />
            </form>
          </div>
        ) : (
            <div style={{ display: 'flex', padding: 20, justifyContent: 'space-between' }}>
              <div>
                <div style={{ marginBottom: 5 }} id="name" > {student.name}</div>
                <div style={{ marginBottom: 5 }}> {student.lastName} </div>
                <a href={student.github} target="_blank">{student.github}</a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }} >
                <button className="btndelete" onClick={() => this.handleDelete(student._id)}>Delete</button>
                <button className="btnupdate" id="checkbox" onClick={() => this.setState({ isUpdating: true })}>Update</button>
              </div>
            </div>
          )}
      </li>
    );
  }
}

export default infosStudent