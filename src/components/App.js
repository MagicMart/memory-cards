// @flow

import React from "react";
import Card from "./Card";
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

const shuffleArr = arr => [...arr.sort(() => 0.5 - Math.random())];

function App() {
    const [icons, setIcons] = React.useState(() => shuffleArr(iconsArr));
    return (
        <div>
            {icons.map((icon, i) => (
                <Card key={i + icon} Icon={icon} />
            ))}
            <button onClick={() => setIcons(icons => shuffleArr(icons))}>
                Shuffle
            </button>
        </div>
    );
}

export default App;
