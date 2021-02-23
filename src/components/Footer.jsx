import React from 'react';
import {Link} from 'react-router-dom';
import Styled from 'styled-components';

const Footer = () => {
    return (
        <FooterStyle>
            <div className="container">
                <h1>Have an interesting idea?</h1>
                <Link>Tell me about it.</Link>

                <div className="contact-info row">
                    <div className="contact col-md-6">
                        <p>Let’s connect</p>
                        <Link>hello@adolphuschris.com</Link>
                    </div>

                    <div className="social col-md-6">
                        <p>Social</p>
                        <div className="social-links">
                            <div className="links">
                                <Link>Linkedin</Link>
                                <Link>Dribbble</Link>
                                <Link>Twitter</Link>
                            </div>
                            <div className="links">
                                <Link>Medium</Link>
                                <Link>ADPList</Link>
                                <Link>Youtube</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-note">© 2021 Adolphus Chris. All rights reserved</div>
            </div>
        </FooterStyle>
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
            font-weight: 400;
            font-size: 5rem;
            margin-bottom: 1rem;
            padding-top: 7.8125rem;
        }

        a {
            color: #B7B8BC;
            font-size: 5rem;
            font-weight: 300;
            line-height: 6rem;
        }

        .contact-info {
            .contact {
                a {
                    font-size: 1.5rem;
                    color: #fff;
                    text-decoration: none;
                }
            }

            .social {
                margin-left: auto;
                max-width: 400px;

                p {
                    margin-bottom: 0; 
                }

                .social-links {
                    width: 100%;
                    
                    .links {
                        align-items: center;
                        display: flex;
                        justify-content: space-between;

                        a {
                            font-size: 1.5rem;
                            color: #fff;
                            text-decoration: none;
                            line-height: 32px;ya
                        }
                    }

                }
            }
        }
    }
`;