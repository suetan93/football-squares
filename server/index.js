const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3003

const public = path.join(__dirname, '../client/dist')

app.use(express.static(public))

app.listen(3003, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('listening on port: ', PORT)
  }
})