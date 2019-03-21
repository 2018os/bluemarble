import initialCountries from './initialCountries';

const initialPlayer = new Array(4).fill(0).map(
  (foo, index) => ({ userid: index, socketId: index, playerName: `player${index}`, money: 1000000, location: 0, prevLocation: 0, ownCountries: [], bankruptcy: false, islandNumber: 3 })
)

const resolvers = {
  Query: {
    countries: () => {
      return initialCountries;
    },
    players: () => {
      return initialPlayer;
    }
  }
};

export default resolvers;