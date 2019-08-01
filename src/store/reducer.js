import * as constants from './constants';

export const giphyInitialState = {
  itemsArray: [],
  filterOptions: {
    hasUser: false
  }
};

const AccountInitialState = {
  account: {
    loggedIn: true,
    firstName: 'Jan',
    lastName: 'Kuipers'
  }
};

const GiphyReducer = (state = giphyInitialState, action) => {
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

const AccountReducer = (state = AccountInitialState, action) => {
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
