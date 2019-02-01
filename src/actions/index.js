import * as types from "./actionTypes";

export const random = (number, senumber) => ({
    type: types.RANDOM,
    number,
    senumber
});

export const deal = (answer) => ({
    type: types.DEAL,
    answer
});

export const buy = (answer) => ({
    type: types.BUY,
    answer
})