import { put, call } from 'redux-saga/effects'
import {
    onFetchRecommendationsSuccess,
    onFetchRecommendationsError
} from '../Stores/Discover/Actions'

import { Config } from '../Config'
import request from '../Services/Request';
import { DATA_SET } from '../DummyData';
/**
 * A saga can contain multiple functions.
 *
 * This saga contains only one to fetch recommendations.
 */
export function* fetchRecommendations(action) {
    const { req } = action;
    // Dispatch a redux action using `put()`
    // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
    const requestURL = `${Config.SERVER_BASE_URL}${Config[req]}`;
    try {
        // Call our request helper (see 'utils/request')
        let resp = yield call(request, requestURL, {
            method: 'GET',
            body: JSON.stringify(action.payload),
        });

        resp = DATA_SET[req];
        yield put(onFetchRecommendationsSuccess(resp));

    } catch (err) {
        console.log("Fetch recommendations error: ", err.errors)
        yield put(onFetchRecommendationsError(err));
    }
}
