import React, { Component } from 'react';
import Country from './Country';
import './Country.css';

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
        {list}
      </div>
    );
  }
}


export default CountryList;