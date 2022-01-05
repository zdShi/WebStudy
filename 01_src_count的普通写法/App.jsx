import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 0
  }
  increment = () => {
    const num = parseInt(this.select.value)
    const { count } = this.state
    this.setState({ count: count + num })
  }
  decrement = () => {
    const num = parseInt(this.select.value)
    const { count } = this.state
    this.setState({ count: count - num })
  }
  render() {
    const { count } = this.state
    return (
      <div>
        App组件
        <hr />
        <span>{count}</span>
        <br />
        <br />
        <select ref={c => this.select = c} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}


