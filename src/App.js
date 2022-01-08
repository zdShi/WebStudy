import React, { Component } from 'react'

class App extends Component {
  state = { count: 1 }
  add = () => {
    //state可以传递两个参数，分别是state, 和一个回调函数，回到函数会在，render()执行结束后执行
    //state是同步方法，但是状态的修改是异步的
    /*this.setState({ Count: this.state.Count + 1 }, () => {
      console.log(this.state)
    })*/
    /*函数式写法：即setSate的第一个参数为函数，
    当setState需要用到state对象时（同时可以接受到props参数）可以使用函数式方式*/
    this.setState(state => ({ count: state.count + 1 }))
  }
  render() {
    return (
      <div>
        <h2>Count的值是：{this.state.count}</h2>
        <button onClick={this.add}>+1</button>
      </div>
    )
  }
}

export default App
