const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const connectUsers = {}

io.on('connection', socket => {
  // console.log('Nova conexão', socket.id)
  const { user } = socket.handshake.query
  connectUsers[user] = socket.id
  console.log(user, socket.id)
})

mongoose.connect('mongodb://localhost:27017/tindev?authSource=admin', {
  user: 'development',
  pass: 'development',
  useNewUrlParser: true
})

app.use((req, res, next) => {
  req.io = io
  req.connectUsers = connectUsers

  return next()
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)
console.log('listening on port 3333')
