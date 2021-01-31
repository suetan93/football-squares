import React, { useState, useEffect } from 'react';
import axios from 'axios';``
import Board from './Board.jsx';
import PlayerList from './PlayerList.jsx';
import Scores from './Scores.jsx';
import AlertBox from './AlertBox.jsx'

const App = () => {
  const [board, setBoard] = useState(new Array(100).fill(''));
  const [currentPlayer, setPlayer] = useState(null);
  const [currentSquares, setSquares] = useState(null);
  const [playerIndex, setIndex] = useState(null);
  const [playersList, setList] = useState([]);
  const [showForm, setForm] = useState(false);
  const [showAlert, setAlert] = useState(false);

  useEffect(() => {
    getBoardData()}, []
  )

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
    axios.get('/board')
      .then(board => setBoard(board.data[0].grid))
      .catch(console.log)
  }

  const getPlayersData = () => {
    axios.get('players')
      .then(players => setList(players.data))
      .catch(console.log)
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

  // const highlightSquares = () => {
  //   let boardCopy = [...board]
  //   if (currentPlayer) {
  //     let obj = currentPlayer.squares
  //     for (let key in obj) {
  //       let value = obj[key]
  //       let el = document.querySelector(`#A${value}`)
  //       el.style.backgroundColor = "#FFFCCB"
  //     }
  //   }
  // }

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
    let listCopy = [...playersList]
    let player = listCopy[playerIndex]
    if (!currentPlayer || (boardCopy[i] && boardCopy[i] !== currentPlayer.initials)) return;
    if (boardCopy[i] === currentPlayer.initials) {
      boardCopy[i] = '';
      player.count--
      delete player.squares[i]
    } else {
      boardCopy[i] = currentPlayer.initials
      player.count++
      if (!player.squares) player.squares = {}
      player.squares[i] = i
    }
    setList(listCopy);
    setBoard(boardCopy);
    //must also update DB with new board and players
    axios.put('/board', {grid: boardCopy, id: 1})
      .then(success => console.log(success.data))
      .catch(console.log)

    axios.patch('/player',
      {player: {initials: player.initials},
      update: {count: player.count, squares: player.squares}})
      .then(success => console.log(success.data))
      .catch(console.log)
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