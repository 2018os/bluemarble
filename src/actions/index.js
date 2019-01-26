import * as types from "./actionTypes";

export const random = (number) => ({
    type: types.RANDOM,
    number
});

export const user = (user) => ({
    type: types.USER,
    user
});