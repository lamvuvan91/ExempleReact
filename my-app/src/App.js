import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Board from "./container/board";

class App extends Component {
  red = () => {
    let a;
    for (let x = 0; x < 10; x++) {
      const b = (
        <div>
          <Board value={x} />
        </div>
      );
      a = (
        <div>
          {a} {b}
        </div>
      );
    }
    return a;
  };

  render() {
    const a = this.red();
    return <div className="App">{a}</div>;
  }
}

export default App;
