import React, { Component } from 'react';
import Country from './Country';
import './Country.scss';
import Counter from "../dice/dice";

class CountryList extends Component {
  static defaultProps = {
    data: []
  };

  render() {
    const { data } = this.props;
    const list = data.map(
      info => (<Country key={info.id} info={info} />)
    );
    console.log(list);
    return (
      <div className="CountryList">
        <div className="country">
          {list}
        </div>
        <div className="random_button">
          <Counter />
        </div>
      </div>
    );
  }
}

export default CountryList;