import productReducer from './Products/productReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    product: productReducer,
})

export default rootReducer
