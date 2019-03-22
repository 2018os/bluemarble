import initialCountries from './initialCountries';

const initialPlayer = new Array(4).fill(0).map(
  (foo, index) => ({ userId: index, socketId: index, playerName: `player${index}`, money: 1000000, location: 0, prevLocation: 0, ownCountries: [], bankruptcy: false, islandNumber: 3 })
)

const initialState = {
  number: 0,
  senumber: 0,
  turn: 0,
  collected: 0
};

const resolvers = {
  Query: {
    state: () => {
      return initialState;
    },
    countries: () => {
      return initialCountries;
    },
    players: () => {
      return initialPlayer;
    }
  }
};

export default resolvers;