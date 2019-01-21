import * as types from "../actions/actionTypes";

const initialCountries = new Array(100).fill(0).map(
  (foo, index) => ({ id: index, name: `카이로${index}`, done: false })
);

const initialState = {
  countries: initialCountries,
  number: 0
};

function counter(state=initialState, action) {
  const { countries } = state;

  switch(action.type) {
    case types.RANDOM:
      return {
        countries: [
          ...countries.slice(0, action.number),
          {
            ...countries[action.number],
            done: true
          },
          ...countries.slice(action.number+1, countries.length)
        ],
        number: action.number
      };
    default:
      return state;
  }
};

export default counter;
