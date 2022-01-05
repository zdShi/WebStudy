import React from 'react'
import ReactDOM from 'react-dom'
import store from '../src/redux/store'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

/* 直接绑定App的render函数, 有diff算法,所以不用过于担心页面的刷新 */
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById('root'))
})
