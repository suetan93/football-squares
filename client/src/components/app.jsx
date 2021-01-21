import React, { useState, useEffect } from 'react';
import Board from './Board.jsx';
import PlayerList from './PlayerList.jsx';
import Scores from './Scores.jsx';

const App = () => {
  const [board, setBoard] = useState(new Array(100).fill(null));
  const [currentPlayer, setPlayer] = useState('ST');

  const handleClick = (i) => {
    let boardCopy = [...board];
    boardCopy[i] = currentPlayer;
    setBoard(boardCopy);
  }

  return (
    <div>
      <header>
        <h1>Superbowl Squares</h1>
      </header>
      <br />
      <section className="content">
        <PlayerList />
        <div className="instructions">
          How to play:
        </div>
        <Scores />
        <Board squares={board} handleClick={handleClick}/>
      </section>
    </div>
  )
};

export default App;