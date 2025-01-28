import React, { Component } from "react";
import "./Calculator.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "0",
    };
  }

  handleClick(value) {
    const { input } = this.state;
    if (value === "CE") {
      this.setState({ input: "0" });
    } else if (value === "=") {
      try {
        this.setState({ input: eval(input).toString() });
      } catch {
        this.setState({ input: "Error" });
      }
    } else {
      if (input === "0") {
        this.setState({ input: value });
      } else {
        this.setState({ input: input + value });
      }
    }
  }

  render() {
    const { input } = this.state;

    return (
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="buttons">
          <button onClick={() => this.handleClick("1")}>1</button>
          <button onClick={() => this.handleClick("2")}>2</button>
          <button onClick={() => this.handleClick("3")}>3</button>
          <button onClick={() => this.handleClick("/")}>/</button>
          <button onClick={() => this.handleClick("4")}>4</button>
          <button onClick={() => this.handleClick("5")}>5</button>
          <button onClick={() => this.handleClick("6")}>6</button>
          <button onClick={() => this.handleClick("*")}>x</button>
          <button onClick={() => this.handleClick("7")}>7</button>
          <button onClick={() => this.handleClick("8")}>8</button>
          <button onClick={() => this.handleClick("9")}>9</button>
          <button onClick={() => this.handleClick("-")}>-</button>
          <button onClick={() => this.handleClick("0")}>0</button>
          <button onClick={() => this.handleClick(".")}>.</button>
          <button onClick={() => this.handleClick("=")} className="green">=</button>
          <button onClick={() => this.handleClick("+")}>+</button>
          <button onClick={() => this.handleClick("CE")} className="red">CE</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
