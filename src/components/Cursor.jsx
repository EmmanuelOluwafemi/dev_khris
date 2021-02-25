import React, { useState } from 'react';
import Styled from 'styled-components';

const Cursor = ({isWhite}) => {
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.clientX);
        setCursorY(e.clientY);
    })

    return (
        <CursorStyle className={isWhite ? "cursor-new isWhite" : "cursor-new"} style= {{
            left: cursorX + 'px',
            top: cursorY + 'px'
        }}> </CursorStyle>
    )
}

export default Cursor;

const CursorStyle = Styled.div`
    position: fixed;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #000;
    z-index: 8;
    top: 0;
    left: 0;
    pointer-events: none;
    transition: all .05s ease;

    &.isWhite {
        background: #fff;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;