import React from "react";
import {FaStar, FaRedo} from "react-icons/fa";
import styled from "styled-components";

const StyledScorePanel = styled.div`
    display: flex;
    justify-content: space-evenly;
    font-size: 1.5rem;
    margin: 0.3em;
    padding: 0.3em;
`;

function ScorePanel({moves}) {
    return (
        <StyledScorePanel>
            <span>
                <FaStar />
            </span>
            <span>Moves {moves}</span>
            <span> Secs</span>
            <span>
                <FaRedo />
            </span>
        </StyledScorePanel>
    );
}

export default ScorePanel;
