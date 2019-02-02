import * as types from "../actions/actionTypes";

const initialCountries = [
  {
    id: 0,
    name:'출발지',
    price: 0,
    done: true,
    bought: false,
    owner: 'admin'
  },
  {
    id: 1,
    name:'타이페이',
    price: 5,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 2,
    name:'황금열쇠',
    price: 0,
    done: false,
    bought: false,
    owner: 'admin'
  },
  {
    id: 3,
    name:'홍콩',
    price: 8,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 4,
    name:'마닐라',
    price: 8,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 5,
    name:'제주도',
    price: 20,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 6,
    name:'싱가포르',
    price: 10,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 7,
    name:'황금열쇠',
    price: 0,
    done: false,
    bought: false,
    owner: 'admin'
  },
  {
    id: 8,
    name:'카이로',
    price: 10,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 9,
    name:'이스탄불',
    price: 12,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 10,
    name:'무인도',
    price: 0,
    done: false,
    bought: false,
    owner: 'admin'
  },
  {
    id: 11,
    name:'아테네',
    price: 14,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 12,
    name:'황금열쇠',
    price: 0,
    done: false,
    bought: false,
    owner: 'admin'
  },
  {
    id: 13,
    name:'코펜하겐',
    price: 16,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 14,
    name:'스톡홀름',
    price: 16,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 15,
    name:'콩고여객기',
    price: 30,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 16,
    name:'베른',
    price: 18,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 17,
    name:'황금열쇠',
    price: 0,
    done: false,
    bought: false,
    owner: 'admin'
  },
  {
    id: 18,
    name:'베를린',
    price: 18,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 19,
    name:'오타와',
    price: 20,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 20,
    name:'사회복지기금',
    price: 0,
    done: false,
    bought: false,
    owner: 'admin'
  },
  {
    id: 21,
    name:'부에노스아이레스',
    price: 22,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 22,
    name:'황금열쇠',
    price: 0,
    done: false,
    bought: false,
    owner: 'admin'
  },
  {
    id: 23,
    name:'상파울루',
    price: 24,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 24,
    name:'시드니',
    price: 24,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 25,
    name:'부산',
    price: 50,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 26,
    name:'비켄디',
    price: 28,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 27,
    name:'리스본',
    price: 28,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 28,
    name:'여객선',
    price: 30,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 29,
    name:'마드리드',
    price: 28,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 30,
    name:'우주여행',
    price: 10,
    done: false,
    bought: false,
    owner: 'admin'
  },
  {
    id: 31,
    name:'도쿄',
    price: 30,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 32,
    name:'우주선',
    price: 45,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 33,
    name:'파리',
    price: 32,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 34,
    name:'로마',
    price: 32,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 35,
    name:'황금열쇠',
    price: 0,
    done: false,
    bought: false,
    owner: 'admin'
  },
  {
    id: 36,
    name:'런던',
    price: 35,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 37,
    name:'뉴욕',
    price: 0,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 38,
    name:'사회복지기금',
    price: 15,
    done: false,
    bought: false,
    owner: 'admin'
  },
  {
    id: 39,
    name:'서울',
    price: 100,
    done: false,
    bought: false,
    owner: ''
  },
  
]

const initialPlayer = new Array(4).fill(0).map(
  (foo, index) => ({ userid: index, playerName: `player${index}`, money: 10000, location: 0, prevLocation: 0, ownCountries: [], bankruptcy:false })
)

const initialState = {
  countries: initialCountries,
  player: initialPlayer,
  number: 0,
  senumber: 0,
  turn: 0
};

function counter(state=initialState, action) {
  const { countries, player, turn, number, senumber } = state;
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
            turn: (turn+1)%4
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
          turn: (turn+1)%4
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
            turn: (turn+1)%4
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
            turn: (turn+1)%4
          };
        }
    
    case types.BUY:
      if(number === senumber) {
        console.log(number, senumber)
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
          turn: turn
        };
      }
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

    case types.BANKRUPTCY:
      console.log(player[turn].playerName + '님이 파산했습니다');
      // const resetCountries = countries.map(
      //   (info, index) => {
      //     if(info[index].owner === player[turn].playerName) {
      //       info[index].owner = '';
      //       info[index].bought = false;
      //     }
      //   }
      // )
      // player.splice(turn, 1);
      return {
        countries: countries,
        player: [
          ...player.slice(0, turn),
          {
            ...player[turn],
            playerName: '파산',
            money:0,
            location: 0,
            prevLocation: 0,
            ownCountries: [],
            bankruptcy: true
          },
          ...player.slice(turn+1, player.length)
        ],
        // player: player,
        turn: (turn+1)%4
      };
    default:
      return state;
  }
};

export default counter;
