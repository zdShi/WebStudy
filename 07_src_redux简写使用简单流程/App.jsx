import React, {Component} from 'react'
import Count from './containers/Count'
//导入包装好的组件
export default class App extends Component {
  render() {
    return (
      <div>
        App组件
        <Count/>
      </div>
    )
  }
}


