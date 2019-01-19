import * as types from "../actions/actionTypes";

const initialState = {
    number: 0
};

function counter(state = initialState, action) {
    switch(action.type) {
        case types.RANDOM:
        return {
            ...state,
            number: action.number
        };
        default:
        return state;
    }
};

export default counter;