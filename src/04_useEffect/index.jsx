import React from 'react'
import ReactDOM from 'react-dom'
function Demo() {
  const [count, setCount] = React.useState(0)

  /*useEffect用来模仿生命周期函数
   * 参数：
   * 1触发时执行的回调，
   *  - 可以设置一个函数返回值，当卸载组件啊的时候触发，即willUnmount
   * 2控制触发的范围
   *  - 如果没有参数，则每次更任何内容都会触发
   *  - 如果传入一个空数组，相当于生命周期中的 didMount初次挂载执行一次
   *  - 如果传入的指定的 state 对象（usState返回的，可以是多个），则监测指定 state 的变化，即只在当前state发生变化时才会执行回调
   *    此时类似于componentUpdate
   * */
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [count])
  function add() {
    setCount(perState => perState + 1)
  }
  function removeComponent() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={add}>+1</button>
      <button onClick={removeComponent}>卸载</button>
    </div>
  )
}

export default Demo
