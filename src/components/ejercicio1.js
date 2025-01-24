import React, { Component } from 'react';

// Este es un componente que calcula la suma de dos números, usando una clase
class Ejercicio1 extends Component {
  // Constructor para inicializar el estado
  constructor() {
    super();
    // Aquí guardamos los valores de los números en el estado
    this.state = {
      numero1: 0, // Inicia en 0
      numero2: 0, // Inicia en 0
    };
  }

  // Esta función hace la suma cuando hacemos clic en el botón
  sumarNumeros = () => {
    const { numero1, numero2 } = this.state; // Sacamos los valores del estado
    const suma = numero1 + numero2; // Sumamos los dos números
    alert(`La suma es: ${suma}`); // Mostramos el resultado en una ventana emergente
  };

  // Esta función actualiza el estado cuando el usuario escribe en un input
  handleInputChange = (event, key) => {
    this.setState({
      [key]: Number(event.target.value), // Actualizamos el estado dinámicamente
    });
  };

  render() {
    const { numero1, numero2 } = this.state; // Sacamos los valores del estado para usarlos en el render

    return (
      <div>
        <h1>Suma de dos números</h1>

        {/* Aquí ponemos el primer número */}
        <input
          type="number" // El input solo acepta números
          value={numero1} // Mostramos el valor actual de numero1
          onChange={(e) => this.handleInputChange(e, 'numero1')} // Actualizamos numero1 cuando el usuario escribe algo
        />

        {/* Aquí ponemos el segundo número */}
        <input
          type="number" // El input solo acepta números
          value={numero2} // Mostramos el valor actual de numero2
          onChange={(e) => this.handleInputChange(e, 'numero2')} // Actualizamos numero2 cuando el usuario escribe algo
        />

        {/* Botón para hacer la suma */}
        <button onClick={this.sumarNumeros}>Sumar</button>
      </div>
    );
  }
}

export default Ejercicio1;
