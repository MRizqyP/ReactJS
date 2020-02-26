import React, { Component } from "react";

export default class nyob extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        <h1>Selamat Datang di Perpustakaan</h1>
      </div>
    );
  }
}
