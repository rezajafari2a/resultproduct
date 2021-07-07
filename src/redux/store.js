import { createStore, applyMiddleware } from 'redux'
import rootreducer from './rootreducer'
import { composeWithDevTools } from 'redux-devtools-extension'
const thunkMiddleware = require('redux-thunk').default

const store = createStore(rootreducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store
