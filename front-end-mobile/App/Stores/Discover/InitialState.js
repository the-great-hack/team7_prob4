/**
 * The initial values for the redux state.
 */
import Immutable from 'seamless-immutable';

export const INITIAL_STATE = Immutable({
  recommendations: null,
  registerUserSuccess: false,
  registerUserError: null,
  isFetchingRecommendations: false
});
