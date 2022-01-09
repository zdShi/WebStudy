import React, { Component } from 'react'

class Demo extends Component {
  render() {
    return (
      <div>
        {/*注意此处的AB的父子关系，其实式Demo传给A的标签内属性*/}
        {/*<A>
          <B/>
        </A>*/}
        {/*可以在此处传值的方式
            实际上传递了一个回调函数，在A组件内调用，返回了一个组件*/}
        <A render={name => <B name={name} />} />
      </div>
    )
  }
}
class A extends Component {
  state = {
    name: 'bibi'
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>A组件</h2>
        <div>{this.props.render(this.state.name)}</div>
      </div>
    )
  }
}
class B extends Component {
  render() {
    console.log(this.props)
    return <div>{this.props.name}</div>
  }
}

export default Demo
