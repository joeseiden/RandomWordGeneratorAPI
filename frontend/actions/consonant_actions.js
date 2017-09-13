import * as ConsonantAPIUtil from '../util/consonant_api_util';

import { receiveErrors } from './errors_actions';

export const RECEIVE_CONSONANTS = "RECEIVE_CONSONANTS";
export const RECEIVE_CONSONANT = "RECEIVE_CONSONANT";

export const requestAllConsonants = () => dispatch => (
  ConsonantAPIUtil.fetchAllConsonants()
    .then(response => dispatch(receiveConsonants(response)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestChartableConsonants = () => dispatch => (
  ConsonantAPIUtil.fetchChartableConsonants()
    .then(response => dispatch(receiveConsonants(response)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveConsonants = consonants => ({
  type: RECEIVE_CONSONANTS,
  consonants
});
