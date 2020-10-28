const express = require('express')
const app = express()

app.get('/events', function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache'
  })
  setInterval(() => {
    date = new Date()
    res.write("time: " + date.toISOString() + "\n\n")
  }, 1000)
})

app.listen(3000)
