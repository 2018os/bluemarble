import * as types from "./actionTypes";

export const random = (number) => ({
    type: types.RANDOM,
    number
});

export const deal = () => ({
    type: types.DEAL
});

export const buy = () => ({
    type: types.BUY
})