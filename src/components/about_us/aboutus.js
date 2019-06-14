import React from 'react';
import './aboutus.scss';
import David from '../../../public/dist/images/david.jpg';
import Johnny from '../../../public/dist/images/johnny.jpg';
import Alice from '../../../public/dist/images/alice.jpg';
import Jaime from '../../../public/dist/images/jaime.jpg';
import Github from '../../../public/dist/images/github-sign.png';
import Linkedin from '../../../public/dist/images/linkedin-sign.png';
import Portfolio from '../../../public/dist/images/folder.png';
import { NavLink } from 'react-router-dom';

export default props => {
    return (
        <div className="meetTheTeamPage">
            <div className="aboutUsNav fixed-top">
                <div className="navLogo">Run-Tracker</div>
                <NavLink className="nav-link-home" to="/">
                    <span className="oi" data-glyph="home"></span>
                </NavLink>
                <NavLink className="nav-link-aboutus" to="/aboutus">
                    <span className="oi" data-glyph="people"></span>
                </NavLink>
                <NavLink className="nav-link-logout" to="/account/logout">
                    <span className="oi" data-glyph="account-logout"></span>
                </NavLink>
            </div>
            <div className="meetTheTeamContainer">
                <div className="meetTheTeam">Meet the Team</div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-0 shadow">
                                <img src={David} className="card-img-top" alt="David" />
                                <div className="card-body text-center">
                                    <h3 className="card-title mb-0">David Lee</h3>
                                    <div className="card-text text-black-50">Web Developer</div>
                                    <div className="icon-container">
                                        <a href="https://www.linkedin.com/in/david-lee-1a3a3b179/" target="_blank">
                                            <img src={Linkedin} className="linkedinIcon" />
                                        </a>
                                        <a href="https://github.com/Davideuijinlee" target="_blank">
                                            <img src={Github} className="githubIcon" />
                                        </a>
                                        <a href="http://davidelee.net/" target="_blank">
                                            <img src={Portfolio} className="portfolioIcon" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-0 shadow">
                                <img src={Johnny} className="card-img-top" alt="Johnny" />
                                <div className="card-body text-center">
                                    <h3 className="card-title mb-0">Johnny Pham</h3>
                                    <div className="card-text text-black-50">Web Developer</div>
                                    <div className="icon-container">
                                        <a href="https://www.linkedin.com/in/johnny-pham-ucsb/" target="_blank">
                                            <img src={Linkedin} className="linkedinIcon" />
                                        </a>
                                        <a href="https://github.com/jmp1234" target="_blank">
                                            <img src={Github} className="githubIcon" />
                                        </a>
                                        <a href="https://johnnypham.net/" target="_blank">
                                            <img src={Portfolio} className="portfolioIcon" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-0 shadow">
                                <img src={Alice} className="card-img-top" alt="Alice" />
                                <div className="card-body text-center">
                                    <h3 className="card-title mb-0">Alice Le</h3>
                                    <div className="card-text text-black-50">Web Developer</div>
                                    <div className="icon-container">
                                        <a href="https://www.linkedin.com/in/alice-le-65ba4b6a/" target="_blank">
                                            <img src={Linkedin} className="linkedinIcon" />
                                        </a>
                                        <a href="https://github.com/lealice927" target="_blank">
                                            <img src={Github} className="githubIcon" />
                                        </a>
                                        <a href="https://alicele.dev/" target="_blank">
                                            <img src={Portfolio} className="portfolioIcon" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-0 shadow">
                                <img src={Jaime} className="card-img-top" alt="Jaime" />
                                <div className="card-body text-center">
                                    <h3 className="card-title mb-0">Jaime Kim</h3>
                                    <div className="card-text text-black-50">Web Developer</div>
                                    <div className="icon-container">
                                        <a href="https://www.linkedin.com/in/myk1118/" target="_blank">
                                            <img src={Linkedin} className="linkedinIcon" />
                                        </a>
                                        <a href="https://github.com/myk1118" target="_blank">
                                            <img src={Github} className="githubIcon" />
                                        </a>
                                        <a href="http://jaimekim.info/" target="_blank">
                                            <img src={Portfolio} className="portfolioIcon" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}