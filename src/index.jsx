import React from 'react'
import ReactDom from 'react-dom'

import App from './components/app'
import store from './redux/store';


function render() {
  ReactDom.render(<App store={store}/>,document.getElementById('root'))
}
render();

store.subscribe(function () {
  render();
})