import * as types from "../actions/actionTypes";

const initialCountries = new Array(100).fill(0).map(
  (foo, index) => {
    return index===0
      ? { id: index, name: `출발지`, price:500*index/100, done: true, bought: false }
      : { id: index, name: `카이로${index}`, price:500*index/100, done: false, bought: false, owner: '' }
  }
);

const initialPlayer = new Array(4).fill(0).map(
  (foo, index) => ({ id: index, playerName: `player${index}`, money: 10000, location: 0, prevLocation: 0, ownCountries: [], playerMove: false })
)

const initialState = {
  countries: initialCountries,
  player: initialPlayer,
  number: 0,
  turn: 0
};

function counter(state=initialState, action) {
  const { countries, player, number, turn } = state;
  const { location, money, ownCountries, playerMove } = player[turn];

  switch(action.type) {
    case types.RANDOM:
      if(location+action.number > 35) {
        return {
          countries: [
            ...countries.slice(0, location+action.number-36),
            {
              ...countries[location+action.number-36],
              done: true,                            
              player: [
                ...player.slice(0, turn),
                {
                  ...player[turn],
                  playerMove: true,
                  },
                ...player.slice(turn+1, player.length)
              ],
            },
            ...countries.slice(location+action.number-35, location),
            {
              ...countries[location],
              done: false,
              player: [
                ...player.slice(0, turn),
                {
                  ...player[turn],
                  playerMove: false,
                  },
                ...player.slice(turn+1, player.length)
              ],
            },
            ...countries.slice(location+1, countries.length)
          ],
          number: action.number,
          player: [
            ...player.slice(0, turn),
            {
              ...player[turn],
              money:money+2000,
              location: location+action.number-36,
              prevLocation: location
            },
            ...player.slice(turn+1, player.length)
          ],
          turn: turn
        }
      }
      return {
        countries: [
          ...countries.slice(0, location),
          {
            ...countries[location],
            done: false,
            player: [
              ...player.slice(0, turn),
              {
                ...player[turn],
                playerMove: false,
                },
              ...player.slice(turn+1, player.length)
            ],
          },
          ...countries.slice(location+1, location+action.number),
          {
            ...countries[location+action.number],
            done: true,
            player: [
              ...player.slice(0, turn),
              {
                ...player[turn],
                playerMove: true,
                },
              ...player.slice(turn+1, player.length)
            ],
          },
          ...countries.slice(location+action.number+1, countries.length)
        ],
        number: action.number,
        player: [
          ...player.slice(0, turn),
          {
            ...player[turn],
            location: location+action.number,
            prevLocation: location,
          },
          ...player.slice(turn+1, player.length)
        ],
        turn: turn
      };

    case types.DEAL:
      const indexOfOwner = player.findIndex(i => i.playerName === countries[location].owner);
      console.log(player[turn].playerName + '님이 ' + countries[location].owner + '님의 땅을 밟았습니다.');
      console.log(player[indexOfOwner].money);
      console.log(countries[location].price);
      if(action.answer === true) {
        return {
          countries: countries,
          player: [
            ...player.slice(0, indexOfOwner),
            {
              ...player[indexOfOwner],
              money: money + countries[location].price
            },
            ...player.slice(indexOfOwner+1, turn),
            {
              ...player[turn],
              money: money - countries[location].price,
              prevLocation: location
            },
            ...player.slice(turn+1, player.length)
          ],
          number: number,
          turn: (turn+1)%4
        };
      }
      console.log(player[turn].playerName + '님이 파산했습니다');
      return {
        countries: countries,
        player: [
          ...player.slice(0, turn),
          {
            ...player[turn],
            money:0,
            prevLocation: location
          },
          ...player.slice(turn+1, player.length)
        ],
        number: number,
        turn: (turn+1)%4
      };
    
    case types.BUY:
      if(action.answer === true) {
        console.log(player[turn].playerName + '님이 ' + countries[location].name + '을 샀습니다.');
        return {
          countries: [
            ...countries.slice(0, location),
            {
              ...countries[location],
              bought: true,
              owner: player[turn].playerName
            },
            ...countries.slice(location+1, countries.length)
          ],
          player: [
            ...player.slice(0, turn),
            {
              ...player[turn],
              money:money - countries[location].price,
              ownCountries: [...ownCountries, countries[location].name],
              prevLocation: location
            },
            ...player.slice(turn+1, player.length)
          ],
          turn: (turn+1)%4
        };
      }
      console.log(player[turn].playerName + '님이 ' + countries[location].name + '을 안샀습니다.');
      return {
        countries: countries,
        player: [
          ...player.slice(0, turn),
          {
            ...player[turn],
            prevLocation: location
          },
          ...player.slice(turn+1, player.length)
        ],
        turn: (turn+1)%4
      };
    default:
      return state;
  }
};

export default counter;
