import React, {Component} from 'react';

class App extends Component {
  state={
    count:0
  }
  handleAdd = ()=>{
  //  获取select值
    const num = this.select.value;
    let {count} = this.state;
  //  进行运算  更新state
    this.setState({count:count + num * 1})
  }
  handleDecrement = () => {
    //  获取select值
    const num = this.select.value;
    let {count} = this.state;
    //  进行运算  更新state
    this.setState({count:count - num * 1})
  }
  handleOdd = () => {
    //  获取select值
    const num = this.select.value;
    let {count} = this.state;
    //  进行运算
    if(num%2===1){
      this.setState({count:count + num*1})
    }
  }
  handleAsync = () => {
    //  获取select值
    const num = this.select.value;
    let {count} = this.state;
    setTimeout(()=>{
      this.setState({count:count + num*1})
    },1000)
  }
  render () {
    return (
      <div>
        <h2>click {this.state.count} times</h2>
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

export default App;