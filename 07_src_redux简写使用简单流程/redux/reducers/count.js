import {DECREMENT, INCREMENT} from '../constant'

/**
 * reducer 实际上是一个函数, 接收两个参数
 * @param preSate 旧的state对象
 * @param action  action对象, 一般带有新的数据以及处理类型
 */

export default function (preSate = 0, action) {
  //从action中解构出处理类型和数据
  const {type, data} = action
  //根据类型处理
  switch (type) {
    case INCREMENT:
      return preSate + data
    case DECREMENT:
      return preSate - data
    default:
      return preSate
  }
}
