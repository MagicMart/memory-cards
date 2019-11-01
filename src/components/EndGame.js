// @flow

import React from "react";
import styled from "styled-components";
import {FaWindowClose} from "react-icons/fa";

const StyledEndGame = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding-top: 25vh;
    overflow: auto;
    background-color: rgba(46, 61, 73, 0.4);
    .message {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.5rem;
        width: 80%;
        @media (max-width: 500px) {
            width: 98%;
        }
        margin: auto;
        padding: 0.5em;
        border: 1px solid black;
        background-color: rgba(255, 255, 255, 0.6);
    }
`;

function EndGame({
    matched,
    dispatch
}: {
    matched: Array<string>,
    dispatch: Function
}) {
    if (matched.length !== 8) {
        return null;
    }
    return (
        <StyledEndGame>
            <div className="message">
                <span>End of Game </span>
                <span>
                    <FaWindowClose
                        size={"48px"}
                        onClick={() => dispatch({type: "reset"})}
                    />
                </span>
            </div>
        </StyledEndGame>
    );
}

export default EndGame;
