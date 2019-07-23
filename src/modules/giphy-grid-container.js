import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import GiphyGridComponent from "./giphy-grid-component";
import * as actions from "../store/actions";

const mapStateToProps = state => {
  return {
    itemsArray: state.giphy.itemsArray,
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
)(GiphyGridComponent);