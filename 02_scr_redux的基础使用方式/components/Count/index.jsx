import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {

  /* componentDidMount() {
    //监测redux中state的变化
    store.subscribe(() => {
      //通过调用setState方法来触犯 render()
      this.setState({})
    })
  } */
  increment = () => {
    const num = parseInt(this.select.value)
    // { type: 'increment', data: num } action对象
    store.dispatch({ type: 'increment', data: num })
  }
  decrement = () => {
    const num = parseInt(this.select.value)
    store.dispatch({ type: 'decrement', data: num })
  }
  render() {
    return (
      <div>
        <h2>当前的Count值: {store.getState()}</h2>
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

