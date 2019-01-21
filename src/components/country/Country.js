import React from 'react';
import StyledCountry from './StyledCountry';
import "./country_box.scss";
import PropTyes from 'prop-types';
import Player from '../player/Player';

const Country = ({ id, name, done }) => {   //done으로 player위치 확인
  return (
    <StyledCountry id={id}>
      <div className="country_nick">
        {name}
        { done && <Player>hello</Player> }
      </div>
    </StyledCountry>
  );
};

Country.PropTyes = {
  id: PropTyes.number,
  name: PropTyes.string,
  done: PropTyes.bool
};

Country.defaultProps = {
  id: 0,
  name: '',
  done: false
};

export default Country;


// class Country extends Component {
//   static defaultProps = {
//     info: {
//       id: 119,
//       name: 'REMIX'
//     },
//     number: 0
//   }
  
//   render() {
//     const { id, name } = this.props.info;
//     const number = this.props;
//     return (
//         <StyledCountry id={id}>
//           {
//             number > 0
//             ? (
//             <div className="country_nick">
//               {name}
//               <div>hello</div>
//             </div>
//             )
//             : (
//             <div className="country_nick">
//               {name}
//             </div>)
//           }
//           {/* <div className="country_nick">
//             {name}
//           </div> */}
//         </StyledCountry>
//     )
//   }
// }