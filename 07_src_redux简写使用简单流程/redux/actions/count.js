/**
 * action的目的是接收data参数并包装成对象, 最后交由reducer处理
 * - 此处的数据可以是异步数据
 */
import {DECREMENT, INCREMENT} from '../constant'

export const countIncrementAction = data => ({type: INCREMENT, data})
export const countDecrementAction = data => ({type: DECREMENT, data})
