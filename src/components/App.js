// @flow

import React from "react";
import styled from "styled-components";

import Card from "./Card";
import ScorePanel from "./ScorePanel";
import EndGame from "./EndGame";

const iconsArr = [
    "FaBug",
    "FaBug",
    "FaCoffee",
    "FaCoffee",
    "FaUserSecret",
    "FaUserSecret",
    "FaMicrochip",
    "FaMicrochip",
    "FaBath",
    "FaBath",
    "FaFireExtinguisher",
    "FaFireExtinguisher",
    "FaKeyboard",
    "FaKeyboard",
    "FaCode",
    "FaCode"
];

const Container = styled.div`
    width: 500px;
    margin: 0 auto;
    @media (max-width: 500px) {
        width: 100vw;
    }
`;

const Title = styled.h1`
    text-align: center;
    font-size: 1.75rem;
    margin: 0.3em 0;
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: inherit;
    height: 500px;
    @media (max-width: 500px) {
        height: 100vw;
    }
    padding: 1%;
    background: #03fcf0;
    border-radius: 15px;
    box-shadow: 5px 5px 5px grey;
`;

const shuffleArr = arr => [...arr].sort(() => 0.5 - Math.random());

const reducer = (state, action) => {
    switch (action.type) {
        case "open":
            if (state.opened.length === 4) {
                return state;
            }
            return {
                ...state,
                opened: [...state.opened, ...action.payload],
                moves: state.moves === -1 ? 0 : state.moves
            };

        case "close":
            return {...state, opened: [], moves: state.moves + 1};

        case "matched":
            return {
                ...state,
                matched: [...state.matched, action.payload]
            };

        case "reset":
            return {
                icons: [],
                opened: [],
                matched: [],
                moves: -1
            };

        case "icons":
            return {...state, icons: action.payload};
        default:
            throw new Error();
    }
};

function App() {
    const [state, dispatch] = React.useReducer(reducer, {
        icons: [],
        opened: [],
        matched: [],
        moves: -1
    });

    React.useEffect(() => {
        if (state.icons.length === 0) {
            dispatch({
                type: "icons",
                payload: shuffleArr(shuffleArr(iconsArr))
            });
        }
    }, [state.icons]);

    React.useEffect(() => {
        if (state.opened.length === 4) {
            if (state.opened[1] === state.opened[3]) {
                dispatch({type: "matched", payload: state.opened[1]});
            }
            setTimeout(() => {
                dispatch({type: "close"});
            }, 500);
        }
    }, [state.opened]);
    return (
        <Container>
            {state.matched.length === 8 && (
                <EndGame matched={state.matched} dispatch={dispatch} />
            )}
            <Title>Memory Game Cards</Title>
            <ScorePanel
                moves={state.moves}
                matched={state.matched}
                dispatch={dispatch}
            />
            <CardContainer>
                {state.icons.map((icon, i) => (
                    <Card
                        iconName={icon}
                        key={i + icon}
                        index={i}
                        dispatch={dispatch}
                        state={state}
                    />
                ))}
            </CardContainer>
        </Container>
    );
}

export default App;
