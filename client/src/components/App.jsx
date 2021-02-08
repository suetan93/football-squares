import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Board from './Board.jsx';
import PlayerList from './PlayerList.jsx';
import Scores from './Scores.jsx';
import AlertBox from './AlertBox.jsx'

const App = () => {
  const [board, setBoard] = useState(new Array(100).fill(''));
  const [currentPlayer, setPlayer] = useState(null);
  const [currentSquares, setSquares] = useState({});
  const [playerIndex, setIndex] = useState(null);
  const [playersList, setList] = useState([]);
  const [showForm, setForm] = useState(false);
  const [showAlert, setAlert] = useState(false);
  const [winner, setWinner] = useState({'winner1': 46, 'winner2': null})

  useEffect(() => {
    getBoardData()}, []
  )

  useEffect(() => {
    getPlayersData()}, []
  )

  useEffect(() => {
    selectPlayer(playerIndex)}, [playersList]
  )

  useEffect(() => {
    selectSquares()}, [currentPlayer]
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
  }

  const selectSquares = () => {
    if (currentPlayer) {
      let squares = {...currentPlayer.squares}
      setSquares(squares)
    }
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

    axios.post('/player', player)
      .then(success => console.log(success.data))
      .catch(console.log)
  }

  const displayAlert = () => {
    setAlert(!showAlert);
  }

  const deletePlayer = () => {
    let listCopy = [...playersList]
    let boardCopy = [...board]
    let obj = currentPlayer.squares || {}

    for (let box in obj) {
      boardCopy[obj[box]] = '';
    }

    axios.delete('/player', {data: {initials: currentPlayer.initials}})
      .then(success => console.log(success.data))
      .catch(console.log)

    axios.put('/board', {grid: boardCopy, id: 1})
      .then(success => console.log(success.data))
      .catch(console.log)

    listCopy.splice(playerIndex, 1)
    setIndex(null)
    setPlayer(null)
    setList(listCopy)
    setBoard(boardCopy)
    displayAlert()

  }

  const clearPlayer = () => {
    setPlayer(null)
    setSquares({})
  }

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
        <div>
        <p className="main-title">SUPER BOWL LV SQUARES </p>
        <p id="sub-title">FEBRUARY 7, 2021</p>
        </div>
      </header>
      <br />
      <main className="content">
        <PlayerList
          players={playersList}
          selectPlayer={selectPlayer}
          clearPlayer={clearPlayer}
          currentPlayer={currentPlayer}
          addNewPlayer={addNewPlayer}
          displayAlert={displayAlert}
          displayForm={displayForm}
          showForm={showForm} />
        <Board squares={board} winner={winner} handleClick={handleClick} playerSquares={currentSquares} />
        <Scores />
      </main>
    </div>

  )
};

export default App;