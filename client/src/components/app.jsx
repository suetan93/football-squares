import React, { useState, useEffect } from 'react';
import Board from './Board.jsx';
import PlayerList from './PlayerList.jsx';
import Scores from './Scores.jsx';
import sampleBoard from '../../../sampledata.js'
import players from '../../../playerdata.js'

const App = () => {
  const [board, setBoard] = useState(new Array(100).fill(''));
  const [currentPlayer, setPlayer] = useState(null);
  const [playerIndex, setIndex] = useState(null);
  const [playersList, setList] = useState([]);
  const [showForm, setForm] = useState(false);


  // useEffect(() => {
  //   getBoardData()}, []
  // )

  useEffect(() => {
    getPlayersData()}, []
  )

  useEffect(() => {
    selectPlayer(playerIndex)}, [playersList]
  )

  const getBoardData = () => {
    //call to database
    setBoard(sampleBoard)
  }

  const getPlayersData = () => {
    //call to database
    setList(players)
  }

  const selectPlayer = (i) => {
    setPlayer(playersList[i])
    setIndex(i)
  }

  const displayForm = () => {
    setForm(!showForm)
  }

  const addNewPlayer = (player) => {
    let listCopy = [...playersList]
    for (let person of listCopy) {
      if (person.initials === player.initials) {
        alert('Sorry, initials already exist.')
        return;
      }
    }
    listCopy.push(player)
    setList(listCopy)
    setIndex(listCopy.length-1)
    displayForm();
  }

  const deletePlayer = () => {
    let listCopy = [...playersList]
    let boardCopy = [...board]
    let obj = currentPlayer.squares
    for (let box in obj) {
      boardCopy[obj[box]] = '';
    }
    listCopy.splice(playerIndex, 1)
    setList(listCopy)
    setBoard(boardCopy)
  }

  const handleClick = (i) => {
    let boardCopy = [...board]
    let listCopy = [...playersList];
    if (!currentPlayer || (boardCopy[i] && boardCopy[i] !== currentPlayer.initials)) return;
    if (boardCopy[i] === currentPlayer.initials) {
      boardCopy[i] = '';
      listCopy[playerIndex].count--
      delete listCopy[playerIndex].squares[i]
    } else {
      boardCopy[i] = currentPlayer.initials
      listCopy[playerIndex].count++
      listCopy[playerIndex].squares[i] = i
    }
    //must also update DB with new board and players
    setList(listCopy)
    setBoard(boardCopy);
  }


  return (
    <div className="app">
      <header>
        <h1>SUPERBOWL SQUARES</h1>
      </header>
      <br />
      <main className="content">
        <PlayerList
          players={playersList}
          selectPlayer={selectPlayer}
          currentPlayer={currentPlayer}
          addNewPlayer={addNewPlayer}
          deletePlayer={deletePlayer}
          displayForm={displayForm}
          showForm={showForm} />
        {/* <div className="instructions">
          How to play:
        </div> */}
        <Board squares={board} handleClick={handleClick} />
        <Scores />
      </main>
    </div>
  )
};

export default App;