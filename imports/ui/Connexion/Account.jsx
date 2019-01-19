import React, { Component, Fragment } from 'react'
import AccountLogic from './AccountLogic'
import { Link } from 'react-router-dom';

export default class Account extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        Tasks.insert({
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
        });
    }

    render() {
        return (
            <Fragment>
                <Link to='/info'>Liste des étudiants</Link>
                <form>
                    <AccountLogic onChange={() => this.handleSubmit}/>
                </form>
            </Fragment>
        )
    }
}