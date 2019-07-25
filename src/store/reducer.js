import * as constants from './constants';

const initialState = {
  itemsArray: [],
  account: {
    loggedIn: true,
    firstName: 'Jan',
    lastName: 'Kuipers'
  },
  filterOptions: {
    hasUser: false
  }
};

const GiphyReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_ITEMS:
      return {
        ...state,
        itemsArray: action.payload
      };
    case constants.SET_FILTER:
      return {
        ...state,
        filterOptions: action.payload
      };
    default:
      return state;
  }
};

const AccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_ACCOUNT:
      return {
        ...state,
        account: action.payload
      };
    default:
      return state;
  }
};

export default GiphyReducer;
export { AccountReducer };
