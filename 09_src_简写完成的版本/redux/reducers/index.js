/**
 * 此处用来合并reducer
 */
import {combineReducers} from 'redux'
// 引入为reducer
import count from './count'
import persons from './person' //合并reducer
// 合并reducer, 内部对象的命名将会作为组件获取store中数据时的key值
export default combineReducers({
  count,
  persons
})
