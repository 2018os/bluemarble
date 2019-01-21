import CountryList from '../components/country/CountryList';
import { connect } from 'react-redux';
import * as actions from '../actions';

//props 값으로 넣어줄 상태 정의
const mapStateToProps = (state) => ({countries: state.countries});

const mapDispatchToProps = (dispatch) => ({
  onMove: (index) => {
      dispatch(actions.move(index));
  }
});

const CountryListContainer = connect(mapStateToProps, mapDispatchToProps)(CountryList);

export default CountryListContainer;