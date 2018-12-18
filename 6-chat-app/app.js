const express = require('express')
const app = express()
const server = app.listen(5000)
const io = require('socket.io').listen(server)
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser({}))
app.use(cors())
io.on('connection',(client) => {
    client.join('broadcast')
})
app.io = io

const dbPath = "mongodb://shrey:Shrey.184@ds111623.mlab.com:11623/zujo-chat-assis"
mongoose.connect(dbPath, function(err) {
    if (err) throw err;
});
app.use('/user',require('./routes/user.route'))


