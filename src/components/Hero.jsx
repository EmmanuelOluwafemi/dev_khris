import React from 'react';
import Styled from 'styled-components';
import Header from './Header';
import { Link } from 'react-router-dom';

import pen from '../assets/images/calligraphy-pen.svg';

const Hero = () => {
    return (
        <HeroStyle>
            <div className="container">
                <Header />

                <HeroContent>
                    <div className="topContent">
                        <Circle />
                        <p>Start Here</p>
                        <img src={pen} alt="calligraphy pen"/>
                    </div>

                    <div className="mainContent">
                        <p className="headingSmall">Hello friend, my name is <span>Adolphus Chris.</span></p>
                        <h6>Everything is designed. Either consciously or subconsciously. Our culture, society, and experiences are shaped by design.  
                            Design is at the heart of science, art and commerce. It is the one cord that pieces everything else together when done intentionally.</h6>
                        <h6>I am very particular about creating intentional designs, that addresses humans needs <span>(solves problems)</span> and meets business goals.</h6>
                    </div>

                    <div className="bottomContent">
                        <Circle />
                        <Link>View Selected Works</Link>
                        <img src={pen} alt="calligraphy pen"/>
                    </div>
                </HeroContent>
                {/* <Cursor /> */}
            </div>
        </HeroStyle>
    );
}

export default Hero;

const HeroStyle = Styled.div`
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    background: #EBF1FD;
`;

const HeroContent = Styled.div`
    width: 100%;
    height: 100%;
    margin-top: 4.5rem;

    @media (max-width: 768px) {
        margin-top: 2rem;
    }

    .topContent {
        display: flex;
        align-items: center;

        p {
            margin: 0;
            font-size: 0.75rem;
            font-weight: 400;
            line-height: 0;
            margin-left: 8px;
            color: #3F4A62;
        }

        img {
            margin-left: 8px;
        }
    }

    .mainContent {
        width: 100%;
        height: 100%;
        border-left: 1px solid #233A54;
        min-height: 70vh;
        margin-left: 6px;
        padding: 2.75rem 1.875rem;

        p {
            font-size: 1rem;
            font-weight: 400;
            color: #233A54;

            span {
                font-weight: 700;
                color: #1346B1;
            }

            &.headingSmall {
                margin-bottom: 3.5rem;
            }
        }

        h6 {
            font-size: 2rem;
            font-weight: 500;
            color: #233A54;

            span {
                color: rgba(35, 58, 84, 0.7);
            }

            &:last-child {
                margin-top: 3rem;
            }
        }

        @media (max-width: 768px) {
            padding: 2rem 1rem;

            h6 {
                font-size: 1.2rem;
                line-height: 1.5;
            }

            p {
                font-size: .9rem;

                &.headingSmall {
                    margin-bottom: 2rem;
                }
            }
        }
    }

    .bottomContent {
        display: flex;
        align-items: center;

        a {
            font-size: 1.5rem;
            margin-left: 1.5rem;
            font-weight: 400;
            margin-bottom: 1rem;
        }

        img {
            margin-bottom: 1rem;
            margin-left: 1rem;
        }

        @media (max-width: 768px) {
            a {
                font-size: 1rem;
            }
        }
    }
`;

const Circle = Styled.div`
    width: 12px;
    height: 12px;
    border: 1px solid #233A54;
    background: none;
    border-radius: 50%;
`;