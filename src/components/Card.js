// @flow

import React from "react";
import styled, {keyframes} from "styled-components";

const faceUp = keyframes`
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(180deg);
  }
`;

const faceDown = keyframes`
  from {
    transform: rotateY(180deg);
  }

  to {
    transform: rotateY(0deg);
  }
`;

const StyledCard = styled.div`
    animation: ${props => (props.open ? faceUp : faceDown)} 0.5s linear;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 23%;
    height: 23%;
    margin: 1%;
    background: ${props => (props.matched ? "green" : "#02b3e4")}
    border-radius: 15px;
    border: 1px solid grey;
    .icon {
        animation: inherit;
        color: ${props => (props.open || props.matched ? "white" : "#02b3e4")}
    }
`;

function Card({Icon, name, index, dispatch, state}: {Icon: Object}) {
    return (
        <StyledCard
            open={state.open.includes(index) || state.matched.includes(name)}
            matched={state.matched.includes(name)}
            onClick={() =>
                state.open.length < 4 &&
                state.open.includes(index) === false &&
                state.matched.includes(name) === false &&
                dispatch({type: "open", payload: [index, name]})
            }
        >
            <Icon className="icon" size={45} />
        </StyledCard>
    );
}

export default Card;
