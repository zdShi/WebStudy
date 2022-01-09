import React from 'react'
function Demo() {
  /*useRef创建一个ref对象，只能存储传递一个el对象*/
  const myRef = React.useRef()
  function show() {
    console.log(myRef)
    alert(myRef.current.value)
  }
  return (
    <div>
      <input ref={myRef} type="text" />
      <button onClick={show}>点击提示input的数据</button>
    </div>
  )
}

export default Demo
