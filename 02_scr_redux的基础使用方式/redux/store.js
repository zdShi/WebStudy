/* 导入createStore来创建redux组件中store的方法 */
import { createStore } from 'redux'
/* 引入为count组件服务的reducer */
import countReducer from './countReducer'
/*  */
export default createStore(countReducer)
