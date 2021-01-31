import React, { useState, useEffect } from 'react';
import Axios from 'axios';``
import Board from './Board.jsx';
import PlayerList from './PlayerList.jsx';
import Scores from './Scores.jsx';
import AlertBox from './AlertBox.jsx'
import sampleBoard from '../../../sampledata.js'
import players from '../../../playerdata.js'

const App = () => {
  const [board, setBoard] = useState(new Array(100).fill(''));
  const [currentPlayer, setPlayer] = useState(null);
  const [currentSquares, setSquares] = useState(null);
  const [playerIndex, setIndex] = useState(null);
  const [playersList, setList] = useState([]);
  const [showForm, setForm] = useState(false);
  const [showAlert, setAlert] = useState(false);

  // useEffect(() => {
  //   getBoardData()}, []
  // )

  useEffect(() => {
    getPlayersData()}, []
  )

  useEffect(() => {
    selectPlayer(playerIndex)}, [playersList]
  )

  // useEffect(() => {
  //   highlightSquares()}
  // )

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
    // setSquares(playersList[i].squares)
  }

  const displayForm = () => {
    let box = document.querySelector('.player-box');
    box.classList.toggle('expand');
    setForm(!showForm)
  }

  const addNewPlayer = (player) => {
    let listCopy = [...playersList]
    listCopy.push(player)
    setList(listCopy)
    setIndex(listCopy.length-1)
    displayForm();
  }

  const displayAlert = () => {
    setAlert(!showAlert);
  }

  const deletePlayer = () => {
    let listCopy = [...playersList]
    let boardCopy = [...board]
    let obj = currentPlayer.squares
    for (let box in obj) {
      boardCopy[obj[box]] = '';
    }
    listCopy.splice(playerIndex, 1)
    setIndex(null)
    setPlayer(null)
    setList(listCopy)
    setBoard(boardCopy)
    displayAlert()
  }

  const highlightSquares = () => {
    let boardCopy = [...board]
    if (currentPlayer) {
      let obj = currentPlayer.squares
      for (let key in obj) {
        let value = obj[key]
        let el = document.querySelector(`#A${value}`)
        el.style.backgroundColor = "#FFFCCB"
      }
    }
  }

  // const removeHighlight = () => {
  //   if (previousPlayer) {
  //     let obj = previousPlayer.squares
  //     for (let key in obj) {
  //       let value = obj[key]
  //       let el = document.querySelector(`#A${value}`)
  //       el.style.backgroundColor = "#f5f5f5"
  //     }
  //   }
  // }

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
      {showAlert ? <AlertBox displayAlert={displayAlert} deletePlayer={deletePlayer} /> : null}
      <header>
        <p className="main-title">SUPER BOWL LV SQUARES</p>
      </header>
      <br />
      <main className="content">
        <PlayerList
          players={playersList}
          selectPlayer={selectPlayer}
          currentPlayer={currentPlayer}
          addNewPlayer={addNewPlayer}
          displayAlert={displayAlert}
          displayForm={displayForm}
          showForm={showForm} />
        <Board squares={board} handleClick={handleClick} />
        <Scores />
      </main>
    </div>

  )
};

export default App;