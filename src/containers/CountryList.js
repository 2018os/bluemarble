import React, { Component } from 'react';
import Country from '../components/country/Country';
import './Country.scss';
import CountryContainer from "./countrycontainer";

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
          <CountryContainer />
        </div>
      </div>
    );
  }
}

export default CountryList;