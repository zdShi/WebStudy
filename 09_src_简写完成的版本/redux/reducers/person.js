/*这里时person的reducer*/
import {ADDPERSON} from '../constant'

export default function persons(preState = [{id: 1, name: 'tom', age: 19}], action) {
  //解构出action中的数据与处理类型
  const {data, type} = action
  //依据类型对数据进行处理
  switch (type) {
    case ADDPERSON:
      /*perStater如果是一个引用类型的数据引,
      采用修改原数组的方法, 最终返回的仍然时原数组的引用(引用地址未改变是无法触发diff更新页面的)
      所以要放回一个新的引用类型地址, 此处也就是一个新的数组*/
      // let newState = [data]
      // newState = preState.unshift(data) //返回 newState
      //return newState.concat(newState)
      // 或者直接返回 [data, perState]
      // 有时也许对象的复杂度需要用到深拷贝
      // !!!总之一定要返回一个新的引用
      return [data, ...preState]
    default:
      return preState
  }
}
