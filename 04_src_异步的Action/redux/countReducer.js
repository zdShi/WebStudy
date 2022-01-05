/*
  1.创建一个为 Count组件服务的reducer, reducer的本质是一个函数
  2.reducer有两个参数
    - preSate初始值,
    - action初始对象,
    > 注意: store初始化话会默认调用一次定义好的reducer
    preSate 可以设置一个默认值
    action对象的 type会产生一个随机字符串 @@ 没有data
*/

import { DECREMENT, INCREMENT } from './constant'

// export default (preSate, action) => {
//   /* 从action对象中获取 type data */
//   const { type, data } = action
//   /* 根据type决定对data的处理 */
//   switch (type) {
//     case 'increment':
//       return preSate + data
//     case 'decrement':
//       return preSate + data
//     default:
//       return preSate
//   }
// }
export default function countReducer(preSate = 0, action) {
  // console.log(action)
  /* 从action对象中获取 type data */
  const { type, data } = action
  /* 根据type决定对data的处理 */
  switch (type) {
    case INCREMENT:
      return preSate + data
    case DECREMENT:
      return preSate - data
    default:
      return preSate
  }
}
