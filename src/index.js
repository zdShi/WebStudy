import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
/* Provider, 可以自动给react-redux connect创建的容器组件传入 store */
import { Provider } from 'react-redux'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

/* 直接绑定App的render函数, 有diff算法,所以不用过于担心页面的刷新 */
// store.subscribe(() => {
//   ReactDOM.render(<App />, document.getElementById('root'))
// })
