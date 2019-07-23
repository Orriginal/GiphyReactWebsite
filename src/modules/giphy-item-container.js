import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import GiphyItemComponent from "./giphy-item-component";
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
)(GiphyItemComponent);