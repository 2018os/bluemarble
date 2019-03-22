import React, { Component, Fragment } from "react";
import Country from "./Country";
import "./CountryList.scss";
import PropTypes from "prop-types";
import Showplayer1 from '../player/Showplayer1';
import DiceContainer from "../../containers/DiceContainer";
import CountryInfoContainer from "../../containers/CountryInfoContainer";
import UndefPlayerInfoContainer from "../../containers/UnderPlayerInfo";
import bg from "../../lib/bg.mp3";

import gql from "graphql-tag";
import { Query } from "react-apollo";

const countries = gql`
  query {
    countries {
      id
      name
      price
    }
    players {
      userId
      location
    }
    state {
      collected
      turn
    }
  }
`;

class CountryList extends Component {
  render() {
    return (
      <div>
        <Query query={countries}>
          {({ loading, data}) => {
            if(loading) {
              return "Loading";
            }
            const map1 = data.countries.slice(0, 10);
            const reversemap1 = map1.reverse();
            const map2 = data.countries.slice(10, 21);
            const map3 = data.countries.slice(21, 30);
            const map4 = data.countries.slice(30, 40);
            const reversemap4 = map4.reverse();
            const map1List = reversemap1.map((info, i) => (
                <Country
                  key={i}
                  {...info}
                  location={data.players[data.state.turn].location}
                  userId={data.players[data.state.turn].userId}
                  collected={data.state.collected}
                />
              ));
              const map2List = map2.map((info, i) => (
                <Country
                  key={i}
                  {...info}
                  location={data.players[data.state.turn].location}
                  userId={data.players[data.state.turn].userId}
                  collected={data.state.collected}
                />
              ));
              const map3List = map3.map((info, i) => (
                <Country
                  key={i}
                  {...info}
                  location={data.players[data.state.turn].location}
                  userId={data.players[data.state.turn].userId}
                  collected={data.state.collected}
                />
              ));
              const map4List = reversemap4.map((info, i) => (
                <Country
                  key={i}
                  {...info}
                  location={data.players[data.state.turn].location}
                  userId={data.players[data.state.turn].userId}
                  collected={data.state.collected}
                />
                ));
            return (
              <Fragment>
              {/* <Showplayer1 /> */}
              <div className="CountryList">
                <div className="first_line">{map2List}</div>
                <div className="second_line">{map1List}</div>
              {/* <CountryInfoContainer /> */}
              {/* <DiceContainer /> */}
                <div className="third_line">{map3List}</div>
                <div className="four_line">{map4List}</div>
              </div>
              {/* <UndefPlayerInfoContainer /> */}
              </Fragment>
            )
          }
          }
        </Query>
      </div>
    );
  }
}
export default CountryList;
