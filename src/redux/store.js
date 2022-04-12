import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import {composeWithDevTools} from 'redux-devtools-extension'
import { counter } from './reducers'

// const store = createStore(counter, composeWithDevTools(applyMiddleware(thunk)))//应用异步
const store = createStore(counter, applyMiddleware(thunk))//应用异步中间件

// 中间件
export default store;
