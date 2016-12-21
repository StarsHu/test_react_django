import fetch from 'isomorphic-fetch'
import cookie from 'js-cookie'

export const GET_DATA = 'GET_DATA', GET_DATA_SUCCESS = 'GET_DATA_SUCCESS', GET_DATA_FAILED = 'GET_DATA_FAILED';

const getData = (url, option={}) => {
    const opt = Object.assign(
        {},
        option,
        {
            method: 'GET',
            credentials: 'same-origin',
            // headers: {
            //     Cookies: 'CheHuangAuto=' + cookie.get('CheHuangAuto')
            // }
        }
    );
    return fetch(url, opt)
};

const saveData = data => ({
    type: GET_DATA_SUCCESS,
    data
});

const errorData = error => ({
    type: GET_DATA_FAILED,
    message: error
});

export const getDataAction = function (url = 'http://localhost:8000/api/test/') {
    return dispatch => {
        dispatch({type: GET_DATA});
        getData(url)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                dispatch(saveData(json.data))
            })
            .catch(error => {
                dispatch(errorData(error))
            })
    }
};
