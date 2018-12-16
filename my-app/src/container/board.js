import React from "react";
import Square from "./square";
export default class Board extends React.Component {
  render() {
    if (this.props.value < 10) {
      return <Square value={this.props.value} />;
    }
  }
}
