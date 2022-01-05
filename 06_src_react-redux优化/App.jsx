import React, { Component } from 'react'
import store from './redux/store'
/* 组件 */
import Count from './containers/Count' //容器组件

export default class App extends Component {
  render() {
    return (
      <div>
        App组件
        <hr />
        {/* store通过props传递容器组件, 容器内做了处理, 将state和一些API, 指定connect的参数函数的参数 */}
        <Count store={store} />
      </div>
    )
  }
}


