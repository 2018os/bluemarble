import React, { Component } from 'react';
import StyledCountry from './StyledCountry';
import "./country_box.scss";

class Country extends Component {
  static defaultProps = {
    info: {
      id: 119,
      name: 'REMIX'
    },
    number: 0
  }
  
  render() {
    const { id, name } = this.props.info;
    const number = this.props;
    return (
        <StyledCountry id={id}>
          {
            number > 0
            ? (
            <div className="country_nick">
              {name}
              <div>hello</div>
            </div>
            )
            : (
            <div className="country_nick">
              {name}
            </div>)
          }
          {/* <div className="country_nick">
            {name}
          </div> */}
        </StyledCountry>
    )
  }
}
export default Country;