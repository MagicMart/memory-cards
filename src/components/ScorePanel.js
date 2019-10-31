// @flow

import React from "react";
import {FaStar, FaRedo} from "react-icons/fa";
import styled from "styled-components";
import Secs from "./Secs";

const StyledScorePanel = styled.div`
    display: flex;
    justify-content: space-evenly;
    font-size: 1.5rem;
    font-family: monospace;
    margin: 0.3em;
    padding: 0.3em;
`;

function ScorePanel({
    moves,
    matched,
    dispatch
}: {
    moves: number,
    matched: Array<string>,
    dispatch: Function
}) {
    return (
        <StyledScorePanel>
            <span>
                <FaStar />
            </span>
            <span>Moves {moves}</span>
            {moves > 0 ? (
                <Secs moves={moves} matched={matched} />
            ) : (
                <span>Secs 000</span>
            )}

            <span onClick={() => dispatch({type: "reset"})}>
                <FaRedo />
            </span>
        </StyledScorePanel>
    );
}

export default ScorePanel;
