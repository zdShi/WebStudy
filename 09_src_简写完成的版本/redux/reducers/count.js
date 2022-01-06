import {DECREMENT, INCREMENT} from '../constant'

export default function count(preSate = 0, action) {
  // console.log(action)
  /* 从action对象中获取 type data */
  const {type, data} = action
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
