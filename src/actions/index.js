import * as types from "./actionTypes";

export const random = (number) => ({
    type: types.RANDOM,
    number
});

export const move = (index) => ({
    type: types.MOVE,
    index
})