import {createStore} from 'redux'
import {counter} from './reducers'
//根据counter创建store对象
const  store = createStore(counter)
export default store;
