import React, { Component } from 'react';
import StyledCountry from './StyledCountry';
import "./country_box.scss";

class Country extends Component {
  static defaultProps = {
    info: {
      id: 0,
      name: '국가'
    }
  }
  
  render() {
    const { id, name } = this.props.info;
    return (
        <StyledCountry id={id}>
          <div className="country_nick">
            {name}
          </div>
        </StyledCountry>
    )
  }
}
export default Country;