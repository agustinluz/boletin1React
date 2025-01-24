import React, { Component } from 'react';

class JuegoDados extends Component {
  constructor(props) {
    super(props);
    // Inicializamos el estado con jugadores, turno y resultados
    this.state = {
      jugadores: [],
      turno: 0,
      resultados: [],
    };
  }

  // Método para añadir un jugador
  añadirJugador = (nombre) => {
    this.setState(prevState => ({
      jugadores: [...prevState.jugadores, { nombre, puntuaciones: [], total: 0 }]
    }));
  };

  // Método para tirar el dado
  tirarDado = () => {
    const resultado = Math.floor(Math.random() * 6) + 1;
    const nuevosJugadores = [...this.state.jugadores];
    nuevosJugadores[this.state.turno].puntuaciones.push(resultado);
    nuevosJugadores[this.state.turno].total += resultado;

    this.setState(prevState => ({
      jugadores: nuevosJugadores,
      turno: (prevState.turno + 1) % prevState.jugadores.length
    }));
  };

  render() {
    return (
      <div>
        <h1>Juego de dados</h1>
        
        {/* Botón para añadir un jugador, hasta un máximo de 4 */}
        {this.state.jugadores.length < 4 && (
          <button onClick={() => this.añadirJugador(`Jugador ${this.state.jugadores.length + 1}`)}>
            Añadir jugador
          </button>
        )}

        {/* Botón para tirar el dado, habilitado solo si hay al menos 2 jugadores */}
        <button onClick={this.tirarDado} disabled={this.state.jugadores.length < 2}>
          Tirar dado
        </button>

        <h2>Resultados</h2>
        <ul>
          {/* Mostrar los resultados de cada jugador */}
          {this.state.jugadores.map((j, index) => (
            <li key={index}>
              {j.nombre}: {j.puntuaciones.join(', ')} (Total: {j.total})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default JuegoDados;
