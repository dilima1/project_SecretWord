import React from 'react';
import './styles/GamerOver.css';

function GamerOver({ retry }) {
  return (
    <div>
      <h1>GamerOver</h1>
      <button type="button" onClick={ retry }>Resetar Jogo</button>
    </div>
  );
}

export default GamerOver;
