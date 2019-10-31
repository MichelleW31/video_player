const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8081
const routes = require('./routes.js')
app.use(cors())
app.use(('/'), routes)

app.listen(PORT, function () {
  console.log('App\'s server listening on Port: ', PORT)
})
