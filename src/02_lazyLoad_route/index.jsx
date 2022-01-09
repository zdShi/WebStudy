/*lazy是用来实现懒加载的函数*/
import React, { Component, lazy, Suspense } from 'react'

/* 三方 */
import { Link, Route } from 'react-router-dom'
/* 组件 */
// import Home from './views/Home'
// import About from './views/About'
/* lazyLoad加载方式 */
const Home = lazy(() => import('./views/Home'))
const About = lazy(() => import('./views/About'))

/* 样式*/

export default class Demo extends Component {
  render() {
    return (
      <div className="app">
        <h2>App组件</h2>
        <div className="box">
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <div>
            {/* 注册路由 */}
            {/*路由的懒加载 fallback 用来指定懒加载的内容， 可以设置自定义的组件*/}
            <Suspense fallback={<h2>Loading......</h2>}>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
            </Suspense>
          </div>
        </div>
      </div>
    )
  }
}
