import { combineReducers } from 'redux';
import IPAReducer from './ipa_reducer';

const RootReducer = combineReducers({
  ipa: IPAReducer
});

export default RootReducer;
