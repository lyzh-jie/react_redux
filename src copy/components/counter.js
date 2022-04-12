//ui组件不包括任何reduxAPI
import React, {Component} from 'react';
import PropTypes from 'prop-types'

/*  * as actions 一种特殊的语法相当于将actions对象中的内容全部导出
* actions 仅代表对象的名称，名称也可以为xx
* */


class Counter extends Component {
  static propTypes = {
    count:PropTypes.number.isRequired,
    handleadd:PropTypes.func.isRequired,
    handledecrement:PropTypes.func.isRequired,
    handleasync:PropTypes.func.isRequired
  }
  handleAdd = ()=>{
  //  获取select值
    const num = this.select.value *1;
    const count = this.props.count
  //  进行运算  更新state
    console.log(count);
    // debugger
    this.props.handleadd(num)
  }
  handleDecrement = () => {
    //  获取select值
    const num = this.select.value * 1;
    //  进行运算  更新state
    this.props.handledecrement(num)
  }
  handleOdd = () => {
    //  获取select值
    const num = this.select.value * 1;
    //  进行运算
    if(num%2===1){
      this.props.handleadd(num)
    }
  }
  handleAsync = () => {
    //  获取select值
    const num = this.select.value * 1;
    setTimeout(()=>{
      this.props.handleasync(num);
    },1000)
  }
  render () {
    return (
      <div>
        <h2>click {this.props.count} times</h2>
        <select ref={select => this.select = select}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>&nbsp;
        <button onClick={this.handleAdd}>+</button>&nbsp;
        <button onClick={this.handleDecrement}>-</button>&nbsp;
        <button onClick={this.handleOdd}>increment if odd</button>&nbsp;
        <button onClick={this.handleAsync}>increment async</button>
      </div>
    )
  }
}

export default Counter
