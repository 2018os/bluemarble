import { useReducer } from "react";

export function CustomDiceBox() {
    function getRandomnumber() {
        const random = Math.floor(Math.random() * 6 + 1);
        return random;
    }

    const initialDiceState = {
        firstDice: getRandomnumber(),
        secondDice: getRandomnumber(),
    };

    const diceReducer = (state, action) => {
        switch (action.type) {
            case "reset": {
                return initialDiceState;
            }
            case "getValue": {
                return { ...state, firstDice: getRandomnumber(), secondDice: getRandomnumber() };
            }
            default:
                break;
        }
    };

    const [CustomDice, dispatchDice] = useReducer(diceReducer, initialDiceState);
    const throwDice = () => dispatchDice({ type: "getValue" });

    return {
        CustomDice,
        throwDice: () => throwDice(),
    };
}
