import React, { Component } from 'react'

export default class Counter extends Component {
    componentDidUpdate(prevProp,prevState){
        if(prevProp.num !== this.props.num){
            console.log(prevProp.num);
        }
    }
  render() {
    return (
      <div>
        <h1>{this.props.num}</h1>
    </div>
    )
  }
}
