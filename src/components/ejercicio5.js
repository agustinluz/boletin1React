import React, { useState } from 'react';

function Dice() {
  const [result, setResult] = useState(null);

  const rollDice = () => {
    setResult(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div>
      <button onClick={rollDice}>Lanzar dado</button>
      {result && <p>Resultado: {result}</p>}
    </div>
  );
}

export default Dice;
