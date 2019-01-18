import React, { Component, Fragment } from 'react'
import Links from '/imports/api/links';

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
                <form onSubmit={this.handleSubmit}>
                    {['Name', 'LastName', 'Github'].map(key => (
                        <label key={key} >
                            {key} :
                            <input onChange={(event) => this.setValue(event, key)} value={this.state[key]} type="text" name={key} required/>
                        </label>
                    ))}
                    <button type="submit" value="Submit">Envoyer</button>
                </form>
            </Fragment>
        )
    }
}