import * as types from "../actions/actionTypes";

const initialCountries = new Array(100).fill(0).map(
  (foo, index) => {
    return index===0
      ? { id: index, name: `카이로${index}`, price:500*index/100, done: true }
      : { id: index, name: `카이로${index}`, price:500*index/100, done: false }
  }
);

const initialState = {
  countries: initialCountries,
  location: 0,    //player 위치
  number: 0
};

function counter(state=initialState, action) {
  const { countries } = state;
  const { location } = state;

  switch(action.type) {
    case types.RANDOM:
    
      if(location+action.number > 99) {
        return {
          countries: [
            ...countries.slice(0, location+action.number-100),
            {
              ...countries[location+action.number-100],
              done: true
            },
            ...countries.slice(location+action.number-99, location),
            {
              ...countries[location],
              done: false
            },
            ...countries.slice(location+1, countries.length)
          ],
          number: action.number,
          location: location+action.number-100
        }
      }
      return {
        countries: [
          ...countries.slice(0, location),
          {
            ...countries[location],
            done: false
          },
          ...countries.slice(location+1, location+action.number),
          {
            ...countries[location+action.number],
            done: true
          },
          ...countries.slice(location+action.number+1, countries.length)
        ],
        number: action.number,
        location: location+action.number
      }
    default:
      return state;
  }
};

export default counter;
