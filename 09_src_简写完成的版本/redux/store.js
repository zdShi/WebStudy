/**
 * createStore:用来创建store
 * applyMiddleware:用来添加一些自定的处理方式, thunk为react提供的异步处理方法
 * combineReducers:用来合并来自不同组件的reducer
 */
import {applyMiddleware, createStore} from 'redux'
// 引入thunk, 用于支持异步
import thunk from 'redux-thunk'
//引入redux-devtools-extension
//composeWithDevTools用来包裹createStore的第二个参数, 用来配置浏览器的调试工具
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from '../redux/reducers'

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
