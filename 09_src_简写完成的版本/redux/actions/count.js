/*
  该模块为count模块创建Action
*/
import {DECREMENT, INCREMENT} from '../constant'

/* 同步Action */
export const incrementAction = data => ({type: INCREMENT, data})
export const decrementAction = data => ({type: DECREMENT, data})

/* 异步Action, 就是值Action的返回值为函数, 异步Action中一般都会调用同步Action, 异步的Action不是必要的 */
export const incrementAsyncAction = (data, time) => {
  /* 当传入使用异步Action返回函数时, 使用了thunk的store会将dispatch作为该返回函数的参数, 以便调用外部所需要的方法 */
  return dispatch => {
    setTimeout(() => {
      dispatch(incrementAction(data))
    }, time)
  }
}
