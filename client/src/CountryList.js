import React from 'react';
import './components/country/CountryList.scss'; // change file path

const initialCountries = [ // change name: GoldenKey is not Country
  {
    id: 'starting',
    name:'출발지',
    price: 0,
    done: true,
    bought: false,
    owner: 'admin'
  },
  {
    id: 'taipei',
    name:'타이페이',
    price: 20000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'hongkong',
    name:'홍콩',
    price: 25500,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'goldenKey-1',
    name:'황금열쇠',
    price: 0,
    done: false,
    bought: false,
    owner: 'admin',
    event: 'goldenKey'
  },
  {
    id: 'manila',
    name:'마닐라',
    price: 38000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'jeju-island',
    name:'제주도',
    price: 200000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'singapore',
    name:'싱가포르',
    price: 50000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'goldenKey-2',
    name:'황금열쇠',
    price: 0,
    done: false,
    bought: false,
    owner: 'admin',
    event: 'goldenKey'
  },
  {
    id: 'kairo',
    name:'카이로',
    price: 64000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'istanbul',
    name:'이스탄불',
    price: 70000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'uninhabitedIsland',
    name:'무인도',
    price: 0,
    done: false,
    bought: false,
    owner: 'admin',
    event: 'island'
  },
  {
    id: 'athens',
    name:'아테네',
    price: 100000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'copenhagen',
    name:'코펜하겐',
    price: 130000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'goldenKey-3',
    name:'황금열쇠',
    price: 0,
    done: false,
    bought: false,
    owner: 'admin',
    event: 'goldenKey'
  },
  {
    id: 'stockholm',
    name:'스톡홀름',
    price: 160000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'congoAirport',
    name:'콩고여객기',
    price: 300000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'bern',
    name:'베른',
    price: 200000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'goldenKey-4',
    name:'황금열쇠',
    price: 0,
    done: false,
    bought: false,
    owner: 'admin',
    event: 'goldenKey'
  },
  {
    id: 'berlin',
    name:'베를린',
    price: 240000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'ottawa',
    name:'오타와',
    price: 300000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'pullDonation',
    name:'사회복지기금',
    price: 0,
    done: false,
    bought: false,
    owner: 'admin',
    event: 'pullDonation'
  },
  {
    id: 'buenosaires',
    name:'부에노스아이레스',
    price: 400000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'saopaulo',
    name:'상파울루',
    price: 420000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'goldenKey-5',
    name:'황금열쇠',
    price: 0,
    done: false,
    bought: false,
    owner: 'admin',
    event: 'goldenKey'
  },
  {
    id: 'sidney',
    name:'시드니',
    price: 460000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'busan',
    name:'부산',
    price: 500000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'liverpool',
    name:'리버풀',
    price: 520000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'lisboa',
    name:'리스본',
    price: 550000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'passengerShip',
    name:'여객선',
    price: 700000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'mardrid',
    name:'마드리드',
    price: 600000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'spaceTrip',
    name:'우주여행',
    price: 0,
    done: false,
    bought: false,
    owner: 'admin'
  },
  {
    id: 'tokyo',
    name:'도쿄',
    price: 700000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'spaceShip',
    name:'우주선',
    price: 800000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'paris',
    name:'파리',
    price: 730000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'rome',
    name:'로마',
    price: 760000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'goldenKey-6',
    name:'황금열쇠',
    price: 0,
    done: false,
    bought: false,
    owner: 'admin',
    event: 'goldenKey'
  },
  {
    id: 'london',
    name:'런던',
    price: 780000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 37,
    name:'뉴욕',
    price: 820000,
    done: false,
    bought: false,
    owner: ''
  },
  {
    id: 'pushDonation',
    name:'사회복지기금',
    price: 0,
    done: false,
    bought: false,
    owner: 'admin',
    event: 'pushDonation'
  },
  {
    id: 'seoul',
    name:'서울',
    price: 1000000,
    done: false,
    bought: false,
    owner: ''
  },
];

const CountryList = () => {
  const firstCountries = initialCountries.slice(0, 11);
  const reverseFirstCountries = firstCountries.reverse();
  const secondCountries = initialCountries.slice(11, 20);
  const thirdCountries = initialCountries.slice(20, 31);
  const forthCountries = initialCountries.slice(31, 40);
  const reverseForthCountries = forthCountries.reverse();
  // change naming

  const leftCountries = reverseFirstCountries.map(({ id, name, price, done, bought, owner }) => (
    <div key={id} className="horizontalCountry">
      {name}
      <br />
      {price}
    </div>
  ));

  const topCountries = secondCountries.map(({ id, name, price, done, bought, owner }) => (
    <div key={id} className="verticalCountry">
      {name}
      <br />
      {price}
    </div>
  ));

  const bottomCountries = reverseForthCountries.map(({ id, name, price, done, bought, owner }) => (
    <div key={id} className="horizontalCountry">
      {name}
      <br />
      {price}
    </div>
  ));

  const rightCountries = thirdCountries.map(({ id, name, price, done, bought, owner }) => (
    <div key={id} className="verticalCountry">
      {name}
      <br />
      {price}
    </div>
  ));
  
  return (
    <div className="CountryList">
      <div className="leftLine">
        {leftCountries}
      </div>
      <div className="vertical">
        <div className="topLine">
          {topCountries}
        </div>
        <div className="bottomLine">
          {bottomCountries}
        </div>
      </div>
      <div className="rightLine">
        {rightCountries}
      </div>
    </div>
  )
};

export default CountryList;