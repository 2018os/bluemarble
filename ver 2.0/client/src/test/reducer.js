import { StateInspector, useState, useReducer } from "reinspect";

export function Cus() {
    const initialBlueState = {
        // countries: initialCountries,
        // players: initialPlayer,
        firstDice: 0,
        secondDice: 0,
        turn: 0,
        collected: 0,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "test": {
                console.log(action.num + action.se);
                return state + 5;
            }
            default:
                break;
        }
    };
    const [sum2, dispatch] = useReducer(reducer, 5000, "Sum2State");
    const a = (num, se) => {
        dispatch({ type: "test", num, se });
    };

    return {
        sum2,
        a: (num, se) => a(num, se),
    };
}
