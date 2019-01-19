import React, { Component, Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import './profile.css';

class Profile extends Component {

    isLogged = () => {
        return this.props.user
    }
    render() {
        const { user } = this.props
        return (
            <Fragment>
                <a className="backHome" href="/info">Revenir sur la page des étudiants</a>
                <section>
                    <div className="mainBlock">
                        <div className="blockImg">
                            <div className="imgContainer">
                                <img className="image" src="img/futaba.png" alt="futaba"></img>
                            </div>
                        </div>
                        <div className="contentBlock">
                            <div className="titleBlock">
                                <div className="HETIC">HETIC</div>
                                <div className="YOUR_PROFILE">VOTRE PROFIL</div>
                            </div>
                            {user ? (
                                <div className="dataBlock">
                                    <h3 className="dataBlockTitle">Nom</h3>
                                    <div className="dataBlockContent">{`${this.isLogged() && this.props.user.username}`}</div>
                                    <h3 className="dataBlockTitle">Prénom</h3>
                                    <div className="dataBlockContent">lorem10</div>
                                    <h3 className="dataBlockTitle">E-mail</h3>
                                    <div className="dataBlockContent">lorem10</div>
                                    <h3 className="dataBlockTitle">Lien github</h3>
                                    <div className="dataBlockContent">lorem10</div>
                                </div>
                            ) : (
                                <Fragment>
                                    <div>
                                            Vous n'êtes pas connecté, connectez vous ici :
                                    </div>
                                    <a style={{ color:'white' }}  href="/" >Me connecter</a>
                                </Fragment>
                                )}
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}


import { withTracker } from 'meteor/react-meteor-data';

export default withTracker(() => {
    return {
        user: Meteor.user(),
    };
})(Profile);