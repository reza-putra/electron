import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Plus from '../components/Plus';
import * as CounterActions from '../actions/plus';

// get all state from redux store
function mapStateToProps(state) {
  console.log(state.plus.current);
  return {
    counter: state.plus.current,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Plus);
