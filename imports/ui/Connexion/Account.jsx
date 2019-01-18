import React, { Component, Fragment } from 'react'
import AccountLogic from './AccountLogic'

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
                <form>
                    <AccountLogic onChange={() => this.handleSubmit}/>
                </form>
            </Fragment>
        )
    }
}