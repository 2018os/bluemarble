import * as types from "./actionTypes";

export const random = (number, senumber) => ({
  type: types.RANDOM,
  number,
  senumber
});

export const deal = () => ({
  type: types.DEAL
});

export const buy = answer => ({
  type: types.BUY,
  answer
});

export const bankruptcy = () => ({
  type: types.BANKRUPTCY
});

export const event = (event, random) => ({
  type: types.EVENT,
  event,
  random
});

export const travel = travel => ({
  type: types.TRAVEL,
  travel
});

export const win = () => ({
  type: types.WIN
});

export const naming = (name, clientCount, socketId) => ({
  type: types.NAMING,
  name,
  clientCount,
  socketId
});
