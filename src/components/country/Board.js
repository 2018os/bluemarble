import React, { Component } from 'react';
import CountryList from '../../containers/CountryList';

const initialCountry = new Array(100).fill(0).map(
  (foo, index) => ({ id: index, name: `카이로${index}` })
);

class Board extends Component {
  state = {
    Country: initialCountry
  } // 국가 리스트

  render() {
    return (
      <div>
        <CountryList data={this.state.Country}/>
      </div>
    );
  };
};

export default Board;