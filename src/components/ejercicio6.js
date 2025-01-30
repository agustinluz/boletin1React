import React, { Component } from 'react';
import './Dados.css';

export default class JuegoDados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numJugadores: 0,
            dado: '',
            jugadores: [],
            puntos: [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]],
            turnoActual: 0
        };
        this.lanzarDado = this.lanzarDado.bind(this);
        this.seleccionarJugadores = this.seleccionarJugadores.bind(this);
        this.pedirNombres = this.pedirNombres.bind(this);
        this.mostrarGanador = this.mostrarGanador.bind(this);
    }

    seleccionarJugadores(event) {
        this.setState({ numJugadores: event.target.value });
    }

    pedirNombres() {
        let nombres = [];

        for (let i = 1; i <= this.state.numJugadores; i++) {
            let nombre = prompt(`Nombre del jugador ${i}`, `Jugador ${i}`);
            nombres.push(nombre);
        }

        this.setState({ jugadores: nombres });
    }

    lanzarDado() {
        if (this.state.jugadores.length <= 1) {
            alert("Agrega más jugadores");
        } else {
            let nuevosPuntos = this.state.puntos;

            for (let i = 0; i < this.state.numJugadores; i++) {
                let dadoValor = Math.floor(Math.random() * 6 + 1);
                nuevosPuntos[i][this.state.turnoActual] = dadoValor;
                nuevosPuntos[i][5] += dadoValor;
                nuevosPuntos[i][6] = (nuevosPuntos[i][5] / (this.state.turnoActual + 1)).toFixed(2);
            }

            this.setState({
                puntos: nuevosPuntos,
                turnoActual: this.state.turnoActual + 1
            });
        }
    }

    mostrarGanador() {
        let mejorPuntaje = 0;
        let ganador = "";

        for (let i = 0; i < this.state.numJugadores; i++) {
            let total = this.state.puntos[i][5];
            if (total > mejorPuntaje) {
                mejorPuntaje = total;
                ganador = this.state.jugadores[i];
            }
        }

        alert(`Ganador: ${ganador} con ${mejorPuntaje} puntos.`);
    }

    render() {
        return (
            <div>
                <p>
                    <select value={this.state.numJugadores} onChange={this.seleccionarJugadores}>
                        <option>- Elegir jugadores -</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    <button onClick={this.pedirNombres} disabled={this.state.numJugadores === 0}>Comenzar</button>
                    <button onClick={this.lanzarDado} disabled={this.state.turnoActual === 5 || this.state.jugadores.length === 0}>Tirar</button>
                    <button onClick={this.mostrarGanador} disabled={this.state.turnoActual !== 5 || this.state.jugadores.length === 0}>Ganador</button>
                </p>
                <table>
                    <tr>
                        <th>Jugador</th>
                        <th>R1</th>
                        <th>R2</th>
                        <th>R3</th>
                        <th>R4</th>
                        <th>R5</th>
                        <th>Total</th>
                        <th>Promedio</th>
                    </tr>
                    {this.state.jugadores.map((jugador, index) => (
                        <tr key={index}>
                            <td>{jugador}</td>
                            {this.state.puntos[index].map((punto, i) => (
                                <td key={i}>{punto}</td>
                            ))}
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}
