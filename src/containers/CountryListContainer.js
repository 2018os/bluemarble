import CountryList from '../components/country/CountryList';
import { connect } from 'react-redux';

//props 값으로 넣어줄 상태 정의
const mapStateToProps = (state) => ({countries: state.countries, turn: state.turn, player: state.player});
const CountryListContainer = connect(mapStateToProps)(CountryList);

export default CountryListContainer;