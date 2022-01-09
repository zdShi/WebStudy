import React, { Component, PureComponent } from 'react'
//使用PureComponent可以重写 生命周期钩子 shouldComponentWillUpdate(preState,preProps)
//新旧state和props进行浅比较，如果未发生变化则不会执行 render 函数
//setState -- should -- will -- render
class Demo extends Component {
  state = {
    car: '奥迪'
  }
  changeCar = () => {
    this.setState({ car: '奥拓' })
  }
  render() {
    console.log('father---render')
    return (
      <div>
        <h2>Car: {this.state.car}</h2>
        <button onClick={this.changeCar}>换车</button>
        <Child car={this.state.car} />
      </div>
    )
  }
}
class Child extends PureComponent {
  render() {
    console.log('child---render')
    return (
      <div>
        <h3>form{this.props.car}</h3>
      </div>
    )
  }
}

export default Demo
