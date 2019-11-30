import { put, call } from 'redux-saga/effects'
import {
    onFetchRecommendationsSuccess,
    onFetchRecommendationsError
} from '../Stores/Discover/Actions'

import { Config } from '../Config'
import request from '../Services/Request';

const DATA_SET = {
    1: ['Pizza', 'Burger', 'Risotto', '1'],
    2: ['French Fries', 'Onion Rings', '2'],
    3: ['Fried Shrimps',
        'Water', 'Coke', 'Beer', '3'],
    4: ['Cheese Cake', 'Ice Cream', '4']
};
/**
 * A saga can contain multiple functions.
 *
 * This saga contains only one to fetch recommendations.
 */
export function* fetchRecommendations(action) {
    const { req } = action;
    // Dispatch a redux action using `put()`
    // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
    const requestURL = `${Config.SERVER_BASE_URL}${Config.API_URL}${req}`;
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
