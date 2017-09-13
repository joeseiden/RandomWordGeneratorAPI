import * as VowelAPIUtil from '../util/vowel_api_util';

import { receiveErrors } from './errors_actions';

export const RECEIVE_VOWELS = "RECEIVE_VOWELS";

export const requestChartableVowels = () => dispatch => (
  VowelAPIUtil.fetchChartableVowels()
    .then(response => dispatch(receiveVowels(response)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveVowels = vowels => ({
  type: RECEIVE_VOWELS,
  vowels
});
