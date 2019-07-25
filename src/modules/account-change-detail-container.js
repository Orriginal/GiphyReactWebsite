import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChangeDetailComponent from './account-change-detail-component';
import * as actions from '../store/actions';

const mapStateToProps = state => {
  return {
    // TODO
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
)(ChangeDetailComponent);
