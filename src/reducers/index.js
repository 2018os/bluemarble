import * as types from "../actions/actionTypes";

const initialCountries = new Array(36).fill(0).map(
  (foo, index) => {
    return index===0
      ? { id: index, name: `출발지`, price:500*index/100, done: true, bought: false, owner: 'admin' }
      : { id: index, name: `카이로${index}`, price:500*index/100, done: false, bought: false, owner: '' }
  }
);

const initialPlayer = new Array(4).fill(0).map(
  (foo, index) => ({ userid: index, playerName: `player${index}`, money: 10000, location: 0, prevLocation: 0, ownCountries: [] })
)

const initialState = {
  countries: initialCountries,
  player: initialPlayer,
  number: 0,
  senumber: 0,
  turn: 0
};

function counter(state=initialState, action) {
  const { countries, player, number, turn } = state;
  const { location, money, ownCountries } = player[turn];
  const indexOfOwner = player.findIndex(i => i.playerName === countries[location].owner);

  switch(action.type) {
    case types.RANDOM:
    // owner!==playerName
      if(location+action.number+action.senumber > 35) {
        if(location+action.number+action.senumber === 36 || countries[location+action.number+action.senumber-36].owner === player[turn].playerName) {
          console.log('출발지 혹은 본인 땅을 밟았습니다.');
          return {
            countries: [
              ...countries.slice(0, location+action.number+action.senumber-36),
              {
                ...countries[location+action.number+action.senumber-36],
                done: true,
              },
              ...countries.slice(location+action.number+action.senumber-35, location),
              {
                ...countries[location],
                done: false,
              },
              ...countries.slice(location+1, countries.length)
            ],
            number: action.number,
            senumber: action.senumber,
            player: [
              ...player.slice(0, turn),
              {
                ...player[turn],
                money:money+2000,
                location: location+action.number+action.senumber-36,
                prevLocation: location
              },
              ...player.slice(turn+1, player.length)
            ],
            turn: (turn+1)%player.length
          }
        }
        return {
          countries: [
            ...countries.slice(0, location+action.number+action.senumber-36),
            {
              ...countries[location+action.number+action.senumber-36],
              done: true,
            },
            ...countries.slice(location+action.number+action.senumber-35, location),
            {
              ...countries[location],
              done: false,
            },
            ...countries.slice(location+1, countries.length)
          ],
          number: action.number,
          senumber: action.senumber,
          player: [
            ...player.slice(0, turn),
            {
              ...player[turn],
              money:money+2000,
              location: location+action.number+action.senumber-36,
              prevLocation: location
            },
            ...player.slice(turn+1, player.length)
          ],
          turn: turn
        }
      }
      if(location !== 0 && countries[location+action.number+action.senumber].owner === player[turn].playerName) {
        console.log('본인땅을 밟았습니다.');
        return {
          countries: [
            ...countries.slice(0, location),
            {
              ...countries[location],
              done: false,
            },
            ...countries.slice(location+1, location+action.number+action.senumber),
            {
              ...countries[location+action.number+action.senumber],
              done: true,
            },
            ...countries.slice(location+action.number+action.senumber+1, countries.length)
          ],
          number: action.number,
          senumber: action.senumber,
          player: [
            ...player.slice(0, turn),
            {
              ...player[turn],
              location: location+action.number+action.senumber,
              prevLocation: location,
            },
            ...player.slice(turn+1, player.length)
          ],
          turn: (turn+1)%player.length
        };
      }
      return {
        countries: [
          ...countries.slice(0, location),
          {
            ...countries[location],
            done: false,
          },
          ...countries.slice(location+1, location+action.number+action.senumber),
          {
            ...countries[location+action.number+action.senumber],
            done: true,
          },
          ...countries.slice(location+action.number+action.senumber+1, countries.length)
        ],
        number: action.number,
        senumber: action.senumber,
        player: [
          ...player.slice(0, turn),
          {
            ...player[turn],
            location: location+action.number+action.senumber,
            prevLocation: location,
          },
          ...player.slice(turn+1, player.length)
        ],
        turn: turn
      };

    case types.DEAL:
      const ownerMoney = player[indexOfOwner].money;
      console.log(player[turn].playerName + '님이 ' + countries[location].owner + '님의 땅을 밟았습니다.');
      if(action.answer === true) {
        if(indexOfOwner < turn) {
          return {
            countries: countries,
            player: [
              ...player.slice(0, indexOfOwner),
              {
                ...player[indexOfOwner],
                money: ownerMoney + countries[location].price
              },
              ...player.slice(indexOfOwner+1, turn),
              {
                ...player[turn],
                money: money - countries[location].price,
                prevLocation: location
              },
              ...player.slice(turn+1, player.length)
            ],
            turn: (turn+1)%player.length
          };
        } else {
          return {
            countries: countries,
            player: [
              ...player.slice(0, turn),
              {
                ...player[turn],
                money: money - countries[location].price,
                prevLocation: location
              },
              ...player.slice(turn+1, indexOfOwner),
              {
                ...player[indexOfOwner],
                money: ownerMoney + countries[location].price
              },
              ...player.slice(indexOfOwner+1, player.length)
            ],
            turn: (turn+1)%player.length
          };
        }
      }
      console.log(player[turn].playerName + '님이 파산했습니다');
      player.splice(turn, 1);
      return {
        countries: countries,
        // player: [
        //   ...player.slice(0, turn),
        //   {
        //     ...player[turn],
        //     money:0,
        //     prevLocation: location
        //   },
        //   ...player.slice(turn+1, player.length)
        // ],
        player: player,
        number: number,
        turn: (turn+1)%player.length
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
          turn: (turn+1)%player.length
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
        turn: (turn+1)%player.length
      };
    default:
      return state;
  }
};

export default counter;
