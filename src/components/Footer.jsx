import React, { useState } from 'react';
// import Cursor from './Cursor';
import {Link} from 'react-router-dom';
import Styled from 'styled-components';
import Cursor from './Cursor';

const Footer = () => {

    const [onFooterContent, setOnFooterContent] = useState(false);
    const [onFooter, setOnFooter] = useState(false);

    const handleFooterContentOver = () => {
        setOnFooterContent(true);
        console.log('over over')
    }

    const handleFooterContentLeave = () => {
        setOnFooterContent(false);
    }

    const handleFooterOver = () => {
        setOnFooter(true);
    }

    const handleFooterLeave = () => {
        setOnFooter(false);
    }

    return (
        <>
        <FooterStyle onMouseOver={handleFooterOver} onMouseLeave={handleFooterLeave} className="it-hover-black-new">
            <div className="container">
                <h1>Have an interesting idea?</h1>
                <Link>Tell me about it.</Link>

                <div className="contact-info">
                    <div className="contact">
                        <p>Let’s connect</p>
                        <Link>hello@adolphuschris.com</Link>
                    </div>

                    <div className="social">
                        <p>Social</p>
                        <div className="social-links">
                            <div className="links">
                                <Link onMouseOver={handleFooterContentOver} onMouseLeave={handleFooterContentLeave} className="it-hover-black">Linkedin</Link>
                                <Link onMouseOver={handleFooterContentOver} onMouseLeave={handleFooterContentLeave} className="it-hover-black">Dribbble</Link>
                                <Link onMouseOver={handleFooterContentOver} onMouseLeave={handleFooterContentLeave} className="it-hover-black">Twitter</Link>
                                <Link onMouseOver={handleFooterContentOver} onMouseLeave={handleFooterContentLeave} className="it-hover-black">Medium</Link>
                                <Link onMouseOver={handleFooterContentOver} onMouseLeave={handleFooterContentLeave} className="it-hover-black">ADPList</Link>
                                <Link onMouseOver={handleFooterContentOver} onMouseLeave={handleFooterContentLeave} className="it-hover-black">Youtube</Link>
                                {onFooterContent && <Cursor />}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-note">© 2021 Adolphus Chris. All rights reserved</div>
            </div>
            {onFooter && <Cursor isWhite />}
        </FooterStyle>
        </>
    )
}

export default Footer;

const FooterStyle = Styled.div`
    background: #161927;
    height: 100vh;
    max-width: 100vw;
    width: 100%;

    .container {
        h1 {
            color: #fff;
            font-family: 'TT Norms Pro Regular', sans-serif;
            font-weight: 400;
            font-size: 5rem;
            margin-bottom: 1rem;
            padding-top: 7rem;

            @media (max-width: 768px) {
                font-size: 2.6rem;
                padding-top: 2rem;
            }
        }

        a {
            color: #B7B8BC;
            font-family: 'TT Norms Pro Thin', sans-serif;
            font-weight: 300;
            font-size: 5rem;
            line-height: 6rem;

            @media (max-width: 768px) {
                font-size: 2rem;
                line-height: 4rem;
            }
        }

        .contact-info {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-direction: row;
            margin-top: 7rem;

            @media (max-width: 768px) {
                flex-direction: column;
                margin-top: 2rem;
            }

            .contact {
                p {
                    color: #F2F1F0;
                    margin-bottom: 8px;

                    @media (max-width: 768px) {
                        font-size: 0.8rem;
                    }
                }

                a {
                    font-size: 1.5rem;
                    font-family: 'TT Norms Pro Regular';
                    color: #F5F5F5;
                    text-decoration: none;
                    line-height: 32px;

                    @media (max-width: 768px) {
                        font-size: 1rem;
                    }
                }
            }

            .social {
                margin-left: auto;
                max-width: 400px;
                width: 100%;

                p {
                    color: #F2F1F0;
                    margin-bottom: 8px; 

                    @media (max-width: 768px) {
                        font-size: 0.8rem;
                        margin-top: 1.2rem;
                    }
                }

                .social-links {
                    width: 100%;
                    
                    .links {
                        align-items: center;
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;

                        a {
                            font-family: 'TT Norms Pro Regular';
                            font-size: 1.5rem;
                            color: #F5F5F5;
                            text-decoration: none;
                            line-height: 32px;
                            margin-bottom: 2rem;
                            min-width: 120px;

                            @media (max-width: 768px) {
                                font-size: 1rem;
                                min-width: 80px;
                            }
                        }
                    }

                }
            }
        }

        .footer-note {
            color: #fff;
            font-size: 0.875rem;
            font-family: 'TT Norms Pro Thin';
            margin-top: 1rem;
            width: 100%;
            text-align: center;
        }
    }
`;