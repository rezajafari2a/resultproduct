import { FETCH_ITEM_FAILURE, FETCH_ITEM_SUCCESS, FETCH_ITEM_REQUEST } from './productActionType'
import axios from 'axios'

const headers = {
    'Content-Type': 'application/json'
}

const fetchItems = () => {

    return function (dispatch) {
        dispatch(requested())
        axios.get('http://dummy.restapiexample.com/api/v1/employees',
         { headers: headers })
            .then(response => {
                dispatch(request_success(response.data.data))
                
            }).catch(error => {
                if (error.response.data.message) {
                    const data = error.response.data.message
                    dispatch(request_failure(data))
                } else {
                    dispatch(request_failure(error))
                }
            })
    }
}


const requested = () => {
    return {
        type: FETCH_ITEM_REQUEST
    }
}

const request_success = (data) => {
    return {
        type: FETCH_ITEM_SUCCESS,
        payload: data
    }
}

const request_failure = (error) => {
    return {
        type: FETCH_ITEM_FAILURE,
        payload: error,

    }
}

export { requested, request_success,fetchItems, request_failure }