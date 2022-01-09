import React, { Component, Fragment } from 'react'

class Demo extends Component {
  render() {
    return (
      /*Fragment 碎片的意思
       * 处理的时候会将Fragment标签所包裹的内容直接渲染到上级父标签
       * 同时也可以写空标签作为忽略跟标签，最终也不会渲染到节点中，但是空标签不可以设置任何属性
       * Fragment可以设置唯一的一个属性 key 用来在循环的时候识别*/
      <Fragment key={id}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </Fragment>
    )
  }
}

export default Demo
