// @flow

import React from "react";
import Card from "./Card";
import styled from "styled-components";
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

const iconsArr = [
    FaBug,
    FaBug,
    FaCoffee,
    FaCoffee,
    FaUserSecret,
    FaUserSecret,
    FaMicrochip,
    FaMicrochip,
    FaBath,
    FaBath,
    FaFireExtinguisher,
    FaFireExtinguisher,
    FaKeyboard,
    FaKeyboard,
    FaCode,
    FaCode
];

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 600px;
    background: green;
    margin: 0 auto;
`;

const shuffleArr = arr => [...arr.sort(() => 0.5 - Math.random())];

function App() {
    const [icons, setIcons] = React.useState(() => shuffleArr(iconsArr));
    return (
        <Container>
            {icons.map((icon, i) => (
                <Card key={i + icon} Icon={icon} />
            ))}
            <button onClick={() => setIcons(icons => shuffleArr(icons))}>
                Shuffle
            </button>
        </Container>
    );
}

export default App;
