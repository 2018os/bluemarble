import * as types from "./actionTypes";

export const random = (number) => ({
    type: types.Random,
    number
});