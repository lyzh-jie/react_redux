import React from 'react'
import ReactDom from 'react-dom'

import App from './components/app'
import store from './redux/store';

//定义渲染组件标签的函数
function render() {
  ReactDom.render(<App store={store}/>,document.getElementById('root'))
}
//初始化渲染
render();
//注册（订阅）监听 一旦状态发生改变，自动重新渲染
store.subscribe(function () {
  render();
})