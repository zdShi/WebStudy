import React, {Component} from 'react'
import {decrementAction, incrementAction, incrementAsyncAction} from '../../redux/actions/count'
import {connect} from 'react-redux'

/* 定义UI组件 */

class Count extends Component {
  /* 加法 */
  increment = () => {
    const num = parseInt(this.select.value)
    this.props.incrementAction(num)
  }
  /* 减法 */
  decrement = () => {
    const num = parseInt(this.select.value)
    this.props.decrementAction(num)

  }
  /* 延时加法 */
  asyncIncrement = () => {
    const num = parseInt(this.select.value)
    this.props.incrementAsyncAction(num, 1000)
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <h2>当前的Count值: {this.props.state.count}</h2>
        <select ref={c => this.select = c}>
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

/**
 * connect
 *的对方身上散发的是否适当放松放松方法是否
 */
export default connect(
  state => ({state}),
  {
    incrementAction,
    decrementAction,
    incrementAsyncAction
  }
)(Count)
