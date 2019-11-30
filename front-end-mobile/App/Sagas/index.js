import { takeLatest, all } from 'redux-saga/effects'
import {
  ON_FETCH_RECOMENDATIONS
} from '../Stores/Discover/Constants'
import { fetchRecommendations } from './DiscoverSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */

    //rcommendation actions
    takeLatest(ON_FETCH_RECOMENDATIONS, fetchRecommendations),
  ])
}
