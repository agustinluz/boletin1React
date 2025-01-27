import React, { useState } from 'react';
import Dice from './ejercicio5';

function Game() {
  const [players, setPlayers] = useState([]);
  const [rounds, setRounds] = useState(5);
  const [currentRound, setCurrentRound] = useState(1);
  const [scores, setScores] = useState([]);
  const [turn, setTurn] = useState(0);

  const handleAddPlayer = (name) => {
    setPlayers([...players, { name, score: 0 }]);
  };

  const rollForPlayer = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    const updatedPlayers = [...players];
    updatedPlayers[turn].score += roll;
    setPlayers(updatedPlayers);
    setTurn((prev) => (prev + 1) % players.length);
    if (turn === players.length - 1) setCurrentRound((prev) => prev + 1);
  };

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <div>
      <h1>Juego de Dados</h1>
      <button onClick={() => handleAddPlayer(`Jugador ${players.length + 1}`)}>
        Añadir jugador
      </button>
      <p>Jugadores: {players.map((p) => p.name).join(', ')}</p>
      {currentRound <= rounds ? (
        <div>
          <p>Ronda: {currentRound}</p>
          <button onClick={rollForPlayer}>Tirar para {players[turn]?.name}</button>
        </div>
      ) : (
        <div>
          <h2>Clasificación Final:</h2>
          {sortedPlayers.map((p, i) => (
            <p key={i}>
              {i + 1}. {p.name}: {p.score} puntos
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Game;
