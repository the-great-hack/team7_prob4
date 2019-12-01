import { put, call } from 'redux-saga/effects'
import {
    onFetchRecommendationsSuccess,
    onFetchRecommendationsError
} from '../Stores/Discover/Actions'

import { Config } from '../Config'
import request from '../Services/Request';


const a1 = [{
    itemId: 1,
    itemName: 'Pizza 1',
    itemPrice: '$50',
    itemCategory: 'Italian'
}, {
    itemId: 2,
    itemName: 'Burger',
    itemPrice: '$150',
    itemCategory: 'Italian'
},
{
    itemId: 3,
    itemName: 'Risotto',
    itemPrice: '$250',
    itemCategory: 'Italian'
}];

const a2 = [{
    itemId: 1,
    itemName: 'Pizza 2',
    itemPrice: '$50',
    itemCategory: 'Italian'
}, {
    itemId: 2,
    itemName: 'Burger',
    itemPrice: '$150',
    itemCategory: 'Italian'
},
{
    itemId: 3,
    itemName: 'Risotto',
    itemPrice: '$250',
    itemCategory: 'Italian'
}];

const a3 = [{
    itemId: 1,
    itemName: 'Pizza 3',
    itemPrice: '$50',
    itemCategory: 'Italian'
}, {
    itemId: 2,
    itemName: 'Burger',
    itemPrice: '$150',
    itemCategory: 'Italian'
},
{
    itemId: 3,
    itemName: 'Risotto',
    itemPrice: '$250',
    itemCategory: 'Italian'
}];

const a4 = [{
    itemId: 1,
    itemName: 'Pizza 4',
    itemPrice: '$50',
    itemCategory: 'Italian'
}, {
    itemId: 2,
    itemName: 'Burger',
    itemPrice: '$150',
    itemCategory: 'Italian'
},
{
    itemId: 3,
    itemName: 'Risotto',
    itemPrice: '$250',
    itemCategory: 'Italian'
}];
const DATA_SET = {

    1: a1,
    2: a2,
    3: a3,
    4: a4
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
    const requestURL = 'https://cd55e367.ngrok.io/items';//`${Config.SERVER_BASE_URL}${Config.API_URL}${req}`;
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
