import * as types from "../actions/actionTypes";
import initialCountries from "../lib/util/initialCountries";

const initialPlayer = new Array(4).fill(0).map((foo, index) => ({ userid: index, playerName: `player${index}`, money: 1000000, location: 0, prevLocation: 0, ownCountries: [], bankruptcy: false, islandNumber: 3 }));

const initialState = {
    countries: initialCountries,
    player: initialPlayer,
    number: 0,
    senumber: 0,
    turn: 0,
    collected: 0,
};

function counter(state = initialState, action) {
    const { countries, player, turn, collected, number, senumber } = state;
    const { location, money, ownCountries, islandNumber } = player[turn];
    const indexOfOwner = player.findIndex((i) => i.playerName === countries[location].owner);
    switch (action.type) {
        case types.RANDOM:
            if (location + action.number + action.senumber > 39) {
                if (location + action.number + action.senumber === 40 || countries[location + action.number + action.senumber - 40].owner === player[turn].playerName) {
                    console.log("출발지 혹은 본인 땅을 밟았습니다.");
                    //   // 본인땅 혹은 출발지일 경우
                    return {
                        countries: [
                            ...countries.slice(0, location + action.number + action.senumber - 40),
                            {
                                ...countries[location + action.number + action.senumber - 40],
                                done: true,
                            },
                            ...countries.slice(location + action.number + action.senumber - 39, location),
                            {
                                ...countries[location],
                                done: false,
                            },
                            ...countries.slice(location + 1, countries.length),
                        ],
                        number: action.number,
                        senumber: action.senumber,
                        player: [
                            ...player.slice(0, turn),
                            {
                                ...player[turn],
                                money: money + 200000, //월급
                                location: location + action.number + action.senumber - 40,
                                prevLocation: location,
                            },
                            ...player.slice(turn + 1, player.length),
                        ],
                        turn: (turn + 1) % 4,
                        collected: collected,
                    };
                }
                //  본인땅 혹은 출발지가 아닐경우
                return {
                    countries: [
                        ...countries.slice(0, location + action.number + action.senumber - 40),
                        {
                            ...countries[location + action.number + action.senumber - 40],
                            done: true,
                        },
                        ...countries.slice(location + action.number + action.senumber - 39, location),
                        {
                            ...countries[location],
                            done: false,
                        },
                        ...countries.slice(location + 1, countries.length),
                    ],
                    number: action.number,
                    senumber: action.senumber,
                    player: [
                        ...player.slice(0, turn),
                        {
                            ...player[turn],
                            money: money + 200000,
                            location: location + action.number + action.senumber - 40,
                            prevLocation: location,
                        },
                        ...player.slice(turn + 1, player.length),
                    ],
                    turn: turn,
                    collected: collected,
                };
            }
            if (countries[location + action.number + action.senumber].owner === player[turn].playerName) {
                console.log("본인땅을 밟았습니다.");
                // 본인땅일 경우
                return {
                    countries: [
                        ...countries.slice(0, location),
                        {
                            ...countries[location],
                            done: false,
                        },
                        ...countries.slice(location + 1, location + action.number + action.senumber),
                        {
                            ...countries[location + action.number + action.senumber],
                            done: true,
                        },
                        ...countries.slice(location + action.number + action.senumber + 1, countries.length),
                    ],
                    number: action.number,
                    senumber: action.senumber,
                    player: [
                        ...player.slice(0, turn),
                        {
                            ...player[turn],
                            location: location + action.number + action.senumber,
                            prevLocation: location,
                        },
                        ...player.slice(turn + 1, player.length),
                    ],
                    turn: (turn + 1) % 4,
                    collected: collected,
                };
            }
            // 본인땅이 아닐 경우
            return {
                countries: [
                    ...countries.slice(0, location),
                    {
                        ...countries[location],
                        done: false,
                    },
                    ...countries.slice(location + 1, location + action.number + action.senumber),
                    {
                        ...countries[location + action.number + action.senumber],
                        done: true,
                    },
                    ...countries.slice(location + action.number + action.senumber + 1, countries.length),
                ],
                number: action.number,
                senumber: action.senumber,
                player: [
                    ...player.slice(0, turn),
                    {
                        ...player[turn],
                        location: location + action.number + action.senumber,
                        prevLocation: location,
                    },
                    ...player.slice(turn + 1, player.length),
                ],
                turn: turn,
                collected: collected,
            };

        case types.DEAL:
            const ownerMoney = player[indexOfOwner].money;
            console.log(player[turn].playerName + "님이 " + countries[location].owner + "님의 땅을 밟았습니다.");
            if (number === senumber) {
                if (indexOfOwner < turn) {
                    // 새 배열을 만들지 않기 위한 비교
                    return {
                        countries: countries,
                        player: [
                            ...player.slice(0, indexOfOwner),
                            {
                                ...player[indexOfOwner],
                                money: ownerMoney + countries[location].price,
                            },
                            ...player.slice(indexOfOwner + 1, turn),
                            {
                                ...player[turn],
                                money: money - countries[location].price,
                                prevLocation: location,
                            },
                            ...player.slice(turn + 1, player.length),
                        ],
                        turn: turn,
                        collected: collected,
                    };
                } else {
                    return {
                        countries: countries,
                        player: [
                            ...player.slice(0, turn),
                            {
                                ...player[turn],
                                money: money - countries[location].price,
                                prevLocation: location,
                            },
                            ...player.slice(turn + 1, indexOfOwner),
                            {
                                ...player[indexOfOwner],
                                money: ownerMoney + countries[location].price,
                            },
                            ...player.slice(indexOfOwner + 1, player.length),
                        ],
                        turn: turn,
                        collected: collected,
                    };
                }
            }

            if (indexOfOwner < turn) {
                // 새 배열을 만들지 않기 위한 비교
                return {
                    countries: countries,
                    player: [
                        ...player.slice(0, indexOfOwner),
                        {
                            ...player[indexOfOwner],
                            money: ownerMoney + countries[location].price,
                        },
                        ...player.slice(indexOfOwner + 1, turn),
                        {
                            ...player[turn],
                            money: money - countries[location].price,
                            prevLocation: location,
                        },
                        ...player.slice(turn + 1, player.length),
                    ],
                    turn: (turn + 1) % 4,
                    collected: collected,
                };
            } else {
                return {
                    countries: countries,
                    player: [
                        ...player.slice(0, turn),
                        {
                            ...player[turn],
                            money: money - countries[location].price,
                            prevLocation: location,
                        },
                        ...player.slice(turn + 1, indexOfOwner),
                        {
                            ...player[indexOfOwner],
                            money: ownerMoney + countries[location].price,
                        },
                        ...player.slice(indexOfOwner + 1, player.length),
                    ],
                    turn: (turn + 1) % 4,
                    collected: collected,
                };
            }

        case types.BUY:
            if (number === senumber) {
                if (action.answer === true) {
                    console.log(player[turn].playerName + "님이 " + countries[location].name + "을 샀습니다.");
                    // 건물 구매
                    return {
                        countries: [
                            ...countries.slice(0, location),
                            {
                                ...countries[location],
                                bought: true,
                                owner: player[turn].playerName,
                            },
                            ...countries.slice(location + 1, countries.length),
                        ],
                        player: [
                            ...player.slice(0, turn),
                            {
                                ...player[turn],
                                money: money - countries[location].price,
                                ownCountries: [...ownCountries, countries[location].name],
                                prevLocation: location,
                            },
                            ...player.slice(turn + 1, player.length),
                        ],
                        turn: turn,
                        collected: collected,
                    };
                }
                console.log(player[turn].playerName + "님이 " + countries[location].name + "을 안샀습니다.");
                // 건물 구매 거부
                return {
                    countries: countries,
                    player: [
                        ...player.slice(0, turn),
                        {
                            ...player[turn],
                            prevLocation: location,
                        },
                        ...player.slice(turn + 1, player.length),
                    ],
                    turn: turn,
                    collected: collected,
                };
            }
            if (action.answer === true) {
                console.log(player[turn].playerName + "님이 " + countries[location].name + "을 샀습니다.");
                // 건물 구매
                return {
                    countries: [
                        ...countries.slice(0, location),
                        {
                            ...countries[location],
                            bought: true,
                            owner: player[turn].playerName,
                        },
                        ...countries.slice(location + 1, countries.length),
                    ],
                    player: [
                        ...player.slice(0, turn),
                        {
                            ...player[turn],
                            money: money - countries[location].price,
                            ownCountries: [...ownCountries, countries[location].name],
                            prevLocation: location,
                        },
                        ...player.slice(turn + 1, player.length),
                    ],
                    turn: (turn + 1) % 4,
                    collected: collected,
                };
            }
            console.log(player[turn].playerName + "님이 " + countries[location].name + "을 안샀습니다.");
            // 건물 구매 거부
            return {
                countries: countries,
                player: [
                    ...player.slice(0, turn),
                    {
                        ...player[turn],
                        prevLocation: location,
                    },
                    ...player.slice(turn + 1, player.length),
                ],
                turn: (turn + 1) % 4,
                collected: collected,
            };

        case types.BANKRUPTCY:
            console.log(player[turn].playerName + "님이 파산했습니다");
            const resetCountries = countries.map((info, index) => {
                if (info.owner === player[turn].playerName) {
                    info.owner = "";
                    info.bought = false;
                }
                return info;
            });

            // 파산했을 경우
            return {
                countries: resetCountries,
                player: [
                    ...player.slice(0, turn),
                    {
                        ...player[turn],
                        playerName: "파산",
                        money: 0,
                        location: 0,
                        prevLocation: 0,
                        ownCountries: [],
                        bankruptcy: true,
                    },
                    ...player.slice(turn + 1, player.length),
                ],
                turn: (turn + 1) % 4,
                collected: collected,
            };

        case types.EVENT:
            switch (action.event) {
                case "island":
                    // 무인도
                    if (islandNumber === 1) {
                        return {
                            countries: countries,
                            player: [
                                ...player.slice(0, turn),
                                {
                                    ...player[turn],
                                    prevLocation: location,
                                    islandNumber: 0,
                                },
                                ...player.slice(turn + 1, player.length),
                            ],
                            turn: (turn + 1) % 4,
                            collected: collected,
                        };
                    }
                    return {
                        countries: countries,
                        player: [
                            ...player.slice(0, turn),
                            {
                                ...player[turn],
                                islandNumber: islandNumber - 1,
                            },
                            ...player.slice(turn + 1, player.length),
                        ],
                        turn: (turn + 1) % 4,
                        collected: collected,
                    };

                case "goldenKey":
                    // 황금열쇠
                    switch (action.random) {
                        case 0: //뒤로 2칸
                            if (countries[location - 2].owner === player[turn].playerName) {
                                return {
                                    countries: [
                                        ...countries.slice(0, location - 2),
                                        {
                                            ...countries[location - 2],
                                            done: true,
                                        },
                                        ...countries.slice(location - 1, location),
                                        {
                                            ...countries[location],
                                            done: false,
                                        },
                                        ...countries.slice(location + 1, countries.length),
                                    ],
                                    number: number,
                                    senumber: senumber,
                                    player: [
                                        ...player.slice(0, turn),
                                        {
                                            ...player[turn],
                                            location: location - 2,
                                            prevLocation: location,
                                        },
                                        ...player.slice(turn + 1, player.length),
                                    ],
                                    turn: (turn + 1) % 4,
                                };
                            }
                            return {
                                countries: [
                                    ...countries.slice(0, location - 2),
                                    {
                                        ...countries[location - 2],
                                        done: true,
                                    },
                                    ...countries.slice(location - 1, location),
                                    {
                                        ...countries[location],
                                        done: false,
                                    },
                                    ...countries.slice(location + 1, countries.length),
                                ],
                                number: number,
                                senumber: senumber,
                                player: [
                                    ...player.slice(0, turn),
                                    {
                                        ...player[turn],
                                        location: location - 2,
                                        prevLocation: location,
                                    },
                                    ...player.slice(turn + 1, player.length),
                                ],
                                turn: turn,
                                collected: collected,
                            };
                        case 1: //노벨상  double
                            if (number === senumber) {
                                return {
                                    countries: countries,
                                    number: action.number,
                                    senumber: action.senumber,
                                    player: [
                                        ...player.slice(0, turn),
                                        {
                                            ...player[turn],
                                            money: money + 30000,
                                            prevLocation: location,
                                        },
                                        ...player.slice(turn + 1, player.length),
                                    ],
                                    turn: turn,
                                    collected: collected,
                                };
                            }
                            return {
                                countries: countries,
                                number: action.number,
                                senumber: action.senumber,
                                player: [
                                    ...player.slice(0, turn),
                                    {
                                        ...player[turn],
                                        money: money + 30000,
                                        prevLocation: location,
                                    },
                                    ...player.slice(turn + 1, player.length),
                                ],
                                turn: (turn + 1) % 4,
                                collected: collected,
                            };
                        case 2: //서울
                            return {
                                countries: [
                                    ...countries.slice(0, location),
                                    {
                                        ...countries[location],
                                        done: false,
                                    },
                                    ...countries.slice(location + 1, 39),
                                    {
                                        ...countries[39],
                                        done: true,
                                    },
                                    ...countries.slice(40, countries.length),
                                ],
                                number: number,
                                senumber: senumber,
                                player: [
                                    ...player.slice(0, turn),
                                    {
                                        ...player[turn],
                                        location: 39,
                                        prevLocation: location,
                                    },
                                    ...player.slice(turn + 1, player.length),
                                ],
                                turn: turn,
                                collected: collected,
                            };
                        default:
                            return state;
                    }
                case "donation":
                    // 사회복지기금 접수처
                    if (number === senumber) {
                        return {
                            countries: countries,
                            player: [
                                ...player.slice(0, turn),
                                {
                                    ...player[turn],
                                    money: money - 100000,
                                    prevLocation: location,
                                },
                                ...player.slice(turn + 1, player.length),
                            ],
                            turn: turn,
                            collected: collected + 10,
                        };
                    }
                    return {
                        countries: countries,
                        player: [
                            ...player.slice(0, turn),
                            {
                                ...player[turn],
                                money: money - 100000,
                                prevLocation: location,
                            },
                            ...player.slice(turn + 1, player.length),
                        ],
                        turn: (turn + 1) % 4,
                        collected: collected + 100000,
                    };

                case "receiveDonation":
                    // 사회복지기금
                    if (number === senumber) {
                        return {
                            countries: countries,
                            player: [
                                ...player.slice(0, turn),
                                {
                                    ...player[turn],
                                    money: money + collected,
                                    prevLocation: location,
                                },
                                ...player.slice(turn + 1, player.length),
                            ],
                            turn: turn,
                            collected: 0,
                        };
                    }
                    return {
                        countries: countries,
                        player: [
                            ...player.slice(0, turn),
                            {
                                ...player[turn],
                                money: money + collected,
                                prevLocation: location,
                            },
                            ...player.slice(turn + 1, player.length),
                        ],
                        turn: (turn + 1) % 4,
                        collected: 0,
                    };

                default:
                    return state;
            }

        case types.TRAVEL:
            //우주여행
            const travelCountry = countries.find((o) => o.name === action.travel);
            if (travelCountry.id >= 0 && travelCountry.id < 30) {
                if (travelCountry.id === 0 || countries[travelCountry.id].owner === player[turn].playerName) {
                    console.log("출발지 혹은 본인 땅을 밟았습니다.");
                    //   // 본인땅 혹은 출발지일 경우
                    return {
                        countries: [
                            ...countries.slice(0, travelCountry.id),
                            {
                                ...countries[travelCountry.id],
                                done: true,
                            },
                            ...countries.slice(travelCountry.id + 1, location),
                            {
                                ...countries[location],
                                done: false,
                            },
                            ...countries.slice(location + 1, countries.length),
                        ],
                        player: [
                            ...player.slice(0, turn),
                            {
                                ...player[turn],
                                money: money + 200000,
                                location: travelCountry.id,
                                prevLocation: location,
                            },
                            ...player.slice(turn + 1, player.length),
                        ],
                        turn: (turn + 1) % 4,
                        collected: collected,
                    };
                }
                //  본인땅 혹은 출발지가 아닐경우
                return {
                    countries: [
                        ...countries.slice(0, travelCountry.id),
                        {
                            ...countries[travelCountry.id],
                            done: true,
                        },
                        ...countries.slice(travelCountry.id + 1, location),
                        {
                            ...countries[location],
                            done: false,
                        },
                        ...countries.slice(location + 1, countries.length),
                    ],
                    player: [
                        ...player.slice(0, turn),
                        {
                            ...player[turn],
                            money: money + 200000,
                            location: travelCountry.id,
                            prevLocation: location,
                        },
                        ...player.slice(turn + 1, player.length),
                    ],
                    turn: turn,
                    collected: collected,
                };
            }
            if (location !== 0 && countries[travelCountry.id].owner === player[turn].playerName) {
                console.log("본인땅을 밟았습니다.");
                // 본인땅일 경우
                return {
                    countries: [
                        ...countries.slice(0, location),
                        {
                            ...countries[location],
                            done: false,
                        },
                        ...countries.slice(location + 1, travelCountry.id),
                        {
                            ...countries[travelCountry.id],
                            done: true,
                        },
                        ...countries.slice(travelCountry.id + 1, countries.length),
                    ],
                    player: [
                        ...player.slice(0, turn),
                        {
                            ...player[turn],
                            location: travelCountry.id,
                            prevLocation: location,
                        },
                        ...player.slice(turn + 1, player.length),
                    ],
                    turn: (turn + 1) % 4,
                    collected: collected,
                };
            }
            // 본인땅이 아닐 경우
            return {
                countries: [
                    ...countries.slice(0, location),
                    {
                        ...countries[location],
                        done: false,
                    },
                    ...countries.slice(location + 1, travelCountry.id),
                    {
                        ...countries[travelCountry.id],
                        done: true,
                    },
                    ...countries.slice(travelCountry.id + 1, countries.length),
                ],
                player: [
                    ...player.slice(0, turn),
                    {
                        ...player[turn],
                        location: travelCountry.id,
                        prevLocation: location,
                    },
                    ...player.slice(turn + 1, player.length),
                ],
                turn: turn,
                collected: collected,
            };

        case types.WIN:
            return initialState;
        default:
            return state;
    }
}

export default counter;
