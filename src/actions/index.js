import * as types from "./actionTypes";

export const random = (number) => ({
    type: types.RANDOM,
    number
});

export const deal = (answer) => ({
    type: types.DEAL,
    answer
});

export const buy = (answer) => ({
    type: types.BUY,
    answer
})