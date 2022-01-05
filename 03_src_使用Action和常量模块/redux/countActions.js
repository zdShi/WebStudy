/*
  该模块为count模块创建Action
*/
import { DECREMENT, INCREMENT } from './constant'
/* 箭头函数如果返回值为对象, 采用简写形式时, 需要用小括号包裹 */
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })
