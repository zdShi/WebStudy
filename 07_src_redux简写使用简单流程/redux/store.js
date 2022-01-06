/**
 * 此处用来创建store
 * - 导入createStore工厂函数创建store
 * - createStore的参数是reducer对象, 在外部或内部创建, 此处采用外部创建并导入
 */
import {createStore} from 'redux'
import countReducer from './reducers/count'

export default createStore(countReducer)
