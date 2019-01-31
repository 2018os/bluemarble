import CountryList from '../components/country/CountryList';
import { connect } from 'react-redux';

//props 값으로 넣어줄 상태 정의
const mapStateToProps = (state) => ({countries: state.countries, player: state.player, turn: state.turn});
const CountryListContainer = connect(mapStateToProps)(CountryList);

export default CountryListContainer;