import { RECEIVE_VOWELS } from '../actions/vowel_actions';

import merge from 'lodash/merge';

const vowelReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  switch (action.type) {
    case RECEIVE_VOWELS:
      return action.vowels;
    default:
      return state;
  }
};

export default vowelReducer;
