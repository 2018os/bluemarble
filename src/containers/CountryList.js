import React, { Component } from 'react';
import Country from '../components/country/Country';
import './Country.scss';
import DiceContainer from '../containers/DiceContainer';

class CountryList extends Component {
  static defaultProps = {
    data: []
  };

  render() {
    const { data } = this.props;
    const list = data.map(
      info => (<Country key={info.id} info={info} />)
    );
    return (
      <div className="CountryList">
        <div className="country">
          {list}
        </div>
        <DiceContainer />
      </div>
    );
  }
}

export default CountryList;