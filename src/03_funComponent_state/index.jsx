import React, { Component } from 'react'

/*class Demo extends Component {
  state = {
    count: 1
  }
  add = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.add}>+1</button>
      </div>
    )
  }
}*/

/*函数*/
function Demo() {
  /*state hook
   * 使用React.useState的函数，
   * 参数是初始化state的值
   * 可以返回一个长度为2的数组
   * 0为state对象，1为处理state对应的处理方法*/
  const [count, setCount] = React.useState(0)
  function add() {
    /*定义的setCount的参数有两种方式*/
    //直接操作当前state
    // setCount(count + 1)
    //使用回调函数，函数的旧的state，返回值是新的状态
    setCount(perState => perState + 1)
  }
  return (
    <div>
      <h2>Count: {count}</h2>
      {/*函数式组件没有自己的this, 可以内部指定定义方法，调用*/}
      <button onClick={add}>+1</button>
    </div>
  )
}

export default Demo
