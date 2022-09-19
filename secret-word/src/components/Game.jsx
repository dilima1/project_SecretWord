import React from 'react';
import './styles/Game.css';

function Game({ verifyLetter }) {
  return (
    <div>
      <h1>Game</h1>
      <button type="button" onClick={ verifyLetter }>Finalizar Jogo</button>
    </div>
  );
}

export default Game;
