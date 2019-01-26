import React from 'react';
import PropTypes from 'prop-types';
import "./Showplayer.scss";

const Showplayer = ({id, user, price}) => {
  return (
    <div className="up_player">
      <div className="A_player">
        <p>id:{user}</p>
        <p>돈: {price}</p>
      </div>
    </div>
  );
};

Showplayer.propTypes = {
  id: PropTypes.number,
  user: PropTypes.string,
  price: PropTypes.number
};

Showplayer.defaultProps = {
  id: 0,
  user: '',
  price: '',
}

export default Showplayer;