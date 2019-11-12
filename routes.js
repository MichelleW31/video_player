const express = require('express')
const pool = require('./pg-connection-pool.js').pool
const app = express()

// GETTING VIDEOS
app.get('/videos', function (req, res) {
  pool.query('select * from video').then((result) => {
    res.send(result.rows)
  })
})

// POSTING VIEWS
app.put('/videos/views:id', function (req, res) {
  let id = req.params
  let value = [id.id]
  let sql = 'update video set vid_views = vid_views + 1 where vid_id = $1::int'
  pool.query(sql, value).then(() => {
    pool.query('select * from video').then((result) => {
      res.send(result.rows)
    })
  })
})

// POSTING LIKES AND DISLIKE WHEN ADDED OR REMOVED
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

// GETTING COMMENTS
app.get('/comments', function (req, res) {
  pool.query('select * from comments').then((result) => {
    res.send(result.rows)
  })
})

// POSTING COMMENTS
app.post('/comments/addComment', function (req, res) {
  let data = req.query
  let sql = 'insert into comments(vid_id, user_name, comment_text) values($1::int, $2::text, $3::text)'
  let values = [ data.vid_id, data.user_name, data.comment_text ]

  pool.query(sql, values).then(() => {
    pool.query('select * from comments where vid_id = $1::int', [data.vid_id]).then((result) => {
      res.send(result.rows)
    })
  })
})

module.exports = app
