import {
    ON_FETCH_RECOMENDATIONS,
    ON_FETCH_RECOMENDATIONS_SUCCESS,
    ON_FETCH_RECOMENDATIONS_ERROR
} from './Constants';
/**
 Fetch Recommendations
 */
export function onFetchRecommendations(req) {
    return {
        type: ON_FETCH_RECOMENDATIONS,
        req
    }
}

export function onFetchRecommendationsSuccess(data) {
    return {
        type: ON_FETCH_RECOMENDATIONS_SUCCESS,
        data
    }
}

export function onFetchRecommendationsError(error) {
    return {
        type: ON_FETCH_RECOMENDATIONS_ERROR,
        error
    }
}