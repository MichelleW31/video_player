const express = require('express')
const pool = require('./pg-connection-pool.js').pool
const app = express()

app.get('/videos', function (req, res) {
  pool.query('SELECT * FROM video').then(function (result) {
    res.send(result.rows)
  })
})

// app.post('/', function (req, res) {
//   const data = req
//   console.log('data sent from server.js', data)
//   res.send(data)
// })

module.exports = app
