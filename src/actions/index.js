import * as types from "./actionTypes";

export const random = (number) => ({
    type: types.RANDOM,
    number
});

export const deal = (number) => ({
    type: types.DEAL,
    number
});