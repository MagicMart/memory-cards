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
    width: 500px;
    height: 500px;
    margin: 0 auto;
    padding: 7px;
    background: #03fcf0;
    border-radius: 15px;
    box-shadow: 5px 5px 5px grey;
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
