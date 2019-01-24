import * as types from "../actions/actionTypes";

const initialCountries = new Array(100).fill(0).map(
  (foo, index) => {
    return index===0
      ? { id: index, name: `카이로${index}`, done: true }
      : { id: index, name: `카이로${index}`, done: false }
  }
);

const initialState = {
  countries: initialCountries,
  prevNumber: 0,
  nextNumber: 0,
  number: 0
};

function counter(state=initialState, action) {
  const { countries } = state;
  const { prevNumber } = state;
  const { nextNumber } = state;

  switch(action.type) {
    case types.RANDOM:
      if(prevNumber < nextNumber) {
        return {
          countries: [
            ...countries.slice(0, prevNumber),
            {
              ...countries[prevNumber],
              done: false
            },
            ...countries.slice(prevNumber+1, nextNumber),
            {
              ...countries[nextNumber],
              done: true
            },
            ...countries.slice(nextNumber+1, countries.length)
          ],
          number: action.number,
          nextNumber: nextNumber+action.number,
          prevNumber: nextNumber
        };
      } else if(prevNumber === nextNumber) {
        return {
          countries: countries,
          number: action.number,
          nextNumber: nextNumber+action.number,
          prevNumber: nextNumber
        }
      } else {
        return {
          countries: [
            ...countries.slice(0, nextNumber),
            {
              ...countries[nextNumber],
              done: true
            },
            ...countries.slice(nextNumber+1, prevNumber),
            {
              ...countries[prevNumber],
              done: false
            },
            ...countries.slice(prevNumber+1, countries.length)
          ],
          number: action.number,
          nextNumber: nextNumber+action.number,
          prevNumber: nextNumber
        };
      }
    default:
      return state;
  }
};

export default counter;
