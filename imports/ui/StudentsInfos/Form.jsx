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
                    <div style={{ textAlign: 'center', marginBottom: 40 }}>
                        <h1 style={{ fontSize: 53, letterSpacing: 11, textTransform:'uppercase', lineHeight: 0.8, marginBottom: 10}}>HETIC</h1>
                        <h2 style={{ fontSize: 20, letterSpacing: 6, textTransform:'uppercase' }}>La liste d'élèves</h2>
                    </div>
                    <form style={{ marginBottom: 40 }} onSubmit={this.handleSubmit}>
                        {['Name', 'LastName', 'Github'].map(key => (
                            <label key={key} >
                                {key} :
                            <input className="info" onChange={(event) => this.setValue(event, key)} value={this.state[key]} type="text" />
                            </label>
                        ))}
                        <button className="btnsend" type="submit" value="Submit">Envoyer</button>
                    </form>
                </div>
            </Fragment>
        )
    }
}