import React, { Component, Fragment } from 'react'

import Links from '/imports/api/links';

export default class Form extends Component {
    state = {
        Name: '',
        LastName: '',
        Github: '',
    }

    setValueName = (event) => {
        this.setState({
            Name: event.target.value
        });
    }

    setValueLink = (event) => {
        this.setState({
            LastName: event.target.value
        });
    }

    setValueGithub = (event) => {
        this.setState({
            Github: event.target.value
        });
    }
    setValueUsername = (event) => {
        this.setState({
            Username: event.target.value
        });
    }
    setValuePassword = (event) => {
        this.setState({
            Password: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        Links.insert({
            name: this.state.Name,
            lastName: this.state.LastName,
            github: this.state.Github,
            createdAt: new Date()
        })

    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name :
                    <input onChange={this.setValueName} type="text" />
                    </label>
                    <label>
                        LastName :
                    <input onChange={this.setValueLink} type="text" />
                    </label>
                    <label>
                        Github :
                    <input onChange={this.setValueGithub} type="text" />
                    </label>
                    <button type="submit" value="Submit">Envoyer</button>
                </form>
            </Fragment>
        )
    }
}