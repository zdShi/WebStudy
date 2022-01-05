/* 导入createStore来创建redux组件中store的方法 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
/* 引入为count组件服务的reducer */
import countReducer from './countReducer'
/* applyMiddleware 使用中间件, thunk */
export default createStore(countReducer, applyMiddleware(thunk))
