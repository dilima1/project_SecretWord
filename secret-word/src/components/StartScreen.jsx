import React from 'react';
import './styles/StartScreen.css';

function StartScreen() {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button type="button">Começar a Jogar</button>
    </div>
  );
}

export default StartScreen;
