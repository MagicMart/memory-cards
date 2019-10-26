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
    background: #02b3e4;
    border-radius: 15px;
    border: 1px solid grey;
    .icon {
        animation: inherit;
    }
`;

function Card({Icon}: {Icon: Object}) {
    const [openCard, setOpenCard] = React.useState(false);
    console.log("render");
    return (
        <StyledCard open={openCard} onClick={() => setOpenCard(c => !c)}>
            <Icon
                className="icon"
                size={45}
                color={openCard ? "white" : "#02b3e4"}
            />
        </StyledCard>
    );
}

export default Card;
