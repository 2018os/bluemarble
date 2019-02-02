import * as types from "./actionTypes";

export const random = (number, senumber) => ({
    type: types.RANDOM,
    number,
    senumber
});

export const deal = () => ({
    type: types.DEAL
});

export const buy = (answer) => ({
    type: types.BUY,
    answer
});

export const bankruptcy = () => ({
    type: types.BANKRUPTCY
})