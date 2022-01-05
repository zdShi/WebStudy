import React, { Component } from 'react'
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from '../../redux/countActions'
import { connect } from 'react-redux'

/* 定义UI组件 */

class Count extends Component {
  /* 加法 */
  increment = () => {
    const num = parseInt(this.select.value)
    this.props.jia(num)
  }
  /* 减法 */
  decrement = () => {
    const num = parseInt(this.select.value)
    this.props.jian(num)

  }
  /* 延时加法 */
  asyncIncrement = () => {
    const num = parseInt(this.select.value)
    this.props.jiaAsync(num, 1000)
  }
  render() {
    // console.log(this.props)
    return (
      <div>
        <h2>当前的Count值: {this.props.state}</h2>
        <select ref={c => this.select = c} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.asyncIncrement}>1s +</button>
      </div>
    )
  }
}
//#region 
/* 
  1.函数用来接收store中的状态
  2.将接收到的state传递给UI组件
  - 注意: 返回值只能时普通对象(在定义state时使用对象形式直接返回state对象即可)

  映射状态
*/
// const mapStateToProps = state => {
//   // return { sum: state }
//   return { state }
// }
/* 
  映射操作状态的方法, 返回值为对象
*/
// const mapDispatchToProps = dispach => {
//   return {
//     jia: num => dispach(createIncrementAction(num)),
//     jian: num => dispach(createDecrementAction(num)),
//     jiaAsync: (num, time) => dispach(createIncrementAsyncAction(num, time))
//   }
// }
//#endregion
/* 
  connect方法有两个参数
  - 参数1: 将store中的state传递给UI组件
  - 参数2: 将传递需要处理state的方法
 */
/* 使用react-redux中的connect ui组件和redux链接 */
export default connect(
  state => ({ state }),
  //#region 
  /* dispach => ({
    jia: num => dispach(createIncrementAction(num)),
    jian: num => dispach(createDecrementAction(num)),
    jiaAsync: (num, time) => dispach(createIncrementAsyncAction(num, time))
  }) */
  /*
    mapDispatchToProps
    最终的简写方式, 直接将函数本省传递给UI组件, 
    - 实际上, react-redux API dispach, 当传入的是一个 key: action 对象的时候
  */
 //#endregion
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction
  }
)(Count)
