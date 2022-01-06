import React, {Component} from 'react'
/* 组件 */
import Count from './containers/Count'
import Person from './containers/Person' //容器组件

export default class App extends Component {
  render() {
    return (
      <div>
        App组件
        <hr/>
        <Count/>
        <hr/>
        <Person/>
      </div>
    )
  }
}
