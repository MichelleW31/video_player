const express = require('express')
const pool = require('./pg-connection-pool.js').pool
const app = express()

app.get('/videos', function (req, res) {
  pool.query('SELECT * FROM video').then((result) => {
    res.send(result.rows)
  })
})

app.put('/videos/addLikes:id', function (req, res) {
  let id = req.params
  let value = [id.id]
  let sql = 'update video set likes = likes + 1 where vid_id = $1::int'
  pool.query(sql, value).then(() => {
    pool.query('select * from video where vid_id = $1::int', value).then((result) => {
      res.send(result.rows)
    })
  })
})

app.put('/videos/addDislikes:id', function (req, res) {
  let id = req.params
  let value = [id.id]
  let sql = 'update video set dislikes = dislikes + 1 where vid_id = $1::int'
  pool.query(sql, value).then(() => {
    pool.query('select * from video where vid_id = $1::int', value).then((result) => {
      res.send(result.rows)
    })
  })
})

app.put('/videos/subtractLikes:id', function (req, res) {
  let id = req.params
  let value = [id.id]
  let sql = 'update video set likes = likes - 1 where vid_id = $1::int'
  pool.query(sql, value).then(() => {
    pool.query('select * from video where vid_id = $1::int', value).then((result) => {
      res.send(result.rows)
    })
  })
})

app.put('/videos/subtractDislikes:id', function (req, res) {
  let id = req.params
  let value = [id.id]
  let sql = 'update video set dislikes = dislikes - 1 where vid_id = $1::int'
  pool.query(sql, value).then(() => {
    pool.query('select * from video where vid_id = $1::int', value).then((result) => {
      res.send(result.rows)
    })
  })
})
module.exports = app
