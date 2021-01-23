import React, { useState, useEffect } from 'react';
import Board from './Board.jsx';
import PlayerList from './PlayerList.jsx';
import Scores from './Scores.jsx';
import sampleBoard from '../../../sampledata.js'
import players from '../../../playerdata.js'

const App = () => {
  const [board, setBoard] = useState(new Array(100).fill(null));
  const [currentPlayer, setPlayer] = useState(null);
  const [playerIndex, setIndex] = useState(null)
  const [playersList, setList] = useState([])

  useEffect(() => {
    getBoardData()}, []
  )

  useEffect(() => {
    getPlayersData()}, []
  )

  const getBoardData = () => {
    setBoard(sampleBoard)
  }

  const getPlayersData = () => {
    setList(players)
  }

  const selectPlayer = (i) => {
    setPlayer(playersList[i])
    setIndex(i)
  }

  const handleClick = (i) => {
    let boardCopy = [...board]
    let listCopy = [...playersList];
    if (!currentPlayer || (boardCopy[i] && boardCopy[i] !== currentPlayer.initials)) return;
    if (boardCopy[i] === currentPlayer.initials) {
      boardCopy[i] = null;
      listCopy[playerIndex].count--
    } else {
      boardCopy[i] = currentPlayer.initials
      listCopy[playerIndex].count++
    }
    //must also update DB with new board and players
    setList(listCopy)
    setBoard(boardCopy);
  }

  return (
    <div>
      <header>
        <h1>Superbowl Squares</h1>
      </header>
      <br />
      <section className="content">
        <PlayerList players={playersList} selectPlayer={selectPlayer} />
        <div className="instructions">
          How to play:
        </div>
        <Scores />
        <Board squares={board} handleClick={handleClick} />
      </section>
    </div>
  )
};

export default App;