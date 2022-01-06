import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
/**
 * 导入provider用来分发给需要store的组件
 */
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)

