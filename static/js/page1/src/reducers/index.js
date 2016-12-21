import {combineReducers} from 'redux'
import {GET_DATA, GET_DATA_FAILED, GET_DATA_SUCCESS, getDataAction} from '../actions/actions'


const initState = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    message: '',
};

const reducer = function (state = initState, action) {
    switch (action.type) {
        case GET_DATA :
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case GET_DATA_SUCCESS :
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.data,
                message: '载入成功',
            });
        case GET_DATA_FAILED :
            return Object.assign({}, state, {
                didInvalidate: true,
                message: action.message
            });
        default:
            return state
    }
};

const reducers = combineReducers({
    tableData: reducer,
});

export default reducers
