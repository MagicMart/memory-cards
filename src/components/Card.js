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
    iconName,
    index,
    dispatch,
    state
}: {
    iconName: string,
    index: number,
    state: Object,
    dispatch: Function
}) {
    const Icon = iconsStore[iconName];
    const {opened, matched} = state;
    const handleDispatch = () => {
        opened.length < 4 &&
            opened.includes(index) === false &&
            matched.includes(iconName) === false &&
            dispatch({type: "open", payload: [index, iconName]});
    };
    return (
        <StyledCard
            open={opened.includes(index) || matched.includes(iconName)}
            matched={matched.includes(iconName)}
            onClick={handleDispatch}
        >
            <Icon className="icon" size={"50%"} />
        </StyledCard>
    );
}

type Props = {
    iconName: string,
    state: Object,
    dispatch: Function,
    index: number
};

export default React.memo<Props>(Card, (prevProps, nextProps) => {
    const {index} = prevProps;
    return (
        // Card will re-render when this evaluates to false
        prevProps.state.opened.includes(index) ===
        nextProps.state.opened.includes(index)
    );
});
