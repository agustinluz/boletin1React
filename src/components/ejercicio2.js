import React, { Component } from 'react';

class Ejercicio2 extends Component {
  constructor() {
    super(); // Llamamos al constructor de la clase padre, pero sin `props`
    this.state = {
      dia: '', // Estado inicial para el día seleccionado
    };
  }

  manejarCambio = (event) => {
    this.setState({ dia: event.target.value }); // Actualizamos el estado con el día seleccionado
  };

  render() {
    return (
      <div>
        <h1>Selecciona un día de la semana</h1>
        <select onChange={this.manejarCambio}>
          <option value="Lunes">Lunes</option>
          <option value="Martes">Martes</option>
          <option value="Miércoles">Miércoles</option>
          <option value="Jueves">Jueves</option>
          <option value="Viernes">Viernes</option>
          <option value="Sábado">Sábado</option>
          <option value="Domingo">Domingo</option>
        </select>
        <p>{this.state.dia ? 'Has seleccionado: ${this.state.dia}' : 'Aún no has seleccionado ningún día'}</p>
      </div>
    );
  }
}

export default Ejercicio2;
