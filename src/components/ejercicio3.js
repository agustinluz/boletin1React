import React, { Component } from 'react';

class Ejercicio3 extends Component {
  // Definimos el estado 'texto' en el constructor de la clase
  constructor(props) {
    super(props)
    this.state = {
      texto: ''
    };
  }

  // Método para actualizar el estado 'texto' cuando el usuario escribe
  handleChange = (e) => {
    this.setState({ texto: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Sincronizar dos inputs</h1>
        
        
        <input 
          type="text" 
          value={this.state.texto}  // El valor de este input es el valor del estado 'texto'
          onChange={this.handleChange}  // Actualiza el estado 'texto' cuando el usuario escribe
          placeholder="Escribe algo"  // Texto que aparece cuando el input está vacío
        />
        
        
        <input 
          type="text" 
          value={this.state.texto}  // Muestra el mismo valor que el primer input
          onChange={this.handleChange}  // También actualiza el estado 'texto' cuando se escribe en este input
          placeholder="Escribe algo"  // Texto que aparece cuando el input está vacío
        />
      </div>
    );
  }
}

export default Ejercicio3;
