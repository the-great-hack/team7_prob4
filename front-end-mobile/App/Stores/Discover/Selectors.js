import { createSelector } from 'reselect';
import { INITIAL_STATE } from './InitialState';
import Immutable from 'seamless-immutable'


export const selectDiscoverDomain = state => {
    return state.discover || INITIAL_STATE;
};


/*--------- Patients ---------------*/
//isFetchingRecommendations
export const makeSelectRecommendations = () =>
    createSelector(selectDiscoverDomain, substate => substate.discover && Immutable.asMutable(substate.discover));

export const makeSelectFetchRecommendationsSuccess = () =>
    createSelector(selectDiscoverDomain, substate => substate.fetchRecommendationsSuccess);

export const makeSelectFetchRecommendationsError = () =>
    createSelector(selectDiscoverDomain, substate => substate.fetchPatientsError);

export const makeSelectIsFetchingRecommendations = () =>
    createSelector(selectDiscoverDomain, substate => substate.isFetchingRecommendations);