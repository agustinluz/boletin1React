import React, { Component } from 'react';

class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
    };
  }

  rollDice = () => {
    this.setState({ result: Math.floor(Math.random() * 6) + 1 });
  };

  render() {
    const { result } = this.state;

    return (
      <div>
        <button onClick={this.rollDice}>Lanzar dado</button>
        {result && <p>Resultado: {result}</p>}
      </div>
    );
  }
}

export default Dice;
