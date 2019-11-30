/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import {
  ON_FETCH_RECOMENDATIONS,
  ON_FETCH_RECOMENDATIONS_SUCCESS,
  ON_FETCH_RECOMENDATIONS_ERROR
} from './Constants';
import { INITIAL_STATE } from './InitialState';
import { createReducer } from 'reduxsauce';


// register User reducer handlers
export const fetchRecommendations = (state) => {
  return ({
    ...state,
    registerUserSuccess: false,
    registerUserError: null,
    isFetchingRecommendations: true
  })
}



export const fetchRecommendationsSuccess = (state, { response }) =>
  ({
    ...state,
    recommendations: response.data,
    registerUserSuccess: true,
    registerUserError: true,
    isFetchingRecommendations: false
  })


export const fetchRecommendationsError = (state, { error }) =>
  ({
    ...state,
    registerUserSuccess: false,
    registerUserError: error,
    isFetchingRecommendations: false
  })


export const reducer = createReducer(INITIAL_STATE, {
  [ON_FETCH_RECOMENDATIONS]: fetchRecommendations,
  [ON_FETCH_RECOMENDATIONS_SUCCESS]: fetchRecommendationsSuccess,
  [ON_FETCH_RECOMENDATIONS_ERROR]: fetchRecommendationsError
})
