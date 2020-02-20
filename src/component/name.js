import React, { Component } from "react";

export default class name extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
  }
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
name.defaultProps = {
  name: "Mohammad Rzqy Pratama"
};
