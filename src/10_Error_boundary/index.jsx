import React, { Component } from 'react'

class Demo extends Component {
  state = {
    errMsg: ''
  }

  /**
   * 当组件的子组件出现报错的时候，会触发该方法，并携带错误信息，作为西南西处理的边界
   * @param error 获取子组件发生的错误信息
   * @returns {{errMsg}} 将错误返回出去
   */
  static getDerivedStateFromError(error) {
    console.log(error)
    return { errMsg: error }
  }

  /**
   * 捕获getDerivedStateFromError返回的错误信息
   * @param error 错误的类型以及内容
   * @param errorInfo 错误发生的位置
   */
  componentDidCatch(error, errorInfo) {
    //捕获到错误在此处进行相关的操作
    console.log(error, errorInfo)
  }

  render() {
    return <div>{this.state.errMsg ? <h2>网络出了点小问题！</h2> : <Children />}</div>
  }
}
class Children extends Component {
  state = {
    users: [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }]
    // users: ''
  }
  render() {
    return (
      <ul>
        {this.state.users.map(user => {
          return <li key={user.a}>{user.a}</li>
        })}
      </ul>
    )
  }
}

export default Demo
