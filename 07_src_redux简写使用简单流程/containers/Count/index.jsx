import React, {Component} from 'react'
/**
 * 此处导入connect用来处理store和实际的组件之间的联系
 * connect()(组件)
 * 最用connect会返回一个包装好的组件
 */
import {connect} from 'react-redux'
import {countDecrementAction, countIncrementAction} from '../../redux/actions/count'


class Count extends Component {
  increment = () => {
    this.props.jia(1)
  }
  decrement = () => {
    this.props.jian(1)
    //一加一减, 系统脑子直接乱掉
    this.props.jia(1)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>现在的和是: {this.props.state}</h2>
        <hr/>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default connect(
  state => ({state}),
  {
    jia: countIncrementAction,
    jian: countDecrementAction
  }
)(Count)

