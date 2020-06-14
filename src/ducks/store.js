import {createStore, combineReducers, applyMiddleware} from 'redux'
import userReducer from './userReducer'
import postsReducer from './postsReducer'
import promiseMiddleware from 'redux-promise-middleware'


const rootReducer = combineReducers({
    users: userReducer,
    posts: postsReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))