import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleSum = () => {
    alert(`La suma es: ${parseFloat(num1) + parseFloat(num2)}`);
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={handleSum}>Sumar</button>
    </div>
  );
}

export default App;
