// @flow

import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 24%;
`;

function Card({Icon}: {Icon: Object}) {
    return (
        <Container>
            <Icon size={40} />
        </Container>
    );
}

export default Card;
