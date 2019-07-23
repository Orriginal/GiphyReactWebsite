import * as constants from './constants';

const initialState = {
    itemsArray: [],
  };
  
  const GiphyReducer = (state = initialState, action) => {
    switch (action.type) {
      case constants.SET_ITEMS:
        return {
          ...state,
          itemsArray: action.payload
        };
      default:
        return state;
    }
  };
  
  export default GiphyReducer;
  