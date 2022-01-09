import React, { Component } from 'react'
/*使用createContext创建上下问对象*/
const myContext = React.createContext({}, () => {})
const { Provider, Consumer } = myContext
class Demo extends Component {
  state = {
    name: 'tom',
    age: 18
  }

  render() {
    return (
      <div>
        <h2>Demo</h2>
        {/*Provider将数据存发送给需要的子代组件*/}
        <Provider value={this.state}>
          <A />
        </Provider>
      </div>
    )
  }
}
class A extends Component {
  render() {
    return (
      <div>
        <h2>A组件</h2>
        <B />
      </div>
    )
  }
}
/*类式的写法*/
class B extends Component {
  //获取上下文对象
  static contextType = myContext
  render() {
    console.log(this)
    console.log(this.context)
    return (
      <div>
        <h2>B组件</h2>
        <C />
      </div>
    )
  }
}
/*函数式和类式通用的写法
 * Consumer*/
function C() {
  return (
    <div>
      <Consumer>{value => `${value.name}----${value.age}`}</Consumer>
    </div>
  )
}

export default Demo
