import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AccountOverviewComponent from './account-overview-component';
import * as actions from '../../store/actions';

const mapStateToProps = state => {
  return {
    account: state.authentication.account
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
)(AccountOverviewComponent);
