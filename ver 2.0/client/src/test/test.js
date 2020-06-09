import React from "react";
import ReactDOM from "react-dom";
import { Cus } from "./reducer";

import { StateInspector, useState, useReducer } from "reinspect";

function CounterFunState() {
    const [sum1, setSum1] = useState(100, "Sum1State");
    return (
        <>
            {sum1}
            <button onClick={() => setSum1(sum1 + 1)}>Add 1 state</button>&nbsp;&nbsp;<b>with useState</b>
        </>
    );
}

function CounterFunReducer() {
    const { sum2, a } = Cus();

    return (
        <>
            {sum2}
            <button onClick={() => a(1, 2)}>Add 5 reducer</button>&nbsp;&nbsp;<b>with useReducer</b>
        </>
    );
}

function test() {
    return (
        <>
            <StateInspector name="App">
                <h1>StateInspector</h1>
                <CounterFunState />
                <br />
                <br />
                <CounterFunReducer />
                <br />
                <br />
            </StateInspector>
        </>
    );
}

export default test;
