import React, { useState, useEffect } from 'react';
import Board from './Board.jsx';
import PlayerList from './PlayerList.jsx';
import Scores from './Scores.jsx';
import sampleBoard from '../../../sampledata.js'

const App = () => {
  const [board, setBoard] = useState(new Array(100).fill(null));
  const [currentPlayer, setPlayer] = useState('$$$');

  useEffect(() => {
    getBoardData()
  }, [])

  const getBoardData = () => {
    setBoard(sampleBoard)
  }

  const handleClick = (i) => {
    let boardCopy = [...board]
    if (!currentPlayer || boardCopy[i]) return;
    boardCopy[i] = currentPlayer;
    //must also update DB with new board
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