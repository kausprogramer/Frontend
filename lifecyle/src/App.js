import React, { Component } from 'react'
import Counter from './component/Counter';
export default class App extends Component {

  constructor(){
    super();
    this.state={
      count:0
    };
  }
  componentDidMount(){
    console.log("this is at the time of mount");
  }
  handleClick(){
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div>
        <Counter num = {this.state.count}></Counter>
        <button onClick={()=> {this.handleClick()}}>click me</button>
      </div>
    )
  }
}
