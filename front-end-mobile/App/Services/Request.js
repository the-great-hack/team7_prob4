// import 'whatwg-fetch';
import merge from 'lodash/merge';
// import Alert from '../Components/Alert';
// import RNFetchBlob from 'rn-fetch-blob';
import { Alert } from 'react-native';


/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
    if (response.status === 204 || response.status === 205) {
        return null;
    }
    return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */

/* eslint-disable no-nested-ternary */

function getErrorMessage(json) {
    return json.message ? json.message : json.error ? json.error.message : '';
}


let showingAlert = false
function showAlert({ title, message }) {
    if (showingAlert) return false;
    Alert.alert(
        title,
        message,
        [
            {
                text: 'OK', onPress: () => {
                    showingAlert = false
                }
            },
        ],
        { cancelable: false },
    );
    showingAlert = true;
}
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    if (response.message === 'Network request failed') {

        return {
            json: response,
            throwError: true,
        }
    }
    return response.json().then(json => {
        if (response.status === 401) {
            console.log("Error: ", getErrorMessage(json));
            if (global.expireUserSession) global.expireUserSession.props.onPress();
            // showAlert({ title: 'Session Expired', message: getErrorMessage(json) });
        } else {
            console.log("API error : ", getErrorMessage(json));
            showAlert({ title: 'Error', message: getErrorMessage(json) });
        }
        return {
            json,
            throwError: true,
        };
    });
}

function checkException(response) {
    // this checks if response had an error and in this case it throws it
    if (response.throwError) {
        const errMsg = getErrorMessage(response.json);
        const error = new Error(errMsg);
        error.error = response.json;
        throw error;
    }

    return response;
}

function encodeURI(url, opts) {
    if (opts && opts.queryParams) {
        const params = opts.queryParams;
        const esc = encodeURIComponent;
        const query = Object.keys(params)
            .map(k => `${esc(k)}=${esc(params[k])}`)
            .join('&');
        return `${url}?${query}`;
    }
    return url;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */

export default function request(url, options) {
    const opts = {
        headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*' ,
            Authorization: `bearer ${options.jwtToken}`,
        },
    };

    return fetch(encodeURI(url, options), merge(opts, options || {}))
        .then(checkStatus, checkStatus)
        .then(checkException) // <-- check if exception was raised and throws it with the parse response
        .then(parseJSON);
}
