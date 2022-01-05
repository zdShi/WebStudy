import CountUI from '../../components/Count'
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from '../../redux/countActions'
import { connect } from 'react-redux'
/* 
  1.函数用来接收store中的状态
  2.将接收到的state传递给UI组件
  - 注意: 返回值只能时普通对象(在定义state时使用对象形式直接返回state对象即可)

  映射状态
*/
const mapStateToProps = state => {
  // return { sum: state }
  return { state }
}
/* 
  映射操作状态的方法, 返回值为对象
*/
const mapDispatchToProps = dispach => {
  return {
    jia: num => dispach(createIncrementAction(num)),
    jian: num => dispach(createDecrementAction(num)),
    jiaAsync: (num, time) => dispach(createIncrementAsyncAction(num, time))
  }
}

/* 
  connect方法有两个参数
  - 参数1: 将store中的state传递给UI组件
  - 参数2: 将传递需要处理state的方法
 */
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
