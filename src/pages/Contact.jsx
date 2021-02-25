import React, { useState } from 'react';
import Styled from 'styled-components';
import Cursor from '../components/Cursor';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Contact = () => {

    const [onSelectOption, setOnSelectOption] = useState(false);
    const [selectOption, setSelectOption] = useState([])
    const [endToEnd ,setEndToEnd] = useState(false);
    const [designSystem ,setDesignSystem] = useState(false);
    const [userResearch ,setUserResearch] = useState(false);
    const [uxDesign ,setUxDesign] = useState(false);
    const [fullTime ,setFullTime] = useState(false);
    const [contract ,setContract] = useState(false);
    const [mentorShip ,setMentorShip] = useState(false);
    const [speaking ,setSpeaking] = useState(false);
    const [consultation ,setConsultation] = useState(false);

    const handleLinksOver = () => {
        setOnSelectOption(true);
    }

    const handleLinksLeave = () => {
        setOnSelectOption(false);
    }

    const handleOnclick = (e) => {
        let selected = selectOption;
        let value = e.target.textContent;

        switch (value){
            case 'End-To-End Product Design':
                setEndToEnd(!endToEnd);
                break;
            case 'Design System/Style Guide':
                setDesignSystem(!designSystem);
                break;
            case 'User Research':
                setUserResearch(!userResearch);
                break;
            case 'UX Design':
                setUxDesign(!uxDesign);
                break;
            case 'Full Time Engagement':
                setFullTime(!fullTime);
                break;
            case 'Contract Engagement':
                setContract(!contract);
                break;
            case 'Mentorship':
                setMentorShip(!mentorShip);
                break;
            case 'Speaking Engagemnet':
                setSpeaking(!speaking);
                break;
            case 'Consultation':
                setConsultation(!consultation);
                break;
            default:
                break;
        }

        if (!selected.includes(value)) {
            selected.push(value);
            setSelectOption(selected);
            console.log(selectOption);
        }
    }

    return (
        <>
        <ContactStyle>
            <div className="container">
                <Header />
                <h1>Tell me how I can help.</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="inputContainer">
                            <input type="text" placeholder="Name" />
                            <div className="bottomBlock"></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="inputContainer">
                            <input type="email" placeholder="Email" />
                            <div className="bottomBlock"></div>
                        </div>
                    </div>
                </div>
                <div className="inputGroup">
                    <p>Please select the boxes that applies</p>
                    <div className="selectOption">
                        <div className={endToEnd ? "select it-hover-select active": "select it-hover-select"} onClick={handleOnclick} onMouseOver={handleLinksOver} onMouseLeave={handleLinksLeave}>End-To-End Product Design</div>
                        <div className={designSystem ? "select it-hover-select active": "select it-hover-select"} onClick={handleOnclick} onMouseOver={handleLinksOver} onMouseLeave={handleLinksLeave}>Design System/Style Guide</div>
                        <div className={userResearch ? "select it-hover-select active": "select it-hover-select"} onClick={handleOnclick} onMouseOver={handleLinksOver} onMouseLeave={handleLinksLeave}>User Research</div>
                        <div className={uxDesign ? "select it-hover-select active": "select it-hover-select"} onClick={handleOnclick} onMouseOver={handleLinksOver} onMouseLeave={handleLinksLeave}>UX Design</div>
                        <div className={fullTime ? "select it-hover-select active": "select it-hover-select"} onClick={handleOnclick} onMouseOver={handleLinksOver} onMouseLeave={handleLinksLeave}>Full Time Engagement</div>
                        <div className={contract ? "select it-hover-select active": "select it-hover-select"} onClick={handleOnclick} onMouseOver={handleLinksOver} onMouseLeave={handleLinksLeave}>Contract Engagement</div>
                        <div className={mentorShip ? "select it-hover-select active": "select it-hover-select"} onClick={handleOnclick} onMouseOver={handleLinksOver} onMouseLeave={handleLinksLeave}>Mentorship</div>
                        <div className={speaking ? "select it-hover-select active": "select it-hover-select"} onClick={handleOnclick} onMouseOver={handleLinksOver} onMouseLeave={handleLinksLeave}>Speaking Engagemnet</div>
                        <div className={consultation ? "select it-hover-select active": "select it-hover-select"} onClick={handleOnclick} onMouseOver={handleLinksOver} onMouseLeave={handleLinksLeave}>Consultation</div>

                        {onSelectOption && <Cursor />}
                    </div>
                </div>
                <button type="submit">Send Message</button>
            </div>
        </ContactStyle>
        <Footer />
        </>
    )
}

export default Contact;

const ContactStyle = Styled.div`
    background: #EBF1FD;
    min-height: 100vh;
    max-width: 100vw;
    width: 100%;

    .container {
        h1 {
            font-family: 'TT Norms Pro Regular', sans-serif;
            font-size: 3rem;
            color: #161927;
            margin-top: 2.5rem;
        }

        .row {
            margin-top: 3rem;

            .inputContainer {
                position: relative;
                max-width: 312px;
                
                .bottomBlock {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    /* transform: translate(-50%, -50%); */
                    width: 0%;
                    height: 2px;
                    background: #000; 
                    transition: all .4s ease-in;
                }

                input {
                    background: none;
                    border: none;
                    border-bottom: 1px solid rgba(116, 124, 134, 0.8);
                    font-family: 'TT Norms Pro Regular', sans-serif;
                    font-size: 1.5rem;
                    outline: none;
                    width: 100%;
                    padding: 8px 0;
                    &:hover {
                        border-bottom: 1px solid rgb(63, 68, 75);
                    }
    
    
                    @media (max-width: 768px) {
                        margin-bottom: 1rem;
                    }
                }

                input:focus ~ .bottomBlock {
                    width: 100%;
                }

            }


        }

        .inputGroup {
            margin-top: 3.5rem;

            p {
                color: #747C86;
                font-family: 'TT Norms Pro Regular', sans-serif;
                font-size: 1rem;
                line-height: 1.5rem;
                margin: 0;
                margin-bottom: 2rem;
            }

            .selectOption {
                display: flex;
                flex-wrap: wrap;

                .select {
                    background: #EBF1FD;
                    border: 1px solid #747C86;
                    border-radius: 100px;
                    cursor: pointer;
                    font-family: 'TT Norms Pro Regular', sans-serif;
                    margin-right: 1.5rem;
                    margin-bottom: 2rem;
                    padding: 1.5rem 2rem;
                    transition: all .6s ease-in-out;

                    @media (max-width: 768px) {
                        border-radius: 50px;
                        font-family: 'TT Norms Pro Regular', sans-serif;
                        font-size: .7rem;
                        margin-right: .5rem;
                        margin-bottom: 1rem;
                        padding: 1rem 1rem;
                    }

                    &.active {
                        background: #161927;
                        color: #fff;
                    }
                }
            }
        }

        button {
            background: none;
            border: none;
            color: #161927;
            font-family: 'TT Norms Pro Regular', sans-serif;
            font-size: 1.5rem;
            line-height: 2rem;
            text-decoration: underline;
            margin-bottom: 1rem;
        }
    }
`;