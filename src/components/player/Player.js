import React, { Component } from 'react';
import StyledPlayer from './StyledPlayer';

class Player extends Component {
  state = {
    number: 0
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleMove = (e) => {
    e.preventDfault();
    this.props.onMove(this.state);
    this.setState({
      number: 0
    });
  }

  render() {
    const style = {
      'position': 'absolute'
    }
    return (
      <div>
        <StyledPlayer number={this.state.number}>hello</StyledPlayer>
        <form onSubmit={this.handleMove} style={style}>
          <input placeholder="숫자" value={this.state.number} onChange={this.handleChange} name="number" />    
        </form>
      </div>
    )
  }
}
export default Player;