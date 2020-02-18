import React, { Component } from "react";

export default class clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  //set interval akan memanggil update clock 1 detik sekali
  //set interval pnya nodejs
  componentDidMount() {
    this.timerID = setInterval(() => this.updateClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateClock() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hellow World</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
