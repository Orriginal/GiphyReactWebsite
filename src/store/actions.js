import * as constants from './constants';

const setItems = someNewArray => {
  return {
    type: constants.SET_ITEMS,
    payload: someNewArray
  };
};

const setAccount = someNewObj => {
  return {
    type: constants.SET_ACCOUNT,
    payload: someNewObj
  };
};

const setFilter = filterOptions => {
  return {
    type: constants.SET_FILTER,
    payload: filterOptions
  };
};

export { setItems, setAccount, setFilter };
