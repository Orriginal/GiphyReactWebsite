import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FilterComponent from './filter-component';
import * as actions from '../store/actions';

const mapStateToProps = state => {
  return {
    filterOptions: state.giphy.filterOptions
  };
};

const mapDispatch = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatch
)(FilterComponent);
