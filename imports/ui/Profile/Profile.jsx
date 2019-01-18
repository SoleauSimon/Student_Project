import React, {Component, Fragment} from 'react';
import './profile.css';

class Profile extends Component {
    render() {
        return(
        
            <Fragment>
                <a className="backHome" href="/">Revenir sur la home</a>
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
                            <div className="dataBlock">
                                <h3 className="dataBlockTitle">NOM</h3>
                                <div className="dataBlockContent">lorem10</div>
                                <h3 className="dataBlockTitle">Prénom</h3>
                                <div className="dataBlockContent">lorem10</div>
                                <h3 className="dataBlockTitle">E-mail</h3>
                                <div className="dataBlockContent">lorem10</div>
                                <h3 className="dataBlockTitle">Lien github</h3>
                                <div className="dataBlockContent">lorem10</div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Profile