// @flow

import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 23%;
    height: 23%;
    margin: 1%;
    background: #02b3e4;
    color: black;
    border-radius: 15px;
    box-shadow: 5px 5px 5px grey;
`;

function Card({Icon}: {Icon: Object}) {
    return (
        <Container>
            <Icon size={45} />
        </Container>
    );
}

export default Card;
