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
    background: ${props => (props.matched ? "green" : "#02b3e4")};
    border-radius: 15px;
    border: 1px solid grey;
    .icon {
        animation: inherit;
        color: ${props => (props.open || props.matched ? "white" : "#02b3e4")};
    }
`;

function Card({
    index,
    dispatch,
    state
}: {
    index: number,
    state: Object,
    dispatch: Function
}) {
    const {open, matched, icons} = state;
    const Icon = icons[index];
    const name = icons[index].name;
    console.count(`render card ${index}`);
    const handleDispatch = () => {
        open.length < 4 &&
            open.includes(index) === false &&
            matched.includes(name) === false &&
            dispatch({type: "open", payload: [index, name]});
    };
    return (
        <StyledCard
            open={open.includes(index) || matched.includes(name)}
            matched={matched.includes(name)}
            onClick={handleDispatch}
        >
            <Icon className="icon" size={45} />
        </StyledCard>
    );
}

type Props = {
    state: Object,
    dispatch: Function,
    index: number
};

export default React.memo<Props>(Card, (prevProps, nextProps) => {
    const {index} = prevProps;
    return (
        // Card will re-render when this evaluates to false
        prevProps.state.open.includes(index) ===
        nextProps.state.open.includes(index)
    );
});
