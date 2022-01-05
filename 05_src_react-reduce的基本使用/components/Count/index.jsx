import React, { Component } from 'react'

export default class Count extends Component {

  /* 加法 */
  increment = () => {
    const num = parseInt(this.select.value)
    this.props.jia(num)
  }
  /* 减法 */
  decrement = () => {
    const num = parseInt(this.select.value)
    this.props.jiam(num)

  }
  /* 延时加法 */
  asyncIncrement = () => {
    const num = parseInt(this.select.value)
    this.props.jiaAsync(num, 1000)
  }
  render() {
    console.log(this.props)
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

