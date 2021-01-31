const mongoose = require('mongoose');
// const mongoURI = require('./config.js');

const uri = "mongodb+srv://suetan93:oakland510@football-squares.mpnbv.mongodb.net/football-squares?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected')
})
.catch(err => console.log(err))

mongoose.set('useFindAndModify', false);

const BoardSchema = new mongoose.Schema({
  id: Number,
  grid: [String]
});

const PlayersSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  initials: String,
  count: Number,
  squares: Object
})

const Board = mongoose.model("Board", BoardSchema);
const Players = mongoose.model("Players", PlayersSchema);

module.exports = {
  getBoard(cb) {
    Board.find({})
      .then(board => cb(null, board))
      .catch(err => cb(err))
  },

  updateBoard(newBoard, cb) {
    Board.replaceOne({id: 1}, newBoard)
      .then(success => cb(null, success))
      .catch(err => cb(err))
  },

  getPlayers(cb) {
    Players.find({})
      .then(players => cb(null, players))
      .catch(err => cb(err))
  },

  addPlayer(player, cb) {
    Players.create(player)
      .then(success => cb(null, success))
      .catch(err => cb(err))
  },

  updatePlayer(query, player, cb) {
    Players.findOneAndUpdate(query, player)
      .then(success => cb(null, success))
      .catch(err => cb(err))
  },

  deletePlayer(player, cb) {
    Players.deleteOne(player)
      .then(success => cb(null, success))
      .catch(err => cb(err))
  }
}
