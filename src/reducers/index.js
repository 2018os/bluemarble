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
  number: 0
};

function counter(state=initialState, action) {
  const { countries } = state;
  const { number } = state;
  switch(action.type) {
    case types.RANDOM:
      if(number < action.number) {
        return {
          countries: [
            ...countries.slice(0, number),
            {
              ...countries[number],
              done: false
            },
            ...countries.slice(number+1, action.number),
            {
              ...countries[action.number],
              done: true
            },
            ...countries.slice(action.number+1, countries.length)
          ],
          number: action.number
        };
      } else if(number === action.number) {
        return {
          countries: countries,
          number: action.number
        }
      } else {
        return {
          countries: [
            ...countries.slice(0, action.number),
            {
              ...countries[action.number],
              done: true
            },
            ...countries.slice(action.number+1, number),
            {
              ...countries[number],
              done: false
            },
            ...countries.slice(number+1, countries.length)
          ],
          number: action.number
        };
      }
    default:
      return state;
  }
};

export default counter;
