import React, { Component } from 'react';
import CountryList from '../../containers/CountryList';

class Board extends Component {
  render() {
    const { Countries } = this.props;
    return (
      <div>
        <CountryList />
      </div>
    );
  };
};

export default Board;