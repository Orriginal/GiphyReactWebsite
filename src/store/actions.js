import * as constants from './constants';

const setItems = someNewArray => {
    return {
      type: constants.SET_ITEMS,
      payload: someNewArray
    };
  };

  export { setItems };