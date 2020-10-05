import React, { Component } from 'react';

export default class DigitalClock extends Component {

  constructor() {
    super()
    this.state={time:new Date()}
  }

  currentTime()
  {
    this.setState({
      time: new Date()
    })
  }
  componentWillMount()
  {
setInterval(()=>this.currentTime(),1000)
  }


  render() {

    return (
      <h1 style={{fontSize: "250px"}}>
        {this.state.time.toLocaleTimeString()}
      </h1>
    )
  }
}

