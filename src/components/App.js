// @flow

import React from "react";
import Card from "./Card";
import ScorePanel from "./ScorePanel";
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
    width: 500px;
    margin: 0 auto;
`;

const Title = styled.h1`
    text-align: center;
    margin: 0.3em 0;
`;

const CardContainer = styled.div`
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

const reducer = (state, action) => {
    switch (action.type) {
        case "open":
            state = {
                ...state,
                open: [...state.open, ...action.payload],
                moves: state.moves + 1
            };
            return state;
        case "close":
            state = {...state, open: []};
            return state;
        case "matched":
            state = {...state, matched: [...state.matched, action.payload]};
            return state;
        case "move":
            state = {...state, moves: state.moves + 1};
            return state;
        default:
            throw new Error();
    }
};

function App() {
    const [icons, setIcons] = React.useState(() => shuffleArr(iconsArr));
    const [state, dispatch] = React.useReducer(reducer, {
        open: [],
        matched: [],
        moves: 0
    });
    React.useEffect(() => {
        if (state.open.length === 4) {
            if (state.open[1] === state.open[3]) {
                dispatch({type: "matched", payload: state.open[1]});
            }
            setTimeout(() => {
                dispatch({type: "close"});
            }, 600);
        }
    }, [state.open]);
    return (
        <React.Fragment>
            <Title>Memory Game Cards</Title>
            <Container>
                <ScorePanel moves={state.moves} />
            </Container>
            <CardContainer>
                {icons.map((icon, i) => (
                    <Card
                        key={i + icon.name}
                        Icon={icon}
                        name={icon.name}
                        index={i}
                        dispatch={dispatch}
                        state={state}
                    />
                ))}
                <button onClick={() => setIcons(icons => shuffleArr(icons))}>
                    Shuffle
                </button>
            </CardContainer>
        </React.Fragment>
    );
}

export default App;
