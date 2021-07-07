import { FETCH_ITEM_FAILURE,FETCH_ITEM_SUCCESS,FETCH_ITEM_REQUEST } from './productActionType'
const initsate = {
    error: "",
    data: [],
    loading: false,
}

const productReducer = (state = initsate, action) => {
    switch (action.type) {
        case FETCH_ITEM_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_ITEM_SUCCESS: return {
            loading: false,
            data: action.payload,
            error: "",
            token:action.payload.token
        }
        case FETCH_ITEM_FAILURE: return {
            loading: false,
            data: [],
            error: action.payload,
        }
        default : return state
    }
}

export default productReducer