import React, {useState} from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';
import Cursor from './Cursor';

import { IoCloseCircleOutline } from 'react-icons/io5';

const Header = () => {
    const [onMenu, setOnMenu] = useState(false);
    const [toggle, setToggler] = useState(false);
    const [onSocial, setOnSocial] = useState(false);
    const [onLinks, setOnLinks] = useState(false);

    const handleMenuOver = () => {
        setOnMenu(true);
    }

    const handleSocialOver = () => {
        setOnSocial(true);
    }

    const handleLinksOver = () => {
        setOnLinks(true);
    }

    const handleToggler = () => {
        setToggler(true);
    }

    const handleMenuLeave = () => {
        setOnMenu(false);
    }

    const handleSocialLeave = () => {
        setOnSocial(false);
    }

    const handleLinksLeave = () => {
        setOnLinks(false);
    }

    const closeToggle = () => {
        setToggler(false);
    }

    return (
        <HeaderStyle>
            <Link to="/" className="logo">Adolphus Chris.</Link>
            <div onClick={handleToggler} className="menu-container it-hover hoverAnimation">
                <div className="menu"></div>
            </div>

            <div onClick={closeToggle} className={toggle ? "overlay show" : "overlay"}></div>
            <div className={toggle ? "menu-list show" : "menu-list"}>
                <div className="menu-content">
                    <IoCloseCircleOutline onMouseOver={handleMenuOver} onMouseLeave={handleMenuLeave} onClick={closeToggle} className="closeIcons it-hover" />
                    {onMenu && <Cursor />}

                    <div className="row">
                        <div className="col-6 social">
                            <p>Socials:</p>
                            <Link onMouseOver={handleSocialOver} onMouseLeave={handleSocialLeave} className="it-hover-new hoverAnimation">Linkedin</Link>
                            <Link onMouseOver={handleSocialOver} onMouseLeave={handleSocialLeave} className="it-hover-new hoverAnimation">Dribbble</Link>
                            <Link onMouseOver={handleSocialOver} onMouseLeave={handleSocialLeave} className="it-hover-new hoverAnimation">Twitter</Link>
                            <Link onMouseOver={handleSocialOver} onMouseLeave={handleSocialLeave} className="it-hover-new hoverAnimation">Medium</Link>
                            <Link onMouseOver={handleSocialOver} onMouseLeave={handleSocialLeave} className="it-hover-new hoverAnimation">ADPList</Link>
                            <Link onMouseOver={handleSocialOver} onMouseLeave={handleSocialLeave} className="it-hover-new hoverAnimation">Youtube</Link>
                            {onSocial && <Cursor />}
                        </div>
                        <div className="col-6 links">
                            <p>Quick Links:</p>
                            <Link onMouseOver={handleLinksOver} onMouseLeave={handleLinksLeave} className="it-hover-new hoverAnimation">My Works</Link>
                            <Link onMouseOver={handleLinksOver} onMouseLeave={handleLinksLeave} className="it-hover-new hoverAnimation">About Me</Link>
                            <Link to="/contact" onMouseOver={handleLinksOver} onMouseLeave={handleLinksLeave} className="it-hover-new hoverAnimation">Contact Me</Link>
                            {onLinks && <Cursor />}
                        </div>

                        <div className="header-contact">
                            <p>Let’s connect</p>
                            <Link>hello@adolphuschris.com</Link>
                        </div>
                    </div>
                </div>
            </div>

            {!onMenu || !onSocial || !onLinks ? <Cursor /> : ''}
        </HeaderStyle>
    )
}

export default Header;

const HeaderStyle = Styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
        font-family: 'TT Norms Pro Medium', sans-serif;
        font-weight: 500;
        font-size: 1rem;
        line-height: 24px;
        color: #1346B1;
        text-decoration: none;
    }

    .menu-container {
        cursor: pointer;
        padding: 1rem;
        
        .menu {
            width: 25px;
            height: 12px;
            background: none;
            border-top: 2px solid #000000;
            border-bottom: 2px solid #000000;
        }
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 2;
        background: rgba(238,238,238,.7);
        opacity: 0;
        transition: opacity .6s ease-out;
        pointer-events: none;

        &.show {
            opacity: 1;
            pointer-events: auto;
        }
    }

    .menu-list {
        position: fixed;
        top: 0;
        width: 100%;
        max-width: 689px;
        height: 100vh;
        z-index: 3;
        background: #fff;
        right: -100%;
        transition: all 1s ease-in-out;

        &.show {
            right: 0;
        }
        
        .menu-content {
            position: relative;
            width: 100%;
            height: 100%;
            padding: 8.125rem 7.5rem;

            @media (max-width: 768px) {
                padding: 7rem 2rem;
            }

            .closeIcons {
                position: absolute;
                font-size: 2rem;
                color: #000;
                top: 2rem;
                right: 2.5rem;
                cursor: pointer;
            }

            .row {
                position: relative;

                .header-contact {
                    position: absolute;
                    bottom: -70%;

                    @media (max-width: 768px) {
                        bottom: -50%;
                    }

                    a {
                        font-size: 1rem;
                        font-weight: 400;
                        color: #161927;
                        line-height: 24px;
                    }
                }

                p {
                    font-size: 0.75rem;
                    font-weight: 300;
                    color: #7A7C87;
                    line-height: 24px;
                }

                .social {
                    a {
                        display: block;
                        font-size: 1rem;
                        font-weight: 400;
                        color: #161927;
                        margin-bottom: 1rem;
                        text-decoration: none;
                        max-width: 70px;
                    }
                }

                .links {
                    a {
                        display: block;
                        font-size: 2rem;
                        font-weight: 400;
                        line-height: 48px;
                        color: #161927;
                        margin-bottom: 2rem;
                        

                        @media (max-width: 768px) {
                            font-size: 1.4rem;
                        }
                    }
                }
            }
        }
    }
`;