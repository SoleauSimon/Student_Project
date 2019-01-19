import React, { Component, Fragment } from 'react'
import Links from '/imports/api/links';
import '../style.css';
import '../reset.css';

// const keys = ['Name', 'LastName', 'Github']

export default class Form extends Component {
    state = {
        Name: '',
        LastName: '',
        Github: '',
    }
    // Récupère la value des input dynamiquement
    setValue = (event, key) => {
        this.setState({
            [key]: event.target.value
        })
        // obj.a //1
        // obj['a'] //1
    }

    // Au submit, envoit les données des input dans la bdd mongo db
    handleSubmit = (event) => {
        event.preventDefault();
        Links.insert({
            name: this.state.Name,
            lastName: this.state.LastName,
            github: this.state.Github,
            createdAt: new Date()
        })
        // Remet le champs des input à vide
        this.setState({
            Name: '',
            LastName: '',
            Github: '',
        })
    }


    render() {
        return (
            <Fragment>
                <div>
                    
                    <form style={{ marginBottom: 30, display: 'flex' }} onSubmit={this.handleSubmit}>
                        <div className="label">
                            {['Name', 'LastName', 'Github'].map(key => (
                                <label style={{}} key={key} >
                                    {key} :
                            <input className="info" onChange={(event) => this.setValue(event, key)} value={this.state[key]} type="text" required />
                                </label>
                            ))}
                            <button className="btnsend" type="submit" value="Submit">Envoyer</button>
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}