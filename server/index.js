const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')
const db = require('../database/db.js')
const PORT = process.env.PORT || 3003

const public = path.join(__dirname, '../client/dist')

app.use(cors());
app.use(express.static(public));
app.use(express.json());

//ROUTES FOR BOARD
app.get('/board', (req, res) => {
  db.getBoard((err, result) => {
    if(err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(result)
    }
  })
})

app.put('/board', (req, res) => {
  db.updateBoard(req.body, (err, result) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(201).send('Board updated')
    }
  })
})


//ROUTES FOR PLAYERS
app.get('/players', (req, res) => {
  db.getPlayers((err, players) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(players)
    }
  })
})

app.post('/player', (req, res) => {
  db.addPlayer(req.body, (err, result) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send('Player added!')
    }
  })
})

app.patch('/player', (req, res) => {
  let {player, update} = req.body
  db.updatePlayer(player, update, (err, result) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send('Player updated')
    }
  })
})

app.delete('/player', (req, res) => {
  console.log(req.body)
  db.deletePlayer(req.body, (err, result) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(202).send('Player deleted')
    }
  })
})


app.listen(PORT, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('listening on port: ', PORT)
  }
})