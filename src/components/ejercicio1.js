import React, { useState } from 'react';

export default function Ejercicio1() {
  // Creamos dos estados para almacenar los valores de los números
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);

  // Función que se ejecuta cuando el botón es presionado
  const sumarNumeros = () => {
    // Calculamos la suma
    const suma = numero1 + numero2;
    // Mostramos el resultado en un alert
    alert(`La suma es: ${suma}`);
  };

  return (
    <div className="App">
      <h1>Suma de dos números</h1>
      <input
        type="number"
        value={numero1}
        onChange={(e) => setNumero1(Number(e.target.value))}
      />
      <input
        type="number"
        value={numero2}
        onChange={(e) => setNumero2(Number(e.target.value))}
      />
      <button onClick={sumarNumeros}>Sumar</button>
    </div>
  );
}

