// @flow

import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 23%;
    height: 23%;
    background: red;
    margin: 1%;
`;

function Card({Icon}: {Icon: Object}) {
    return (
        <Container>
            <Icon size={40} />
        </Container>
    );
}

export default Card;
