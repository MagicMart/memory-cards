// @flow

import React from "react";
import styled, {keyframes} from "styled-components";
import {
    FaBug,
    FaCoffee,
    FaUserSecret,
    FaMicrochip,
    FaBath,
    FaFireExtinguisher,
    FaKeyboard,
    FaCode
} from "react-icons/fa";

const iconsStore = {
    FaBug,
    FaCoffee,
    FaUserSecret,
    FaMicrochip,
    FaBath,
    FaFireExtinguisher,
    FaKeyboard,
    FaCode
};

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
    background: ${props => (props.matched ? "green" : "#02b3e4")};
    border-radius: 15px;
    border: 1px solid grey;
    .icon {
        animation: inherit;
        color: ${props => (props.open || props.matched ? "white" : "#02b3e4")};
    }
`;

function Card({
    icon,
    index,
    dispatch,
    state
}: {
    icon: string,
    index: number,
    state: Object,
    dispatch: Function
}) {
    const Icon = iconsStore[icon];
    const {open, matched} = state;
    const handleDispatch = () => {
        open.length < 4 &&
            open.includes(index) === false &&
            matched.includes(icon) === false &&
            dispatch({type: "open", payload: [index, icon]});
    };
    return (
        <StyledCard
            open={open.includes(index) || matched.includes(icon)}
            matched={matched.includes(icon)}
            onClick={handleDispatch}
        >
            <Icon className="icon" size={"50%"} />
        </StyledCard>
    );
}

type Props = {
    icon: string,
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
